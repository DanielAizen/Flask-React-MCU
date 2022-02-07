from unittest import result
from flask import Flask, json, jsonify, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Movies(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    img = db.Column(db.Text, nullable = False)
    title = db.Column(db.Text, nullable = False)
    usReleaseDate = db.Column(db.Integer)
    worldReleaseDate = db.Column(db.Integer, nullable = False)
    director = db.Column(db.Text, nullable = False)
    screenwriter = db.Column(db.Text, nullable = False)
    producer = db.Column(db.Text, nullable = False)
    phase = db.Column(db.Integer, nullable = False)
    plot = db.Column(db.Text, nullable = False)
    movieLength = db.Column(db.Integer, nullable = False)
    stars = db.Column(db.Text, nullable = False)
    
    
    def __init__(self, id, img, title, usReleaseDate, worldReleaseDate, director, screenwriter, producer, phase, plot, movieLength, stars ):
        self.id = id
        self.img = img
        self.title = title
        self.usReleaseDate = usReleaseDate
        self.worldReleaseDate = worldReleaseDate
        self.director =director
        self.screenwriter = screenwriter
        self.producer = producer
        self.phase = phase
        self.plot = plot
        self.movieLength = movieLength
        self.stars = stars
        
    def __str__(self):
       return f'{self.id} {self.img} {self.title} {self.usReleasDate} {self.worldReleaseDate} {self.director} {self.screenwriter} {self.producer} {self.phase} {self.plot} {self.movieLength} {self.stars}' 

    
def serializer(movie):
    return{
        'id' : movie.id,
        'img' : movie.img,
        'title' : movie.title,
        'usReleaseDate': movie.usReleaseDate,
        'worldReleaseDate': movie.worldReleaseDate,
        'director' : movie.director,
        'screenwriter' : movie.screenwriter,
        'producer' : movie.producer,
        'phase' : movie.phase,
        'plot' : movie.plot,
        'movieLength' : movie.movieLength,
        'stars' : movie.stars
        }
    
def converToObject(movieDict):
    return Movies(**movieDict)

@app.route("/app", methods=['GET'])
def main_page():
    db.create_all()
    if not Movies.query.all():
        with open('./marvel.json', 'r') as jsonF:
            movies = json.load(jsonF, object_hook = converToObject)
            for movie in movies:
                db.session.add(movie)
            db.session.commit()           
    return jsonify([*map(serializer, Movies.query.all())])

@app.route('/app/movie/<int:id>')
def showMovieById(id):
    return jsonify([*map(serializer, Movies.query.filter_by(id=id))])

@app.route('/app/search')
def search():
    q = request.args.get('q', default = '', type = str)
    sort = request.args.get('sort', default = 0, type = int)
    print('query =', q,', sort= ',sort)
    movies = Movies.query.all()
    if sort == 0:
        return jsonify({'status': 200, 'result' :  [*map(serializer, movies)] })
    elif sort == 1 and q.isnumeric():
        searchedMovies = list(filter(lambda m: (int(q) == m.worldReleaseDate), movies))
        if searchedMovies:
            return jsonify({'status': 200, 'result' :  [*map(serializer, searchedMovies)] })
    elif sort == 2:
        searchedMovies = list(filter(lambda m: (q in m.title.lower()), movies))
        if searchedMovies:
            return jsonify({'status': 200, 'result' :  [*map(serializer, searchedMovies)] })
    return jsonify({'status': 400, 'msg' :  'No Search Results' })

@app.route('/app/movie/<int:id>/image')
def get_image(id):
    movie = [*map(serializer, Movies.query.filter_by(id=id))][0]
    print(movie['img'])
    return redirect(movie['img'], code = 302)

# need to add /search and /movie/<:id>/image #
#think on how to change showMovieById to not recive args

if __name__ == '__main__':
    app.run(debug = True)