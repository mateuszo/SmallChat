import sqlite3
from flask import g


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'db'):
        g.db = sqlite3.connect('messages.db')
    return g.db


def execute(query, params):
    db = get_db()
    c = db.cursor()
    result = c.execute(query, params)
    db.commit()
    return result


def close_db():
    """Closes the database."""
    if hasattr(g, 'db'):
        g.db.close()


def init_db():
    """Initializes the database."""
    db = get_db()
    with open('schema.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()
