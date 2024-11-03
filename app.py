from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/grocery-list')
def grocery_list():
    return render_template('grocery_list.html')

if __name__ == '__main__':
    app.run(debug=True)