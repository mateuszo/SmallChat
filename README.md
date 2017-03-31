# SmallChat - sample online chat built with Flask & jquery
This is a sample program showing the powers of JavaScript.
It shows that you can develop dynamic web chat with only 50 lines of jquery.

## Getting started
1. Clone the repository and cd
```
git clone git@github.com:mateuszo/SmallChat.git && cd SmallChat
```

2. Install dependencies
```
pip install -r requirements.txt
```

3. Setup environment variable for flask
```
export FLASK_APP=main.py
```

4. Initialize the database
```
flask initdb
```

5. Run the app
```
flask run
```

## Built with
* [Python 3](https://www.python.org/)
* [Flask](http://flask.pocoo.org/)
* [sqlite3](https://www.sqlite.org/)
* [Bootsrap 3](http://getbootstrap.com/)
* [jquery](https://jquery.com/)
* [mustache.js](http://mustache.github.io/)


## Learning

### Dojo
Check the [Dojo branch](https://github.com/mateuszo/SmallChat/tree/dojo) that was developed durning coding dojo @ Codecool.

### Try to DIY
The best way to learn is to develop such application by yourself. Here you'll find list of tasks that will help you do it.

Back-end:
- [ ] Create flask app
- [ ] Create database
- [ ] Connect flask with database
- [ ] Implement message model
- [ ] Implement get "/messages" route, that returns all messages from the database in JSON format
- [ ] Implement post "/messages"" route, that adds a message to the database

Front-end:
- [ ] Create basic chat layout
- [ ] Write JavaScript code that will retrieve messages from database using AJAX.
- [ ] Implement displaying retrieved messages.
- [ ] Make message retrieval and display run periodically
- [ ] Write JavaScript that will POST messages to the database. Use AJAX again
