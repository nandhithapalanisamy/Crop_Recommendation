import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler

# =====================================================
# LOAD DATA
# =====================================================

df = pd.read_csv(
    "C:\\crop_recommendation_system\\data\\crop_recommendation_dataset_v3.csv"
)

print("Original Shape:", df.shape)

# =====================================================
# BASIC CHECKS
# =====================================================

print("\nMissing Values:")
print(df.isnull().sum())

df.drop_duplicates(inplace=True)

# =====================================================
# HANDLE MISSING VALUES
# =====================================================

for col in df.select_dtypes(include=np.number).columns:
    df[col].fillna(df[col].median(), inplace=True)

for col in df.select_dtypes(include='object').columns:
    df[col].fillna(df[col].mode()[0], inplace=True)

# =====================================================
# OUTLIER TREATMENT (IQR CAPPING)
# =====================================================

feature_cols = ['N', 'P', 'K', 'temperature', 'humidity', 'pH', 'rainfall']

for col in feature_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    df[col] = np.clip(df[col], lower, upper)

# =====================================================
# FEATURE ENGINEERING
# =====================================================

df['Total_NPK']        = df['N'] + df['P'] + df['K']
df['Avg_NPK']          = df['Total_NPK'] / 3
df['NPK_Ratio']        = df['N'] / (df['P'] + df['K'] + 1)
df['N_P_ratio']        = df['N'] / (df['P'] + 1)
df['P_K_ratio']        = df['P'] / (df['K'] + 1)
df['Temp_Humidity']    = df['temperature'] * df['humidity']
df['Rainfall_Temp']    = df['rainfall'] / (df['temperature'] + 1)
df['pH_rainfall']      = df['pH'] * df['rainfall']
df['N_rainfall']       = df['N'] * df['rainfall']
df['K_humidity']       = df['K'] * df['humidity']

# =====================================================
# ENCODE CATEGORY (ONE-HOT — nominal feature)
# =====================================================

cat_dummies = pd.get_dummies(df['category'], prefix='cat', dtype=int)
df = pd.concat([df.drop(columns=['category']), cat_dummies], axis=1)

# =====================================================
# NORMALIZE NUMERICAL FEATURES
# =====================================================

num_cols = [
    'N', 'P', 'K', 'temperature', 'humidity', 'pH', 'rainfall',
    'Total_NPK', 'Avg_NPK', 'NPK_Ratio', 'N_P_ratio', 'P_K_ratio',
    'Temp_Humidity', 'Rainfall_Temp', 'pH_rainfall', 'N_rainfall', 'K_humidity'
]

scaler = StandardScaler()
df[num_cols] = scaler.fit_transform(df[num_cols])

# =====================================================
# ENCODE TARGET LABEL (integer — for model training)
# =====================================================

label_encoder = LabelEncoder()
df['label_encoded'] = label_encoder.fit_transform(df['label'])

# Save mapping so you can decode predictions later
mapping = pd.DataFrame({
    "Crop":          label_encoder.classes_,
    "Encoded_Value": range(len(label_encoder.classes_))
})
mapping.to_csv(
    "C:\\crop_recommendation_system\\data\\Crop_label_mapping.csv",
    index=False
)

# Drop original string label
df = df.drop(columns=['label'])

# =====================================================
# SAVE CLEANED DATASET
# =====================================================

df.to_csv(
    "C:\\crop_recommendation_system\\data\\Cleaned_dataset.csv",
    index=False
)

print("\nProcessed Shape:", df.shape)
print("Columns:", df.columns.tolist())
print("\nData Cleaned Successfully!")