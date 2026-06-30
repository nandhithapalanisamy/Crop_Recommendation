from flask import Flask
from flask_cors import CORS
from routes.recommendation import recommendation_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(recommendation_bp)

@app.route("/")
def home():
    return {
        "message": "Crop Recommendation API Running"
    }

if __name__ == "__main__":
    app.run(debug=True, port=5000)