import React from 'react' ; 
import {Routes,Route,Outlet} from 'react-router-dom'
import HomePage from './../features/main/HomePage';

const Dashboard = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
    
        </Routes>
    </div>
  )
}

export default Dashboard
