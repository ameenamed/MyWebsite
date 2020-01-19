import React from "react"
import { Link } from "gatsby"
import A from '../components/header.module.scss'

const Header =() =>{
    return(
        <div className={A.padd}>
            <div className={A.nav}>
            <Link className={A.link} activeClassName= {A.activelink} to="/">Home</Link>  <Link className={A.link} activeClassName= {A.activelink} to="/blog">Blog</Link>  <Link className={A.link} activeClassName= {A.activelink} to="/about">About</Link>
            </div>
        </div>

    )
}
export default Header