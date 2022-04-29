import React from "react";
import ReactDOM from "react-dom";
import Apif from "./App";
import './index.css'
function App(){
   
   return (
      <div className="App">
         <div className="container">
            <Apif/>
            
         </div>
      </div>
   )
}
ReactDOM.render(
<App/>
,document.getElementById('root'));
