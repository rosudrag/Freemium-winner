from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


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
