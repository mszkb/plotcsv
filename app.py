from flask import Flask, request, render_template
import json
import pandas as pd



app = Flask(__name__)

# ensure that we can reload when we change the HTML / JS for debugging
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['TEMPLATES_AUTO_RELOAD'] = True



@app.route('/')
def renderHtml():
    # send html to the client
    return render_template("index.html")


@app.route('/list', methods=['POST'])
def listCsv():
    # TODO get all csv files from your folder and set it to that array
    csvList = ["abc.csv", "dev.csv"]
    return json.dumps(csvList)


@app.route('/file', methods=['POST'])
def getCsvFile():
    content = request.json
    csv=pd.read_csv("./" + content["file"]).to_json(orient="records")
    return json.dumps(csv)

if __name__ == '__main__':
    app.run()
