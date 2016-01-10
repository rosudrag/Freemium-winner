from selenium import webdriver

browser = webdriver.PhantomJS()
browser.get('http://localhost:5000')

assert 'Freemium' in browser.title