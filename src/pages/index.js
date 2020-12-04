import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { motion } from "framer-motion"
// import Project from "../components/project"
// importing thumbnail images
import DesignTeamLogo from "../images/project-thumbnails/design-team-logo-black.png"
import Bias from "../images/project-thumbnails/bias-in-bias-out.png"

import Chargeback from "../images/project-thumbnails/cb-newspaper.png"
import SideQuests from "../images/project-thumbnails/side-quests.svg"
import Dashboard from "../images/project-thumbnails/dashboard.png"
// import { useStaticQuery } from "gatsby" // to query for image data
// import Img from "gatsby-image"


const IndexPage = () => (

  <Layout>

    <SEO title="Home" />      
    <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.25,}} style={{minHeight:`45vh`}}>
      <h3>Hi, I'm Lucas</h3>
      {/* <a class={{}}>about me<span class={{icon}}>🔁</span></a> */}
      <h4 id="quote" style={{color:`var(--font-mid-contrast)`}}>I'm a designer, <a href="https://letterboxd.com/lucasterra/films/diary/" target="_blank" rel="noopener noreferrer">aspiring film critic</a> and <a href="https://www.chess.com/member/lucasterra" target="_blank" rel="noopener noreferrer">chess beginner</a>. For the past decade I have helped companies build products, services and teams that are obsessed about their users.</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>This page is a work in progress <Link to="/blog/2020/redesigning-open">being redesigned in the open ↗</Link></h4>
    </motion.article>
  {/* occasional writer -> link to blog */}
    <motion.div style={{ maxWidth: `960px`, marginBottom: `2rem` }}
    initial={{
      opacity: 0,
      }}
      animate={{
        scale: 1,
        rotate: 0,
        opacity: 1,
    }} 
    transition={{
      // yoyo:Infinity,
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.45,
    }}>
      <Image />
    </motion.div> 

<article>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
      <h3 style={{marginBottom:8}}>Nubank</h3>
      <h5 style={{margin:0}}>2018 - now</h5>
    </div>
    <a href="https://www.nubank.com.br/" target="blank" class="button" style={{marginBottom:-8, alignSelf:'flex-end'}}>
      <h5>view website ↗</h5>
    </a>
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>I'm currently leading design and user research for credit card — where I get to work with some of the awesome people in the picture above.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Over the last few years I have helped raise the bar of our product, grow an international team, shape design and product culture and foster customer understanding as we build enduring relationships with over 30MM customers.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Here are some of the stories I've been part of ⤵</h4>
</article>

 <div style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`}}> 
  <div style={{opacity:`100%`,display:`flex`,overflow:`scroll`,textAlign:`left`,height:`32rem`,justifyContent:`flex-start`, marginBottom:`1.45rem`}}>

      <Link to="/nubank/design-leadership" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:16}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" alt="Nubank Design Team Logo" src={DesignTeamLogo} whileHover={{rotate: 180, transition: {duration: 40 },}}/>
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="187" viewBox="0 0 255 187" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}} >
            <path d="M127.5 0L255 187H0L127.5 0Z" fill="var(--accent-orange)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Nurturing Design culture</h4>
        <p>Building and growing the credit card design team from the ground up</p>
        <h5 class="label">Leadership</h5>

      </Link>
      {/* <a href="/nubank/design-culture" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" alt="Nubank Design Team Logo" src={DesignTeamLogo} whileHover={{rotate: 180, transition: {duration: 40 },}}/>
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="187" viewBox="0 0 255 187" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}} >
            <path d="M127.5 0L255 187H0L127.5 0Z" fill="var(--accent-orange)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Nurturing Design Culture</h4>
        <p>Growing an international design organisation</p>
      </a> */}

      <Link to="/nubank/product-dashboards" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:125, top: 72,}} alt="Nubank Design Team Logo" src={Dashboard} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="128" viewBox="0 0 255 128" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 59.275C31.1773 22.9854 77.4044 0 129 0C178.965 0 223.896 21.5559 255 55.8753V127H0V59.275Z" fill="#A141CF"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Product Dashboards</h4>
        <p>Designing the foundations of the most downloaded banking app in the world</p>
        <h5 class="label">Product</h5>

      </Link>

      {/* <a href="/nubank/product-dashboards"  class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:125, top: 72,}} alt="Nubank Design Team Logo" src={Dashboard} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="128" viewBox="0 0 255 128" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 2}}>
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 59.275C31.1773 22.9854 77.4044 0 129 0C178.965 0 223.896 21.5559 255 55.8753V127H0V59.275Z" fill="#A141CF"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Product Dashboards</h4>
        <p>Building the foundations for the most downloaded banking app in the world</p>
      </a> */}

      <Link to="/nubank/side-quests" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:160, top: 75}}alt="Calendar interface with a focus block time slot" src={SideQuests} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="111" viewBox="0 0 255 111" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <rect width="255" height="111" fill="var(--accent-teal)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Day to day and side quests</h4>
        <p>Self started initiatives in a fast-growing company</p>
        <h5 class="label">Product · Operations · Misc</h5>

      </Link>

      {/* <Link to="/nubank/chargeback" class="inactive-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:180, top: 110}}alt="Nubank Design Team Logo" src={Chargeback} initial={{scale: 1,}} whileHover={{scale: 1.05, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="111" viewBox="0 0 255 111" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <rect width="255" height="111" fill="var(--accent-teal)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>A north for chargebacks</h4>
        <p>Making sure a team's goals and product vision are clear</p>
      </Link> */}
      {/* <a href="/nubank/chargeback"  class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:180, top: 110}}alt="Nubank Design Team Logo" src={Chargeback} initial={{scale: 1,}} whileHover={{scale: 1.05, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="111" viewBox="0 0 255 111" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <rect width="255" height="111" fill="var(--accent-teal)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>A north for chargebacks</h4>
        <p>Making sure a team's goals and product vision are clear</p>
      </a> */}

    <div style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/MSQJ)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>A healthy path to credit</h4>
      <p>Making dark magic and credit building tangible to millions of latin americans</p>
      <h5 class="label">Product</h5>
    </div>

    <div style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/tbar)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Personal loans that empower</h4>
      <p>De-risking a product launch through user research</p>
      <h5 class="label">Product</h5>
    </div>
  </div>
  </div>



<article>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
      <h3 style={{marginBottom:8}}>Livework Studio</h3>
      <h5 style={{margin:0}}>2015 - 2018</h5>
    </div>
    <a href="https://www.liveworkstudio.com/" target="blank" class="button" style={{alignSelf:'flex-end',marginBottom:-8}}>
      <h5>view website ↗</h5>
    </a>
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>At Livework I have worked on a number of service and product design projects, mostly spamming accross mobility, health and finance and always combining physical and digital experiences.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Projects can't be publicly disclosed — but I can tell you about the time we helped create a five year vision for the biggest airline in the region (and how we prototyped it inside a Boeing 777); how we helped the UK government improve their services for impaired citizens or how we set up an exhibition that displayed the journey of cancer patients at a hospital.</h4>
  </article>

  <article>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
      <h3 style={{marginBottom:8}}>Other experiences and personal projects</h3>
      <h5 style={{margin:0}}>2009 - 2018</h5>
    </div>
    
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Before that, I have helped brands trailblaze the early days of social networks; improved how physicians discover and publish medical papers; built <Link to="http://torstenneeland.com" target="_blank">physical products</Link> in the UK and pursued my own endeavor helping older adults get started with their digital gadgets.</h4>
  </article>

  <div style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`}}> 
  <div style={{opacity:`100%`,display:`flex`,overflow:`scroll`,textAlign:`center`,height:`32rem`,justifyContent:`center`, marginBottom:`1.45rem`}}>
  

      <Link to="/projects/bias-in-bias-out" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:155, top: 90,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />

          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="#28BA6B"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Bias in Bias out</h4>
        <p>Can you code an unbiased machine?</p>
        <h5 class="label">Speculative</h5>
      </Link>

      <Link to="/projects/generative-boardgames" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:155, top: 90,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="#28BA6B"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Generative Boardgames</h4>
        <p>Training a model to create board games</p>
        <h5 class="label">Speculative</h5>
      </Link>

      <Link to="/projects/generative-boardgames" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:155, top: 90,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="#28BA6B"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Timtim por Timtim</h4>
        <p>Helping older adults get acquainted with their gadgets</p>
        <h5 class="label">Speculative</h5>
      </Link>
    </div>
  </div>

</Layout>
)

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
            icon
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