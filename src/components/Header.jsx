import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/logo.png'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a visibilidade da sidebar

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        
        <header className="header">
            {/* burger button*/}
            <button className="menu-toggle" onClick={toggleSidebar} aria-label="Abrir menu">
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
            </button>

        <div className="header-logo">
            <img src={Logo} alt="Logo da Competição" />
            {/*<span className="logo-placeholder">LOGO AQUI</span>*/}
        </div>

        <div className="header-spacer"></div>

      {/* Sidebar de navegação */}
      <nav className={`sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
                <ul className="sidebar-menu">
                    <li> <Link to="/" onClick={toggleSidebar}>Início</Link></li>
                    <li> <Link to="/equipes" onClick={toggleSidebar}>Equipes</Link></li>
                    <li> <Link to="/mata-mata" onClick={toggleSidebar}>Mata-Mata</Link></li>
                    <li> <Link to="/artilharia" onClick={toggleSidebar}>Artilharia</Link></li>
                    <li> <Link to="/noticias" onClick={toggleSidebar}>Noticias</Link></li>
                </ul>
            </nav>

            {/* Overlay para fechar a sidebar clicando fora dela */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
            {/*<div className="header-spacer"></div>*/}
        </header>
    )
}

export default Header