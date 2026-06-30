import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import (
    RandomForestClassifier,
    ExtraTreesClassifier,
    HistGradientBoostingClassifier
)
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

# =====================================================
# LOAD DATA
# =====================================================

df = pd.read_csv(
    "C:\\crop_recommendation_system\\data\\Cleaned_dataset.csv"
)

mapping = pd.read_csv(
    "C:\\crop_recommendation_system\\data\\Crop_label_mapping.csv"
)

crop_names = mapping.sort_values('Encoded_Value')['Crop'].tolist()
num_classes = len(crop_names)

# =====================================================
# FEATURES AND TARGET
# =====================================================

X = df.drop(columns=['label_encoded'])
y = df['label_encoded'].values

# =====================================================
# TRAIN / TEST SPLIT
# =====================================================

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print(f"Train: {len(X_train)} | Test: {len(X_test)} | Classes: {num_classes}")

# =====================================================
# NOTE: SMOTE removed — dataset now has 100 samples per crop
# (80 per class in training after split), which is enough for
# the models to learn directly without oversampling.
# =====================================================

X_train_res, y_train_res = X_train, y_train

# =====================================================
# MODEL 1 — LOGISTIC REGRESSION
# =====================================================

print("\nTraining Logistic Regression...")
lr = LogisticRegression(max_iter=5000, random_state=42)
lr.fit(X_train_res, y_train_res)
lr_pred = lr.predict(X_test)
lr_acc  = accuracy_score(y_test, lr_pred)
print(f"  Accuracy: {lr_acc * 100:.2f}%")

# =====================================================
# MODEL 2 — RANDOM FOREST
# =====================================================

print("Training Random Forest...")
rf = RandomForestClassifier(
    n_estimators=500,
    random_state=42,
    n_jobs=-1
)
rf.fit(X_train_res, y_train_res)
rf_pred = rf.predict(X_test)
rf_acc  = accuracy_score(y_test, rf_pred)
print(f"  Accuracy: {rf_acc * 100:.2f}%")

# =====================================================
# MODEL 3 — EXTRA TREES
# =====================================================

print("Training Extra Trees...")
et = ExtraTreesClassifier(
    n_estimators=500,
    random_state=42,
    n_jobs=-1
)
et.fit(X_train_res, y_train_res)
et_pred = et.predict(X_test)
et_acc  = accuracy_score(y_test, et_pred)
print(f"  Accuracy: {et_acc * 100:.2f}%")

# =====================================================
# MODEL 4 — HIST GRADIENT BOOSTING
# =====================================================

print("Training Hist Gradient Boosting...")
hgb = HistGradientBoostingClassifier(
    max_iter=300,
    random_state=42
)
hgb.fit(X_train_res, y_train_res)
hgb_pred = hgb.predict(X_test)
hgb_acc  = accuracy_score(y_test, hgb_pred)
print(f"  Accuracy: {hgb_acc * 100:.2f}%")

# =====================================================
# MODEL 5 — XGBOOST
# =====================================================

print("Training XGBoost...")
xgb = XGBClassifier(
    objective='multi:softmax',
    num_class=num_classes,
    eval_metric='mlogloss',
    n_estimators=300,
    learning_rate=0.1,
    max_depth=6,
    random_state=42,
    verbosity=0
)
xgb.fit(X_train_res, y_train_res)
xgb_pred = xgb.predict(X_test)
xgb_acc  = accuracy_score(y_test, xgb_pred)
print(f"  Accuracy: {xgb_acc * 100:.2f}%")

# =====================================================
# RESULTS COMPARISON
# =====================================================

results = pd.DataFrame({
    "Model": [
        "Logistic Regression",
        "Random Forest",
        "Extra Trees",
        "Hist Gradient Boosting",
        "XGBoost"
    ],
    "Accuracy (%)": [
        round(lr_acc  * 100, 2),
        round(rf_acc  * 100, 2),
        round(et_acc  * 100, 2),
        round(hgb_acc * 100, 2),
        round(xgb_acc * 100, 2),
    ]
})

print("\n" + "=" * 45)
print("       INDIVIDUAL MODEL ACCURACY SCORES")
print("=" * 45)
for _, row in results.iterrows():
    print(f"  {row['Model']:<26}: {row['Accuracy (%)']:.2f}%")
print("=" * 45)

# =====================================================
# BEST MODEL REPORT
# =====================================================

best_row        = results.sort_values("Accuracy (%)", ascending=False).iloc[0]
best_model_name = best_row["Model"]
print(f"\nBest Model: {best_model_name} ({best_row['Accuracy (%)']:.2f}%)")

pred_map = {
    "Logistic Regression":    lr_pred,
    "Random Forest":          rf_pred,
    "Extra Trees":            et_pred,
    "Hist Gradient Boosting": hgb_pred,
    "XGBoost":                xgb_pred
}

print("\nClassification Report:")
print(classification_report(
    y_test,
    pred_map[best_model_name],
    target_names=crop_names
))

import joblib
import os

# =====================================================
# SAVE EXTRA TREES MODEL
# =====================================================

SAVE_DIR = r"C:\\crop_recommendation_system\\server\\models"
os.makedirs(SAVE_DIR, exist_ok=True)

# Save Extra Trees model
joblib.dump(et, os.path.join(SAVE_DIR, "crop_model.pkl"))

# Save feature names (required for prediction API)
feature_columns = X.columns.tolist()
joblib.dump(
    feature_columns,
    os.path.join(SAVE_DIR, "feature_columns.pkl")
)

# Save crop label mapping
joblib.dump(
    mapping,
    os.path.join(SAVE_DIR, "crop_mapping.pkl")
)

joblib.dump(scaler, os.path.join(SAVE_DIR, "scaler.pkl"))
print("\n✅ Extra Trees model saved successfully!")
print(f"Location: {SAVE_DIR}")