import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (

  <Layout>
    <SEO title="Home" />      
    <article style={{minHeight:`45vh`}}>
      <h2>Hi, I'm Lucas 👋</h2>
      {/* <a class={{}}>about me<span class={{icon}}>🔁</span></a> */}
      <h3 id="quote" style={{color:`var(--font-mid-contrast)`}}>I am a staff product designer at Nubank. Over the past decade I have helped companies and the government build products, services and teams that are obsessed about their users.</h3>
      <h3 style={{color:`var(--font-mid-contrast)`}}>This page is being <Link to="/blog/redesigning-open">redesigned in the open ↗</Link></h3>
    </article>
  
    <div style={{ maxWidth: `960px`, marginBottom: `2rem` }}>
    <Image/>
    </div> 
    <article>
      <h4 style={{color:`var(--font-mid-contrast)`}}>I am currently working with the awesome people in this photo. <a href="https://nubank.design">Read more about us  in our blog ↗</a></h4>
    </article>

{/*     
    <article>
      <h2 style={{marginBottom: `.4rem`}}>Nubank</h2>
      <h4>2018 - present</h4>
{/* need to find a way to make this graphql controlled */}
      {/* <p>By the time I joined, Nubank had roughly 2MM clients in Brazil and we were a 12 people brand + product design team. Over the past couple of years I have helped evolve the product, shape the team, nurture the culture and see us grow from a flat, everybody-does-it-all group of generalists to a 70+ international design organization with people dedicated to building the motion, illustration, research and ux writing for the product and brand that over 20MM brazilians interact with.</p>
      <p>If there’s one thing that is constant at Nubank it is change. Here are some of the things I have worked on over the years.</p>
    </article> */}

    </Layout>)

export default IndexPage

export const pageQuery = graphql`
  query {
    allImageSharp {
      nodes {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            subtitle
            impact
            topics
            color
            published
            # featuredImage {
            #   publicURL
            #   childImageSharp {
            #     fluid(maxWidth: 960) {
            #       ...GatsbyImageSharpFluid_noBase64
            #     }
            #   }
            # }
          }
        }
      }
    }
  }
`