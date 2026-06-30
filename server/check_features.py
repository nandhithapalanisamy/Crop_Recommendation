import joblib

feature_columns = joblib.load("server/models/feature_columns.pkl")

for col in feature_columns:
    print(col)