import flask
import mysql.connector

app=flask(__name__)
db_config={'host': 'loaclhost','user':'fire','password':'fire','database':'text'}
@app.route('/submit',method=['post'])
def submit():
    data = request.json
    username=data.get('username')
    conn=msql.connector.connect(**db_config)
    cursor=conn.cursor()
    qurry='select * from encry'
    cursor.execute(qurry)
    cursor.commit()
    
