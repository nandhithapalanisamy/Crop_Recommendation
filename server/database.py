import psycopg2

# PostgreSQL Connection
connection = psycopg2.connect(
    host="localhost",
    database="crop_recommendation",
    user="postgres",
    password="your_password",
    port="5432"
)

connection.autocommit = True

cursor = connection.cursor()


def save_prediction(input_data, prediction, confidence):

    query = """
    INSERT INTO crop_predictions
    (
        nitrogen,
        phosphorus,
        potassium,
        temperature,
        humidity,
        ph,
        rainfall,
        category,
        predicted_crop,
        confidence
    )

    VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)

    """

    values = (

        input_data["N"],
        input_data["P"],
        input_data["K"],
        input_data["temperature"],
        input_data["humidity"],
        input_data["pH"],
        input_data["rainfall"],
        input_data.get("category", ""),
        prediction,
        confidence

    )

    cursor.execute(query, values)