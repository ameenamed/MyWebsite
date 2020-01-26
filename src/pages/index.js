import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'

import Layout from "../components/layout"
const IndexPage =() => {
    const data = useStaticQuery(graphql`
    query TestQuery {
      site {
        siteMetadata {
          sname
        }
      }
    }
  `)
    return(
        <Layout>
        <h2>Hello I'm {data.site.siteMetadata.sname}, a software engineer currently working at Temenos </h2>
        <Link to="/blog">Blog</Link><br/>
        <br/>
        <Link to="/about">About Me</Link><br/>
        </Layout>
    )

}

export default IndexPage