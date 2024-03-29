/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 // import { useStaticQuery, graphql } from "gatsby"

 
 import "./layout.css"
import NavbarTui from "./NavbarTui"
 
 const LayoutTui = ({ children }) => {
   // const data = useStaticQuery(graphql`
   //   query SiteTitleQuery {
   //     site {
   //       siteMetadata {
   //         title
   //       }
   //     }
   //   }
   // `)
 
   return (
     <>
       <NavbarTui/>
       
         <main>{children}</main>
         
 
     </>
   )
 }
 
 LayoutTui.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default LayoutTui
 