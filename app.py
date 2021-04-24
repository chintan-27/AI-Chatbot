from flask import Flask, request, jsonify
import chatbot
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
  
@app.route('/chat', methods=['POST'] )
def hello_world():
    if(request.method == "POST"):
        my_json = request.data.decode('utf8').replace("'", '"')
        data = json.loads(my_json)
        s = json.dumps(data, indent=4, sort_keys=True)
        m = json.loads(s)
        ans = chatbot.chatbot_response(m['message'])
        return jsonify({"msg": ans})
  
if __name__ == '__main__':
  
    app.run()