# 🌱 Smart Farmer - AI-Based Crop Recommendation System

An AI-powered web application that helps farmers choose the most suitable crop based on soil nutrients and climatic conditions. The system analyzes **Nitrogen (N), Phosphorus (P), Potassium (K), pH, temperature, humidity, and rainfall** to recommend the best crop using a trained **Extra Trees Classifier** machine learning model.

---

## 📌 Problem Statement

Farmers often rely on traditional knowledge or trial-and-error methods when selecting crops. These approaches may lead to poor crop yield, inefficient resource utilization, and financial loss due to changing environmental conditions.

The Smart Farmer system addresses this challenge by providing an intelligent, data-driven crop recommendation solution that analyzes soil nutrients and climate parameters to suggest the most suitable crop for cultivation.

---

## 🎯 Objectives

- Analyze soil nutrients (Nitrogen, Phosphorus, Potassium) and climatic conditions affecting crop growth.
- Develop an intelligent crop recommendation system using Machine Learning.
- Train and evaluate multiple classification algorithms and select the best-performing model.
- Deploy the trained model through a Flask API.
- Develop a responsive web application using React, Node.js, Express.js, and Flask.
- Store user information and prediction history using PostgreSQL.
- Help farmers make accurate agricultural decisions using AI.

---

## 📋 Functional Requirements

- User Registration and Login
- Enter soil and environmental parameters
- Validate user inputs
- Predict the most suitable crop
- Display Top 5 recommended crops
- Show confidence score and crop details
- Store prediction history
- Manage user accounts securely

---

## ⚙️ Non-Functional Requirements

- Fast prediction response
- Responsive user interface
- Secure authentication
- Scalable architecture
- Reliable database storage
- Easy maintenance and future expansion

---

# 👥 Users

### Farmer

- Register/Login
- Enter soil details
- View crop recommendation
- View prediction history

### Admin

- Monitor system
- Manage datasets
- Retrain machine learning models
- Evaluate model performance

---

# 📦 Modules

- User Authentication Module
- Data Collection & Preprocessing Module
- Machine Learning Model Module
- Prediction Module
- Flask ML API Module
- Node.js Backend Module
- PostgreSQL Database Module
- React Frontend Module

---

# 🗄️ Database

The application uses **PostgreSQL** to store user information and prediction history.

### Users Table

- User ID
- Full Name
- Email
- Password
- Created Date

### Recommendation History

- User ID
- Nitrogen
- Phosphorus
- Potassium
- Temperature
- Humidity
- pH
- Rainfall
- Recommended Crop
- Confidence Score
- Prediction Date

---

# 💻 Tech Stack

## Frontend

- React.js
- Tailwind CSS

## Backend

- Node.js
- Express.js
- Flask

## Database

- PostgreSQL

## Machine Learning

- Python
- Scikit-learn
- Extra Trees Classifier
- Joblib

## Other Tools

- Pandas
- NumPy
- Axios
- Postman
- Git
- GitHub

---

# 📊 Dataset Attributes

| Attribute | Description |
|------------|-------------|
| Nitrogen (N) | Nitrogen content in soil |
| Phosphorus (P) | Phosphorus content in soil |
| Potassium (K) | Potassium content in soil |
| Temperature | Environmental temperature |
| Humidity | Relative humidity |
| pH | Soil pH |
| Rainfall | Rainfall received |
| Label | Recommended Crop |

---

# 🤖 Machine Learning Model

The application uses the **Extra Trees Classifier**, an ensemble machine learning algorithm that builds multiple randomized decision trees to improve prediction accuracy and reduce overfitting.

The model is trained using agricultural datasets containing soil nutrients and climatic parameters and predicts the most suitable crop for cultivation.

### Model Evaluation

The model was evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix

The trained model achieved approximately **95% prediction accuracy**.

---

# 🔄 Project Workflow

1. User registers or logs in.
2. User enters soil nutrient and climate values.
3. React validates the inputs.
4. Express.js processes the request.
5. Flask loads the trained Extra Trees model.
6. The ML model predicts the most suitable crop.
7. PostgreSQL stores the prediction history.
8. The recommendation is displayed along with:
   - Recommended Crop
   - Confidence Score
   - Crop Category
   - Water Requirement
   - Growth Duration
   - Market Demand
   - Top 5 Recommended Crops

---

# 🚀 Live Demo

The application is deployed on **Render**.

### 🔗 Live Application

https://smart-farmer-aiao.onrender.com

---

# ✨ Features

- Secure User Authentication
- AI-Based Crop Recommendation
- Top 5 Crop Suggestions
- Confidence Score
- Water Requirement Information
- Growth Duration
- Market Demand
- Prediction History
- Responsive UI
- REST API Integration
- PostgreSQL Database
- Fast Predictions

---

# 📈 Future Enhancements

- Real-time Weather API Integration
- Fertilizer Recommendation
- Crop Disease Detection
- IoT Soil Sensor Integration
- Satellite Image Analysis
- Market Price Prediction
- Mobile Application
- Voice Assistant
- Multi-language Support

---

# ✅ Advantages

- Accurate AI-based recommendations
- Scientific crop selection
- Reduces manual decision-making
- Improves crop productivity
- Saves time
- User-friendly interface
- Scalable architecture
- Secure authentication
- Stores prediction history
- Easy to maintain and extend

---

# 📝 Conclusion

The **Smart Farmer - AI-Based Crop Recommendation System** demonstrates how Artificial Intelligence and Machine Learning can improve agricultural decision-making. By analyzing soil nutrients and climatic conditions, the system provides accurate crop recommendations that help farmers increase productivity and optimize available resources.

The application integrates **React.js, Node.js, Express.js, Flask, PostgreSQL, and the Extra Trees Classifier** into a complete full-stack solution. Its modular architecture, secure authentication, responsive interface, and deployment on Render make it a scalable and practical application for modern precision agriculture.

The project also serves as a strong foundation for future smart farming solutions through the integration of weather forecasting, IoT devices, satellite imagery, fertilizer recommendation, and crop disease prediction.

---

# 🙏 Acknowledgements

This project was developed as part of an academic learning initiative to demonstrate the practical application of Artificial Intelligence, Machine Learning, and Full-Stack Web Development in agriculture.

Open-source technologies including **React.js, Node.js, Express.js, Flask, Scikit-learn, Extra Trees Classifier, PostgreSQL, Pandas, NumPy, Tailwind CSS, Axios, and Joblib** played a significant role in the successful implementation of this project.

---

# 📄 License

This project is developed for educational and research purposes. Feel free to use, modify, and extend the project with appropriate attribution.
