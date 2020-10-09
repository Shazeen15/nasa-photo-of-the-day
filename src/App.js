import React from "react";
import "./App.css";
import ImgComp from './ImgComp';

function App() {
  return (
    <div className="App">
      <p>Astronomy Picture of the Day</p>
      <span role="img" aria-label='go!'>🚀</span>
      <ImgComp/>
    </div>
    
  );
}

export default App;
