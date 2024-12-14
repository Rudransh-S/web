from flask import Flask, request, render_template
from flask_cors import CORS


app =Flask(__name__)
CORS(app)
@app.route("/")
def index():
    return render_template('index.html')
@app.route('/submit', methods=["POST"])
def submit():
    input_data1=request.form['input_data1']
    input_data2=request.form["input_data2"]
    result= chipher(input_data1,input_data2)
    return render_template('index.html', result=result)
def chipher(a,b):
    y=len(b)
    z=0
    c=''
    for i in a:
        if (z==y):
            z=z-y
        al=ord(i) -96
        be=ord(b[z])-96
        gm=al+be
        if (gm>26):
            c+=chr(gm-26+96)
        else:
            c+=chr(gm+96)
        z+=1

    return c 
if __name__== '__main__':
    app.run(debug=True) 