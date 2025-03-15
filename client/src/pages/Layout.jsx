import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <nav>
                <Link to="/training-plans">About</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout