import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import s from "./Header.module.css";

function Header() {
    return (
        <div>
            <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
            <label className={s.btnMenu} htmlFor="hmt">
                <span className={s.first}></span>
                <span className={s.second}></span>
                <span className={s.third}></span>
            </label>
            <ul className={s.hiddenMenu}>
                <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></li>
            </ul>
        </div>
        // <div>
        //     <div>
        //         <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
        //     </div>
        //     <div>
        //         <NavLink to={PATH.JUNIOR}>Junior</NavLink>
        //     </div>
        //     <div>
        //         <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
        //     </div>
        // </div>
    )
}

export default Header
