import unittest
from app.twitterHook import TwitterHook


# App integration tests
# Requires app running

class TwitterHookTests(unittest.TestCase):
    twitterhook = TwitterHook()

    def test_twitterhook_exists(self):
        self.assertIsNotNone(self.twitterhook)

    def test_twitterhook_can_login(self):
        twitterhookresult = self.twitterhook.can_login()
        self.assertEqual(True, twitterhookresult)

    def test_twitterhook_retrieves_latest_tweets(self):
        tweets = self.twitterhook.latest_tweets()
        tweetcount = len(tweets)
        self.assertGreater(tweetcount, 0)

    def test_twitterhook_can_search_using_search_queries(self):
        query = ''
        tweets = self.twitterhook.search_by_query(query)
        tweetcount = len(tweets)
        self.assertGreater(tweetcount, 0)
