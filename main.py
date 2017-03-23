from flask import Flask, request, jsonify
import db
from model import Message
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/messages", methods=['GET', 'POST'])
def messages():
    if request.method == 'POST':
        return "POST"
    else:
        return jsonify([m.__dict__ for m in Message.get_all()])


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    db.close_db()


@app.cli.command('initdb')
def initdb_command():
    """Creates the database tables."""
    db.init_db()
    print('Initialized the database.')


if __name__ == "__main__":
    app.run(debug=True)
