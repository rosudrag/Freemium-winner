from app.freemiumwebapp.adminConstants import AdminConstants


class TwitterCompetitionsBot:
    def __init__(self, twitter_hook):
        self.twitter_hook = twitter_hook
        self.queries = AdminConstants().twitter_queries

    def Run(self):
        for query in self.queries:
            self.twitter_hook.search_by_query(query)
