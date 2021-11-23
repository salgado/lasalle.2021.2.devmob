from flask import Flask
from flask_cors import CORS, cross_origin
from listProfs import list_professores


app = Flask(__name__)
CORS(app)


# rota API
@app.route("/professores_old")
def professores_old():
    return {"professores" :["Alex", "Marcia", "Fabio"]}

@app.route("/professores")
def professores():
    resultado = list_professores()
    return resultado

if __name__ == "__main__":
    app.run(debug=True)