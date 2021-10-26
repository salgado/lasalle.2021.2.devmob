from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


# rota API
@app.route("/professores")
def professores():
    return {"professores" :["Alex", "Marcia", "Fabio"]}

if __name__ == "__main__":
    app.run(debug=True)



