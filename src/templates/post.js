import React from "react";
import { graphql } from "gatsby"
import markdownRemark from "gatsby-transformer-remark"
import Header from "../components/header"
// import Img from "gatsby-image"
// import Layout from "../components/layout"
// import Img from "gatsby-image/withIEPolyfill"
import Image from "../components/image"


export default function Template({data}) {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = markdownRemark
  // let post = data.markdownRemark;
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div className="body" style={{textAlign:'-webkit-center',}}>
      <Header/>
      <div style={{maxWidth:`36rem`,padding: `0 0 1.45rem`, margin: `20vh auto 0 auto`,}}>
        <div style={{ padding: `0px 0 1.45rem`, margin: `10vh auto 0 auto`,}}>
          {/* Title and description block */}
          <h1 style={{}}>{post.frontmatter.title}</h1>

          {/* Logo, Company, Location and year block */}
          <div style={{display:`flex`, justifyContent: `space-between`,marginBottom:`0`}}>
            <div style={{display:`flex`}}>
                {/* <div style={{width:`40px`, height:`40px`,marginRight:`0.875rem`,borderRadius:`0.575rem`,backgroundColor: `${post.frontmatter.accent}`}}></div>  */}
                <div>
                <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.lastEdit}</h5>
                  <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.company}</h5>
                  <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.location}</h5>
                </div>
            </div>

            <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.date}</h5>
          </div>

          {/* Subtitle block */}
          <h4 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.subtitle}</h4>

          <hr></hr>

          {/* Team, Role block */}
          {/* <div style={{display:`flex`, justifyContent: `space-between`}}>
            <div style={{width:'60%', marginRight:'1.45rem',}}>
              <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Design team</h5>
              <h5 style={{color:`var(--font-high-contrast)`}}>{post.frontmatter.designteam}</h5>
            </div>
          <div>
            <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Role</h5>
            <h5 style={{color:`var(--font-high-contrast)`}}>{post.frontmatter.role}</h5>
          </div>
          </div> */}
        </div>
        {/* <div style={{maxWidth:`60rem`}}>
          <Image src={post.frontmatter.featuredImage} />

        </div> */}
      </div>
          
      <div className="blog-post-container" style={{padding:`0 0 1.45rem`, maxWidth:`36rem`, margin: `0 0 3.45rem 0`,}}>
        <div className="blog-post" style={{padding:`0 0 1.45rem`, maxWidth:`36rem`}}>
          <p className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html}}/> 

        </div>
    </div>
    </div>
  )
}


export const postQuery = graphql`
  query BlogpostByPath($path: String!){
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        lastEdit (formatString: "MMMM DD, YYYY")
        featuredImage
        role
        accent
        color
        title
        subtitle
        designteam
        topics
        role
        published
        impact
        company
        location
        # featuredImage {
        #   childImageSharp {
        #     fluid(maxWidth: 800) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    }
  }
  
`