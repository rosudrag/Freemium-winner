from TwitterAPI import TwitterAPI
from app.freemiumwebapp.adminConstants import AdminConstants

SEARCH_TWEETS_REQUEST = 'search/tweets'


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
            request = api.request(SEARCH_TWEETS_REQUEST, {'q': 'pizza'})
            if request.status_code == 200:
                return True
        except:
            return False

    def latest_tweets(self):
        api = self.api
        request = api.request('statuses/home_timeline', {'count': '200'})
        tweets = self.extract_tweets_from_response(request)
        return tweets

    def search_by_query(self, query):
        api = self.api
        response = api.request(SEARCH_TWEETS_REQUEST, {'q': query})
        tweets = self.extract_tweets_from_response(response)
        return tweets

    @staticmethod
    def extract_tweets_from_response(response):
        tweets = []
        for tweet in response:
            tweets.append(tweet)
        return tweets
