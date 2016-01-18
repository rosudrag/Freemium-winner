from TwitterAPI import TwitterAPI
from app.adminConstants import AdminConstants


class TwitterHook():
    def __init__(self):
        self.auth_type = "oAuth2"
        adminconstants = AdminConstants()
        self.consumer_key = adminconstants.consumer_key
        self.consumer_secret = adminconstants.consumer_secret
        self.access_key = adminconstants.access_key
        self.access_secret = adminconstants.access_secret
        self.api = TwitterAPI(self.consumer_key, self.consumer_secret, self.access_key, self.access_secret)

    def can_login(self):
        api = self.api
        try:
            request = api.request('search/tweets', {'q': 'pizza'})
            if request.status_code == 200:
                return True
        except:
            return False

    def latest_tweets(self):
        api = self.api
        request = api.request('statuses/home_timeline', {'count': '200'})
        tweets = []
        for tweet in request:
            tweets.append(tweet)
        return tweets

    def search_by_query(self, query):
        api = self.api
        request = api.request()
        return 1
