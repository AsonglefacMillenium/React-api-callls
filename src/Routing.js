import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './HomePage'
import StateToggle from './StateToggle'

const Routing = () => {
    return (
        <div className="routing">
        <Routes>
            <Route path="/" element={<HomePage/>}>

            </Route>

            <Route path="/statetoggle" element={<StateToggle/>}></Route>
        </Routes>
            
        </div>
    )
}

export default Routing
