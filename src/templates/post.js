import React from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby"
import markdownRemark from "gatsby-transformer-remark"
import Header from "../components/header"
// import Img from "gatsby-image"
// import Layout from "../components/layout"
// import Img from "gatsby-image/withIEPolyfill"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"



export default function Template({data}) {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = markdownRemark
  const content = (      
    <div className="blog-post-container" style={{padding:`0 1.0875rem 1.45rem`, maxWidth:`36rem`, margin: `0 0 3.45rem 0`,}}>
      <div className="blog-post" style={{padding:`0 0 1.45rem`,}}>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html}}/> 
        </div>
    </div>  )

// const footer = (
//   <div style={{ maxWidth: `100%` }}>
//     {prev && (
//       <div>
//         <div>Previous</div>
//           <Link to={prev.frontmatter.path}>
//             {prev.frontmatter.title}
//           </Link>
//         <div>{prev.frontmatter.subtitle}</div>
//       </div>
//     )}
//     {next && next.frontmatter && (
//       <div >
//         <div>Next</div>
//         <Link to={next.frontmatter.path}>
//           {next.frontmatter.title}
//         </Link>
//         <div>{next.frontmatter.subtitle}</div>
//       </div>
//     )}
//   </div>
// )
  // let post = data.markdownRemark;
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
    <div className="body" style={{textAlign:'-webkit-center',}}>
      <SEO title="Work"></SEO>
      {post.frontmatter.lastEdit && <SEO title="Blog" />}
      
      <div style={{maxWidth:`36rem`,padding: `0`, margin: `20vh auto 0 auto`, textAlign:`center`}}>
        <div style={{ padding: `0px 0 0`, margin: `10vh 1.0875rem 0`,}}>
          {/* Title and description block */}
          {post.frontmatter.title && <h1 style={{}}>{post.frontmatter.title}</h1>}

          {/* Logo, Company, Location and year block */}
          <div style={{display:`flex`, justifyContent: `space-between`,marginBottom:`0`}}>
            <div style={{display:`flex`,}}>

  {post.frontmatter.accent && <div style={{width:`40px`, height:`40px`,marginRight:`0.875rem`,borderRadius:`0.575rem`, border:`solid 1px #00000008`, backgroundColor: `${post.frontmatter.accent}`}}>{post.frontmatter.icon && <h5>aaa</h5>}</div>}
                
                <div>
                  {post.frontmatter.lastEdit && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.lastEdit}</h5>}
                
                  {post.frontmatter.company && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.company}</h5>}
                  {post.frontmatter.location && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.location}</h5>}
                </div>
            </div>

            {post.frontmatter.date && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.date}</h5>}
          </div>

          {/* Subtitle block */}
        {post.frontmatter.subtitle && <h4 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.subtitle}</h4>}

          <hr></hr>


          {/* Team, Role block */}
          <div style={{display:`flex`, justifyContent: `space-between`, marginBottom:``}}>
          {post.frontmatter.designteam &&<div style={{width:'60%', marginRight:'1.45rem',}}>
              <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Design team</h5>
              <h5 style={{color:`var(--font-high-contrast)`}}>{post.frontmatter.designteam}</h5>
            </div>}
            {post.frontmatter.role &&<div>
            <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Role</h5>
            <h5 style={{color:`var(--font-high-contrast)`}}>{post.frontmatter.role}</h5>
          </div>}
          </div>
        </div>
      </div>
        {/* {post.frontmatter.featuredImage &&<div relativePath={{eq: "gatsby-astronaut.png"}}style={{maxWidth:`60rem`, marginBottom:`3rem`}}>
          <Image/>
        </div>} */}
          </div>

      {content}
    </Layout>
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
        icon
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