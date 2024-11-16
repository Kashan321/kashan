import React from 'react'
import Portfolio from './components/Main'
import ProjectDetails from './components/ProjectDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
    return (
       <Router>
         <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
         </Routes>
       </Router>
    )
}

export default App