from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(_name_)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) for requests from frontend

# Mock Bible data
bible_data = {
    "Genesis": {1: ["In the beginning...", "Verse 2", "Verse 3"], 2: ["Verse 1", "Verse 2"]},
    "Exodus": {1: ["Verse 1", "Verse 2", "Verse 3"], 2: ["Verse 1", "Verse 2"]}
}

@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(list(bible_data.keys()))

@app.route('/book/<string:book>', methods=['GET'])
def get_chapters(book):
    return jsonify(list(bible_data[book].keys()))

@app.route('/book/<string:book>/chapter/<int:chapter>', methods=['GET'])
def get_verses(book, chapter):
    return jsonify(bible_data[book][chapter])

if _name_ == '_main_':
    app.run(debug=True)