from flask import Flask, render_template
import jinja2


app = Flask(__name__)
webGuiLoader =  jinja2.ChoiceLoader([
    app.jinja_loader,
    jinja2.FileSystemLoader('../gui')
])
app.jinja_loader = webGuiLoader


@app.route("/")
def main():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()