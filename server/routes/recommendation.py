from flask import Blueprint, request, jsonify
import pandas as pd
import numpy as np
import joblib
import os
import traceback

# =====================================================
# Blueprint
# =====================================================

recommendation_bp = Blueprint("recommendation", __name__)

# =====================================================
# Paths
# =====================================================

import os

# server folder
SERVER_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# models folder
MODELS_DIR = os.path.join(SERVER_DIR, "models")

MODEL_PATH = os.path.join(MODELS_DIR, "crop_model.pkl")
FEATURE_PATH = os.path.join(MODELS_DIR, "feature_columns.pkl")
SCALER_PATH = os.path.join(MODELS_DIR, "scaler.pkl")
MAPPING_PATH = os.path.join(MODELS_DIR, "crop_mapping.pkl")

# Crop_Details_Dataset.csv is in the project root
# Project folder
PROJECT_DIR = os.path.dirname(SERVER_DIR)

# Data folder
DETAILS_PATH = os.path.join(
    PROJECT_DIR,
    "data",
    "Crop_Details_Dataset.csv"
)

# =====================================================
# Load Model
# =====================================================

model = joblib.load(MODEL_PATH)

feature_columns = joblib.load(FEATURE_PATH)

crop_mapping = joblib.load(MAPPING_PATH)

crop_details = pd.read_csv(DETAILS_PATH)

print("===================================")
print("Crop Recommendation API Loaded")
print("Model Loaded Successfully")
print("Total Features :", len(feature_columns))
print("Total Crops :", len(crop_mapping))
print("===================================")
print(type(crop_mapping))
print(crop_mapping.head())
# =====================================================
# Feature Engineering
# =====================================================

def create_features(data):

    N = float(data["N"])
    P = float(data["P"])
    K = float(data["K"])

    temperature = float(data["temperature"])
    humidity = float(data["humidity"])
    pH = float(data["pH"])
    rainfall = float(data["rainfall"])

    category = data.get("category", "")

    features = {}

    # Original Features
    features["N"] = N
    features["P"] = P
    features["K"] = K
    features["temperature"] = temperature
    features["humidity"] = humidity
    features["pH"] = pH
    features["rainfall"] = rainfall

    # Engineered Features
    features["Total_NPK"] = N + P + K

    features["Avg_NPK"] = (N + P + K) / 3

    features["NPK_Ratio"] = N / (P + K + 1)

    features["N_P_ratio"] = N / (P + 1)

    features["P_K_ratio"] = P / (K + 1)

    features["Temp_Humidity"] = temperature * humidity

    features["Rainfall_Temp"] = rainfall * temperature

    features["pH_rainfall"] = pH * rainfall

    features["N_rainfall"] =  rainfall / (temperature + 1)

    features["K_humidity"] = K * humidity

    # One Hot Encoding
    categories = [
        "Cash Crops",
        "Cereals & Grains",
        "Fiber Crops",
        "Fodder Crops",
        "Fruits",
        "Oilseeds",
        "Plantation Crops",
        "Pulses & Legumes",
        "Spices & Herbs",
        "Vegetables"
    ]

    for cat in categories:
        column = f"cat_{cat}"

        if category == cat:
            features[column] = 1
        else:
            features[column] = 0

    return features
# =====================================================
# Prediction Function
# =====================================================
def predict_crop(input_data):

    features = create_features(input_data)

    df = pd.DataFrame([features])

    # Match feature order
    df = df.reindex(columns=feature_columns, fill_value=0)

    # Prediction
    prediction = int(model.predict(df)[0])

    probabilities = model.predict_proba(df)[0]

    raw_confidence = float(np.max(probabilities))

    # Display confidence between 70% and 100%
    confidence = round(70 + (raw_confidence * 30), 2)
    predicted_crop = crop_mapping.loc[
        crop_mapping["Encoded_Value"] == prediction,
        "Crop"
    ].values[0]

    # Top 5 crops
    top5 = []

    top5_index = np.argsort(probabilities)[::-1][:5]

    for idx in top5_index:

        idx = int(idx)

        crop_name = crop_mapping.loc[
            crop_mapping["Encoded_Value"] == idx,
            "Crop"
        ].values[0]

        raw_score = float(probabilities[idx])

        display_score = round(70 + (raw_score * 30), 2)

        top5.append({
        "crop": crop_name,
        "confidence": display_score
})

    return predicted_crop, confidence, top5
# =====================================================
# API ROUTE
# =====================================================

@recommendation_bp.route("/api/recommend", methods=["POST"])
def recommend_crop():

    try:

        data = request.get_json()

        # Predict crop
        predicted_crop, confidence, top5 = predict_crop(data)

        # Get crop details
        crop = crop_details[
            crop_details["crop_name"] == predicted_crop
        ]

        if crop.empty:
            return jsonify({
                "success": False,
                "message": "Crop details not found."
            }), 404

        crop = crop.iloc[0]

        details = {
            "crop_name": crop["crop_name"],
            "category": crop["category"],
            "growth_days": int(crop["growth_days"]),
            "water_need": crop["water_need"],
            "soil_type": crop["soil_type"],
            "temp_min": float(crop["temp_min"]),
            "temp_max": float(crop["temp_max"]),
            "ph_min": float(crop["ph_min"]),
            "ph_max": float(crop["ph_max"]),
            "profitability": crop["profitability"],
            "yield_per_acre": float(crop["yield_per_acre"]),
            "market_demand": crop["market_demand"],
            "image_url": crop["image_url"]
        }

        return jsonify({

            "success": True,

            "predicted_crop": predicted_crop,

            "confidence": round(confidence, 2),

            "top5": top5,

            "details": details,

            "input_summary": {
                "N": data["N"],
                "P": data["P"],
                "K": data["K"],
                "temperature": data["temperature"],
                "humidity": data["humidity"],
                "pH": data["pH"],
                "rainfall": data["rainfall"],
                "category": data.get("category", "")
            },

            "model_info": {
                "algorithm": "Extra Trees Classifier",
                "features_used": len(feature_columns),
                "total_crop_classes": len(crop_mapping)
            }

        })

    except Exception as e:

       traceback.print_exc()

    return jsonify({
        "success": False,
        "message": str(e)
    }), 500

@recommendation_bp.route("/api/crop/<crop_name>", methods=["GET"])
def get_crop_details(crop_name):

    crop = crop_details[
        crop_details["crop_name"].str.lower() == crop_name.lower()
    ]

    if crop.empty:
        return jsonify({
            "success": False,
            "message": "Crop not found"
        }), 404

    crop = crop.iloc[0]

    details = {
        "crop_name": crop["crop_name"],
        "category": crop["category"],
        "growth_days": int(crop["growth_days"]),
        "water_need": crop["water_need"],
        "soil_type": crop["soil_type"],
        "temp_min": float(crop["temp_min"]),
        "temp_max": float(crop["temp_max"]),
        "ph_min": float(crop["ph_min"]),
        "ph_max": float(crop["ph_max"]),
        "profitability": crop["profitability"],
        "yield_per_acre": float(crop["yield_per_acre"]),
        "market_demand": crop["market_demand"],
        "image_url": crop["image_url"]
    }

    return jsonify({
        "success": True,
        "details": details
    })    