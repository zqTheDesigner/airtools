# import main Flask class and request object
from flask import Flask, request

# create the Flask app
app = Flask(__name__)


@app.route('/', methods=['POST'])
def query_example():
    request_data = request.get_json()
    print(request_data)
    return {'data': request_data, 'message': 'Success'}


if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
