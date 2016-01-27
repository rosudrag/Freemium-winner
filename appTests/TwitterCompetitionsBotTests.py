import unittest
from unittest.mock import call

from app.adminConstants import AdminConstants
from app.twitterHook import TwitterHook

import mock
from app.freemiumwebapp.TwitterCompetitionsBot import TwitterCompetitionsBot


class TwitterCompetitionsBotTests(unittest.TestCase):
    admin_constants = AdminConstants()
    queries = admin_constants.twitter_queries

    def test_bot_can_init(self):
        twitter_hook = TwitterHook()
        bot = TwitterCompetitionsBot(twitter_hook)
        self.assertIsNotNone(bot)

    @mock.patch('app.twitterHook.TwitterHook')
    def test_bot_can_search_tweets_multiple_queries(self, twitter_hook):
        bot = TwitterCompetitionsBot(twitter_hook)
        bot.Run()
        calls = []
        for query in self.queries:
            calls.append(call(query))
        twitter_hook.search_by_query.assert_has_calls(calls)

