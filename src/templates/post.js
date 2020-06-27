import React from "react";
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import markdownRemark from "gatsby-transformer-remark"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { motion } from "framer-motion"
// import Header from "../components/header"



export default function Template({data}) {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = markdownRemark
  const content = (      
    <motion.div className="blog-post-container" style={{padding:`0 0 1.45rem`, margin: `0`,}} initial={{opacity: 0,}} animate={{scale: 1,rotate: 0, opacity: 1,}}  transition={{duration: 0.5, ease: [0.5, 0.67, 0.83, 0.67], delay: 0.4,}}>
      <div className="blog-post" style={{padding:`0 0 0`,}}>
        <div style={{}} className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html}}/> 
        </div>
    </motion.div>  )

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
      
      <motion.div style={{maxWidth:`36rem`,padding: `0 0 1.45rem`, margin: `20vh auto 0 auto`, textAlign:`center`}} initial={{opacity: 0,}}
    animate={{opacity:1, x: 0, y: -24, scale: 1, rotate: 0, }} transition={{duration: 0.5, ease: "easeOut", delay: 0.25,}}>
        {post.frontmatter.featuredImage && <img src={"{post.frontmatter.featuredImage}"}/>}

        <div style={{ padding: `0px 0 0`, margin: `10vh 0 0`,}}>
        {/* Title and description block */}
        {post.frontmatter.title && <h1 style={{}}>{post.frontmatter.title}</h1>}

        {/* Logo, Company, Location and year block */}
        <div style={{display:`flex`, justifyContent: `space-between`,marginBottom:`0`}}>
          <div style={{display:`flex`,}}>

        {post.frontmatter.accent && <div style={{width:`2.25rem`, height:`2.25rem`,marginRight:`0.875rem`,borderRadius:`25%`, backgroundColor: `${post.frontmatter.accent}`}} class="border">{post.frontmatter.icon && <h5>aaa</h5>}</div>}
          
          <div style={{marginBottom:`1rem`}}>
            {post.frontmatter.lastEdit && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.lastEdit}</h5>}
          
            {post.frontmatter.company && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.company}</h5>}
            {post.frontmatter.location && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.location}</h5>}
          </div>
        </div>

            {post.frontmatter.date && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.date}</h5>}
          </div>

          {/* Subtitle block */}
        {post.frontmatter.subtitle && <h4 style={{color:`var(--font-mid-contrast)`, marginBottom:`2.45rem`}}>{post.frontmatter.subtitle}</h4>}

          {/* Team, Role block */}
          {post.frontmatter.designteam && <div style={{display:`flex`, justifyContent: `space-between`, }}>
          {post.frontmatter.designteam &&<div style={{width:'50%', margin:`0 1.45rem 0 0`}}>
              <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Design team</h5>
              <h5 style={{color:`var(--font-high-contrast)`}}>Lucas Terra, {post.frontmatter.designteam}</h5>
          </div>}
          {post.frontmatter.role &&<div style={{width:'50%'}}>
              <h5 style={{color:`var(--font-mid-contrast)`,marginBottom: '0.25rem'}}>Role</h5>
              <h5 style={{color:`var(--font-high-contrast)`}}>{post.frontmatter.role}</h5>
          </div>}
          
        </div>}
        <hr></hr>
        
          
        </div>
        
      </motion.div>
        {/* {post.frontmatter.featuredImage &&<div relativePath={{eq: "gatsby-astronaut.png"}}style={{maxWidth:`60rem`, marginBottom:`3rem`}}>
          <Image/>
        </div>} */}
        
          </div>
          

      {content}
    </Layout>
  )
}


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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