# AI-Based Crop Recommendation for Farmers

A machine learning powered web application that helps farmers choose the most suitable crop to grow based on their soil's nutrient levels and surrounding climate conditions. The system analyzes Nitrogen, Phosphorus, Potassium, temperature, humidity, pH, and rainfall to predict the best crop using trained regression and classification models.

## Problem Statement

Farmers often depend on traditional knowledge or trial and error when deciding which crop to cultivate, which can lead to poor yield, wasted resources, and financial loss. There is a need for a reliable, data-driven system that can study soil and climate conditions and recommend the most suitable crop, helping farmers make better decisions and improve productivity.

## Objective

- To study and analyze the soil nutrient composition (N, P, K) and climate factors that affect crop growth.
- To build and train multiple machine learning models, including regression and classification algorithms, to predict the most accurate and suitable crop.
- To compare different models and select the one that gives the highest prediction accuracy.
- To develop a simple and accessible web application using React and Flask so that farmers can use the system easily.
- To store and manage farmer and prediction data using MongoDB for scalability.

## Requirement Gathering

**Functional Requirements**
- The system should allow users to enter soil and climate values.
- The system should validate the entered data before sending it for prediction.
- The system should process the input using a trained ML model and return a recommended crop.
- The system should store user data, input history, and prediction results in the database.
- The system should allow an admin to manage the dataset and retrain or evaluate models.

**Non-Functional Requirements**
- The system should respond with a prediction within a few seconds.
- The interface should be simple enough for non-technical users such as farmers.
- The system should be scalable to handle a growing number of users and requests.
- The system should keep user data secure and consistent.

## User & Module Identification

**Users**
- Farmer / End User: Enters soil and climate data, views crop recommendations and past predictions.
- Admin: Manages the dataset, trains and retrains the ML model, monitors model accuracy.

**Modules**
1. Data Collection and Preprocessing Module
2. Model Training Module (Regression and Classification models)
3. Model Evaluation Module
4. Flask Backend / API Module
5. React Frontend Module
6. MongoDB Database Module
7. Prediction Module

## Database Requirement Analysis

Since this project uses MongoDB, data is stored as documents instead of relational tables. The four main collections required are:

1. **users** – stores name, email, and password for each registered user.
2. **soil_data** – stores each submission of N, P, K, temperature, humidity, pH, rainfall, and the linked user ID.
3. **predictions** – stores the recommended crop, confidence score, prediction date, and links to the soil_data and model used.
4. **model_info** – stores metadata about each trained model, including algorithm name, accuracy, and training date.

This structure was chosen because MongoDB's flexible document format works well for storing varying soil readings and prediction logs without needing rigid table schemas.

## Tech Stack

- **Frontend:** React
- **Backend:** Flask (Python)
- **Database:** MongoDB
- **Machine Learning:** Python, scikit-learn, XGBoost (Regression and Classification models for accurate prediction)
- **Other Tools:** Pandas, NumPy for data handling; Postman for API testing; Git and GitHub for version control

## Dataset Attributes

The dataset used for training the model contains the following attributes:

| Attribute | Description |
|---|---|
| N | Ratio of Nitrogen content in soil |
| P | Ratio of Phosphorus content in soil |
| K | Ratio of Potassium content in soil |
| temperature | Temperature of the surrounding environment |
| humidity | Relative humidity percentage |
| pH | pH value of the soil |
| rainfall | Amount of rainfall received |
| label | Name of the recommended crop |
| category | Broader category or classification group the crop belongs to |

These attributes were selected because Nitrogen, Phosphorus, and Potassium are the primary nutrients that determine soil fertility, while temperature, humidity, pH, and rainfall represent the climatic conditions needed for healthy crop growth. The label and category columns are used as the target variables that the model learns to predict.
