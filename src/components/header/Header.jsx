import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { useLocation } from 'react-router-dom'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    const { pathname } = useLocation()
    const headerRef = useRef()
    const menuRef = useRef()
    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('active')
    }

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shink')
            } else {
                headerRef.current.classList.remove('shink')
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [])
    return (
        <div className="header" ref={headerRef}>
            <div className="header-toggle" onClick={handleToggleMenu}>
                <i className='bx bx-menu-alt-left'></i>
            </div>

            <div className="header-logo">DITAGIS</div>
            <ul className="header-menu" ref={menuRef}>
                {mainNav.map((item, index) =>
                    <li key={index} className={item.path === pathname ? 'active' : ''} onClick={handleToggleMenu}>
                        <Link to={item.path}>{item.display}</Link>
                    </li>
                )}
                <div className="header-menu-close" onClick={handleToggleMenu}>
                    <i className='bx bx-x'></i>
                </div>
            </ul>
            <ul className="header-icon">
                <li><i className="bx bx-search"></i></li>
                <li>
                    <Link to="/cart">
                        <i className="bx bx-shopping-bag"></i>
                    </Link>
                </li>
                <li> <i className="bx bx-user"></i></li>
            </ul>
        </div>
    );
};

export default Header;