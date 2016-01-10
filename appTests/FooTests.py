import unittest

class Foo(unittest.TestCase):
    def TwitterHook_CanLogin(self):
        # twitterHook = new TwitterHook()
        self.assertEqual(1, 2)


class TwitterHook():

    def Login(self):
        return True


class Foo(unittest.TestCase):

    def test_twitterhook_exists(self):
        twitterhook = TwitterHook()
        self.assertIsNotNone(twitterhook)


    def test_twitterhook_can_login(self):
        twitterHook = TwitterHook()
        twitterHookResult = twitterHook.Login()
        self.assertEqual(True, twitterHookResult)