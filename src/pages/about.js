import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import f from "../components/about.module.scss"

const AboutPage =() =>{
    return(
        <Layout>
            <h2>About Me</h2>
            <p>I am a graduate student of Vellore Institute Of Technology where I studied Electronics and Communication Engineering, </p>
            <p>My Interest revolve around App developement, Web development. I'm also interested in stock markets,finance and Mergers and Acquisitions. </p>
            <h2>Contact</h2>
            Email - <a href="mailto:syedameena77@gmail.com" className={f.k}>syedameena77@gmail.com</a>
            <h2>Social</h2>
            <ul>
            <li><a href="https://www.linkedin.com/in/syed-ameen-ahmed-67b296124/" className={f.k}>LinkedIn</a></li>
            <li><a href="https://github.com/ameenamed" className={f.k}>Github</a></li>
            <li><Link to="/blog" className={f.k}>Blog</Link></li>
            </ul>
        </Layout>
    )

}

export default AboutPage