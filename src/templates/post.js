import React from "react";
import { graphql } from "gatsby"
// import { Link } from "gatsby"
// import markdownRemark from "gatsby-transformer-remark"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { motion } from "framer-motion"
// import Header from "../components/header"
// import Image from "../components/image"



export default function Template({data}) {
  const { markdownRemark: post } = data;
  // const { frontmatter, html } = markdownRemark
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
      
      <motion.div style={{maxWidth:`var(--body-width)`,padding: `0 0 0`, margin: `20vh auto 0 auto`, textAlign:`center`}} initial={{opacity: 0,}}
    animate={{opacity:1, x: 0, y: -24, scale: 1, rotate: 0, }} transition={{duration: 0.5, ease: "easeOut", delay: 0.25,}}>
        {/* {post.frontmatter.featuredImage && <img src={"{post.frontmatter.featuredImage}"}/>} */}

        <div style={{ padding: `0px 0 0`, margin: `10vh 0 0`,}}>
        {/* Title and description block */}
        {post.frontmatter.title && <h1 style={{}}>{post.frontmatter.title}</h1>}

        {/* Logo, Company, Location and year block */}
        <div style={{display:`flex`, justifyContent: `space-between`,marginBottom:`0`}}>
          <div style={{display:`flex`,}}>

        {post.frontmatter.accent && <div style={{width:`41px`, height:`40px`,marginRight:`0.875rem`,borderRadius:`25%`, backgroundColor: `${post.frontmatter.accent}`,}} class="border">{post.frontmatter.icon && <h5>aaa</h5>}<svg xmlns="http://www.w3.org/2000/svg" width="41px" height="40px" viewBox="0 0 41 40" fill="none" >
<rect width="41" height="40"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3834 10.7451C11.5414 10.7451 10.8596 11.029 10.3888 11.5214C9.92226 12.0093 9.68398 12.6799 9.68151 13.4208C8.06027 13.4263 6.74512 14.7348 6.74512 16.3514V25.1081C6.74512 25.9221 7.40846 26.5792 8.2235 26.5792H9.69169C10.5067 26.5792 11.1701 25.9221 11.1701 25.1081V14.9036H12.3834C12.9167 14.9036 13.4741 15.1224 13.8978 15.457C14.3265 15.7955 14.5755 16.216 14.5755 16.5946V25.1081C14.5755 25.9221 15.2388 26.5792 16.0538 26.5792H17.522C18.3371 26.5792 19.0004 25.9221 19.0004 25.1081V16.5946C19.0004 13.102 16.0851 10.7451 12.3834 10.7451ZM12.3834 13.4208H11.1701C11.1722 13.0317 11.2806 12.7414 11.4652 12.5489C11.6498 12.3564 11.9431 12.2279 12.3834 12.2279C15.3771 12.2279 17.5118 14.0376 17.5118 16.5946V25.0965H16.064V16.5946C16.064 15.7135 15.5788 14.9175 14.8934 14.3504C14.2071 13.7825 13.2943 13.4208 12.3834 13.4208ZM21.478 13.4208C20.6629 13.4208 19.9996 14.0779 19.9996 14.8919V23.4054C19.9996 26.898 22.9149 29.2549 26.6166 29.2549C27.4586 29.2549 28.1404 28.971 28.6112 28.4787C29.0778 27.9907 29.316 27.3201 29.3185 26.5792C30.9398 26.5738 32.2549 25.2652 32.2549 23.6487V14.8919C32.2549 14.0779 31.5916 13.4208 30.7765 13.4208H29.3083C28.4933 13.4208 27.8299 14.0779 27.8299 14.8919V25.0965H26.6166C26.0833 25.0965 25.526 24.8777 25.1022 24.543C24.6735 24.2045 24.4246 23.784 24.4246 23.4054V14.8919C24.4246 14.0779 23.7612 13.4208 22.9462 13.4208H21.478ZM8.2337 16.3514C8.2337 15.5565 8.87955 14.909 9.6815 14.9036V25.0965H8.2337V16.3514ZM21.4882 23.4054V14.9036H22.936V23.4054C22.936 24.2865 23.4212 25.0825 24.1066 25.6496C24.7929 26.2175 25.7057 26.5792 26.6166 26.5792H27.8299C27.8278 26.9684 27.7194 27.2586 27.5349 27.4511C27.3503 27.6436 27.0569 27.7721 26.6166 27.7721C23.6229 27.7721 21.4882 25.9625 21.4882 23.4054ZM29.3185 25.0964V14.9036H30.7663V23.6487C30.7663 24.4435 30.1205 25.091 29.3185 25.0964Z" fill="var(--accent-purple)"/>
</svg></div>}
          
          <div style={{marginBottom:`1rem`}}>
            {post.frontmatter.lastEdit && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.lastEdit}</h5>}
          
            {post.frontmatter.company && <h5 style={{marginBottom: `0`, color:`var(--font-high-contrast)`}}>{post.frontmatter.company}</h5>}
            {post.frontmatter.location && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.location}</h5>}
          </div>
        </div>

            {post.frontmatter.date && <h5 style={{color:`var(--font-mid-contrast)`}}>{post.frontmatter.date}</h5>}
          </div>

          {/* Subtitle block */}
        {post.frontmatter.subtitle && <p style={{color:`var(--font-mid-contrast)`, marginBottom:`2.45rem`}}>{post.frontmatter.subtitle}</p>}

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