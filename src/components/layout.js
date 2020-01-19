import React from "react"
import Header from "./header"
import Footer from "./footer"
import '../styles/index.scss'
import B from '../components/layout.module.scss'
const Layout = (props) =>{
    return(
        <div className={B.container}>
            <div className={B.test}> 
            <Header/>
            </div> 
            <div className={B.content}>
            {props.children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout