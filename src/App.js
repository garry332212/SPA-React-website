import React, { Fragment } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
      <Routes>
          <Route path ='/' element ={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
