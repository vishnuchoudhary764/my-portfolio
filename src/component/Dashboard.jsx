import React from 'react'
import "./Dashboard.css"
import { Outlet , NavLink} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <nav>
      <ul>
        <li>
            <NavLink id='link'  to="/" className={({isActive})=> isActive ? "active-link":""}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink  id='link' to="/about"  className={({isActive})=> isActive ? "active-link":""}>About</NavLink>
        </li>
        <li>
            <NavLink  id='link' to="/Project"  className={({isActive})=> isActive ? "active-link":""}>Project</NavLink>
        </li>
        <li>
            <NavLink   id='link'to="/Skills"  className={({isActive})=> isActive ? "active-link":""}>Skills</NavLink>
        </li>
        <li>
            <NavLink  id='link' to="/Contact"  className={({isActive})=> isActive ? "active-link":""}>Contact</NavLink>
        </li>
      </ul>
      </nav>
      <Outlet /> 
    </div>
  )
}

export default Dashboard
