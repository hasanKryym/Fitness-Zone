import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Loading from './Loading';
import Login from './Login';
import Home from './Home';
import Exercises from './Exercises';
import MyPlan from './MyPlan';
import Error from './Error';
import Footer from './Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (

    // <>
    // {isLoading ? <Loading /> : <Home />}

    //  <Footer /> 
    // </>
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='exercises' element={<Exercises />}/>
        <Route path='myplan' element={<MyPlan />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
