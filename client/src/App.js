import React from 'react';
import { MainPage } from './Pages/MainPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ShowMovie} from './Pages/ShowMovie'

function App() {

  return (
    
    <div className="App" key='random'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/movie/:id' element={<ShowMovie/>}/>
        </Routes>
      </BrowserRouter>
      <style jsx>{`
        .App{
          text-align: center;
          background-color: lightblue;
          height: 100%;
        }
        
        .show-movie, {
          flex: 1;
          background-color: white;
        }

        .container {
          flex: 1;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 40;
          background-color: '#333';
          display: grid;
          grid-template-columns: repeat(3, 400px);
        }



        h1 {
          font-weight: bold;
          color: #337ab7;
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 2px solid rgb(79, 98, 148);
        }

        form{
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-color: #000;
        }
        
        input{
          display: block;
          box-sizing: border-box;
          width: 400px;
          border-radius: 4px;
          border: 1px solid black;
          padding: 10px 12px;
          margin-bottom: 30px;
          font-size: 14px;
          justify-content: center;
          align-items: center;
        }

        label {
          line-height: 2;
          text-align: left;
          display: block;
          margin-bottom: 8px;
          margin-top: 13px;
          color: black;
          font-size: 18px;
          font-weight: 500;
          justify-content: center;
          align-items: center;
        }

        button{
          background: #337ab7;
          color: white;
          text-transform: uppercase;
          border: none;
          margin-top: 40px;
          padding: 20px;
          font-size: 16px;
          font-weight: 100;
          letter-spacing: 5px;
          cursor: pointer;
        }

        img{
          max-width:300px;
          max-height: 300px;
        }

        figcaption{
          font-size: 20px;
          font-weight: 500;
          justify-content: center;
          align-items: center;
        }

      `}
      </style>
    </div>
  );
}

export default App;
