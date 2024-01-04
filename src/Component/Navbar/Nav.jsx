import React from 'react'
import './nav.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
const Nav = () => {
    return (
        <>

            <div className="con">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="logo navbar-brand">LOGO</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="list navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Solutions & Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Download</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Alliances</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Reach Us</a>
                                </li>
                            </ul>
                            <div className="icon">
                                <p><PersonIcon /></p>
                                <p><SearchIcon /></p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Nav