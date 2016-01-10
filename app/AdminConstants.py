import json


class AdminConstants():
    def __init__(self):
        with open('../config.json') as data_file:
            data = json.load(data_file)

        self.consumer_key = data["consumer-key"]
        self.consumer_secret = data["consumer-secret"]
