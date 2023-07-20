import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import About from './pages/About';
import Career from './pages/Career';
import Trending from './pages/Trending';


const App = () => {
  return (
    <div>

            <Header/>
            <MainContainer/>
            <Footer/>
    </div>
  )
}

export default App