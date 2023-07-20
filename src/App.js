import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

import { createBrowserRouter , RouterProvider ,Outlet} from 'react-router-dom';
import About from './pages/About';
import Career from './pages/Career';
import Trending from './pages/Trending';
import Apple from './components/Apple';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Ball from './components/Ball';

const App = () => {
  return (
    <div>
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<MainContainer/>,
                children:[
                    {
                        path:'',
                        element:<Apple/>
                    },
                    {
                        path:'apple',
                        element:<Apple/>
                    },
                    {
                        path:'ball',
                        element:<Ball/>
                    },
                    {
                        path:'cat',
                        element:<Cat/>
                    },                    
                    {
                        path:'dog',
                        element:<Dog/>
                    }
                ]
            },
            {
                path:'/career',
                element:<Career/>

            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/trending',
                element:<Trending/>
            }
        ]
    }
])


export default App