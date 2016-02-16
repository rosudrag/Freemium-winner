import unittest

from selenium import webdriver


class FreemiumWebAppIntegrationTests(unittest.TestCase):
    def foo(self):
        browser = webdriver.PhantomJS()
        browser.get('http://localhost:5000')
        assert 'Freemium' in browser.title
