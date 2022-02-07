# Flask & React app - Marvel Cinematic Univese

## Setup
in order to start up the project follow the setps:

<ul>
    <li>In the backend (flask-server):</li>
        <ol>
            <li>In the treminal cd to the flask-server</li>
            <li>use promt to change into venv: </li>
                <ul>
                    <li>Using powershell <code>venv\Scripts\Activate.ps1</code></li>
                    <li>Using cmd <code>venv\Scripts\Activate.bat</code></li>
                </ul>
            <li>Run <code>python app.py</code></li>
            <li>Open [http://localhost:5000] (http://localhost:5000) to view it in your browser.</li>
        </ol>
    <li>In the frontend (client):</li>
        <ol>
            <li>In the treminal cd to the client</li>
            <li>Run <code>npm start</code></li>
            <li>Open [http://localhost:3000](http://localhost:3000) to view it in your browser.</li>
        </ol>
</ul>

## Functionalities 
### Frontend:
<ol>
    <li>Use the search bars to find the movie you're looking for in two fashiones:</li>
        <ul>
            <li>Searching by the world release date</li>
            <li>Searching by the name (or part of it)</li>
            <li>If you don't write anything in the search bar it'll return the movies as the were released </li>
        </ul>
    <li>By clicking on he image you'll be redirected to the movie profile page</li>
</ol>

### Backend:
There are 3 endpoint to test:
<ol>
    <li><code>/search</code></li>
        <ul>
            <li>Searches the database based on query string and sorting type (int)</li>
        </ul>
    <li><code>/movie/<:movie_id></code></li>
        <ul>
            <li>Returns the movie with the matching id</li>
        </ul>
    <li><code>/movie/<:movie_id>/image</code></li>
        <ul>
            <li>Redirectes to the image of the chosen id</li>
        </ul>
</ol>
