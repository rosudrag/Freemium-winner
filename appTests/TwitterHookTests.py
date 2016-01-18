import unittest
from app.twitterHook import TwitterHook


class TwitterHookTests(unittest.TestCase):
    def test_twitterhook_exists(self):
        twitterhook = TwitterHook()
        self.assertIsNotNone(twitterhook)

    def test_twitterhook_can_login(self):
        twitterhook = TwitterHook()
        twitterhookresult = twitterhook.can_login()
        self.assertEqual(True, twitterhookresult)
