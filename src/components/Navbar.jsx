import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenuButtonToggle = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header>
        <div className='container'>
            <div className='grid navbar-grid'>
                <div className='logo'>
                    <h1>Raj Koshta</h1>
                </div>
                <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Service</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='ham-menu'>
                    <button onClick={handleMenuButtonToggle}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar