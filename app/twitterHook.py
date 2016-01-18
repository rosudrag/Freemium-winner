from TwitterAPI import TwitterAPI
from app.adminConstants import AdminConstants


class TwitterHook():
    def __init__(self):
        adminconstants = AdminConstants()
        self.consumer_key = adminconstants.consumer_key
        self.consumer_secret = adminconstants.consumer_secret

    def can_login(self):
        # api = TwitterAPI(self.consumer_key, self.consumer_secret, self.access_token_key, self.access_token_secret)
        api = TwitterAPI(self.consumer_key, self.consumer_secret, auth_type="oAuth2")
        try:
            r = api.request('search/tweets', {'q': 'pizza'})
            if r.status_code == 200:
                return True
        except:
            return False
