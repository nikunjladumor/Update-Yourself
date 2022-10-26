import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#03045e",color:"white"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" ><strong style={{color:"white"}}>Update Yourself</strong></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link m-2 py-1 px-2 text-center" to="/" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 pśy-1 px-2 text-center" to="/business" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/entertainment" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}} >Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/sports" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Sports</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/health" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/science" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/technology" style={{backgroundColor:"#03045e",color:"white",fontSize:"1rem"}}>Technology</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        )
    
}
export default Navbar