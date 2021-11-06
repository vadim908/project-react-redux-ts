import React from "react";
import { NavLink } from "react-router-dom";


export function Header():React.ReactElement {

    return(
        <header className="header">
            <nav className="header__nav">
                <NavLink exact to='/' className="header__link"  activeClassName="header__link_active">Главная</NavLink>
                <NavLink  to='/users' className="header__link"  activeClassName="header__link_active">Пользователи</NavLink>
                <NavLink  to='/posts' className="header__link"  activeClassName="header__link_active">Посты</NavLink>
            </nav>

        </header>
    )
}