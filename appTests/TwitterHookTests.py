import unittest
from app.twitterHook import TwitterHook


# App integration tests
# Requires app running

class TwitterHookTests(unittest.TestCase):
    def test_twitterhook_exists(self):
        twitterhook = TwitterHook()
        self.assertIsNotNone(twitterhook)

    def test_twitterhook_can_login(self):
        twitterhook = TwitterHook()
        twitterhookresult = twitterhook.can_login()
        self.assertEqual(True, twitterhookresult)

    def test_twitterhook_retrieves_latest_tweets(self):
        twitterhook = TwitterHook()
        tweets = twitterhook.latest_tweets()
        tweetcount = len(tweets)
        self.assertGreater(tweetcount, 0)
