import db
from datetime import datetime


class Message:

    def __init__(self, sender, content, date=None):
        self.sender = sender
        self.content = content
        if not date:
            self.date = str(datetime.now())
        else:
            self.date = date

    def save(self):
        query = 'INSERT INTO `messages` (`sender`, `content`, `date`) VALUES (?, ?, ?)'
        params = (self.sender, self.content, self.date)
        db.execute(query, params)

    @classmethod
    def get_all(cls):
        messages = []
        result = db.execute('SELECT `sender`, `content`, `date` FROM `messages` ORDER BY `date`', ())
        for row in result:
            messages.append(cls(row[0], row[1], row[2]))
        return messages
