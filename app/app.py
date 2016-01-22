from flask import Flask, render_template
import jinja2

app = Flask(__name__)
webGuiLoader =  jinja2.ChoiceLoader([
    app.jinja_loader,
    jinja2.FileSystemLoader('../gui')
])
app.jinja_loader = webGuiLoader


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/template/nav-bar.html")
def nav():
    return render_template("view/nav-bar.html")

@app.route("/template/main.html")
def main():
    return render_template("view/main.html")

@app.route("/template/ceva.html")
def ceva():
    return render_template("view/ceva.html")

def run_webserver():
    app.run()

if __name__ == "__main__":
    app.debug = True
    app.run()