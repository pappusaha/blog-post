import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
// import Home from './pages/Home/Home.jsx';
import Mainlayouts from './Layouts/Mainlayouts.jsx';
import BLog from './pages/Blog/BLog.jsx';
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx';
import Home from './pages/Home/Home.jsx';
import SingleBlog from './Components/SingleBlog.jsx';
import Content from './Components/Content.jsx';
import Author from './Components/Author.jsx';
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayouts></Mainlayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <BLog></BLog>,
        // loader: () => fetch('https://dev.to/api/articles?per_page=25&top=8'),
      },
      {
        path: '/blog/:id',
        element: <SingleBlog></SingleBlog>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
      },

      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },

    ]

  },

]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
