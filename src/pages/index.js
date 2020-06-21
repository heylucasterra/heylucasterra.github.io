import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Project from "../components/project"

// import { useStaticQuery } from "gatsby" // to query for image data
// import Img from "gatsby-image"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />      
    <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.25,}} style={{minHeight:`45vh`}}>
      <h3>Hi, I'm Lucas.</h3>
      {/* <a class={{}}>about me<span class={{icon}}>🔁</span></a> */}
      <h4 id="quote" style={{color:`var(--font-mid-contrast)`}}>I'm a brazilian designer with a love for cooking, <a href="https://www.goodreads.com/user/show/27508077-lucas-terra" target="_blank" rel="noopener noreferrer">reading</a>, <a href="https://letterboxd.com/lucasterra/" target="_blank" rel="noopener noreferrer">cinema</a> and <a href="https://open.spotify.com/user/lucasterra" target="_blank" rel="noopener noreferrer">chill music</a> <span style={{textDecoration:`line-through`}}>all of which I've been doing a lot during the quarantine</span>. For the past decade I have helped companies build products, services and teams that are obsessed about their users.</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>This page is a work in progress <Link to="/blog/2020/redesigning-open">being redesigned in the open ↗</Link></h4>
    </motion.article>
  
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
  <h4 style={{color:`var(--font-mid-contrast)`}}>I'm currently leading the design and user research team for credit card at Nubank, where I get to work with some of the awesome people on the picture above. Nubank is now the largest digital bank in the world with over 20MM customers. We’re operating in Brazil and Mexico, laser focused on our fight against complexity.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Over the past couple of years I have helped grow the team, shape design and product culture, foster customer understanding with an ever changing user base and us shift from twelve people team of generalists to a 80+ international design organization.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Soon you'll be able to see some of this story here ⤵</h4>
</article>

{/* <div style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`}}>
  <div style={{opacity:`30%`,display:`flex`,overflow:`scroll`,textAlign:`left`,height:`32rem`,justifyContent:`flex-start`, marginBottom:`1.45rem`}}>
    <div style={{height:504, width:255, marginLeft:0}}>
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/VHhS)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Nurturing Design Culture</h4>
      <p>Growing an international design organisation</p>
    </div>
    <div style={{height:504, width:255, marginLeft:24}}>
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/C3dk)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Product dashboards</h4>
      <p>Building the foundations for the most downloaded banking app in the world</p>
    </div>
    <div style={{height:504, width:255, marginLeft:24}}>
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/bJoP)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>A north for chargebacks</h4>
      <p>Making sure a team's goals and product vision are clear</p>
    </div>
    <div style={{height:504, width:255, marginLeft:24}}>
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/MSQJ)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Perfecting credit card limits</h4>
      <p>Making dark magic tangible to customers</p>
    </div>
    <div style={{height:504, width:255, marginLeft:24}}>
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/tbar)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Personal loans that empower</h4>
      <p>De-risking a product launch through user research</p>
    </div>
  </div>
  </div> */}

{/* WIP -- Adding animations!  */}
 <div style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`}}> 
  <div style={{opacity:`100%`,display:`flex`,overflow:`scroll`,textAlign:`left`,height:`32rem`,justifyContent:`flex-start`, marginBottom:`1.45rem`}}>
      
      <Project/>

      <a href="http://lucasterra.com" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:12}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" alt="Nubank Design Team Logo" whileHover={{rotate: 180, transition: {duration: 40 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="187" viewBox="0 0 255 187" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <path d="M127.5 0L255 187H0L127.5 0Z" fill="var(--accent-orange)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Nurturing Design Culture</h4>
        <p>Growing an international design organisation</p>
      </a>

      <a class="inactive-wrapper" style={{height:504, width:255, marginLeft:12}}>
        <div class="thumbnail" style={{ backgroundImage:`url(https://gdurl.com/C3dk)`}}> 
        <motion.img class="thumbnail-image"  alt="Nubank Design Team Logo" whileHover={{rotate: 180, transition: {duration: 40 },}} />   
          <motion.svg style={{position:`relative`, bottom:`-20%`}} xmlns="http://www.w3.org/2000/svg" width="255" height="127" viewBox="0 0 255 127" fill="none" whileHover={{x:0, y:12,scale: 1.12, transition: { duration: 0.5 },}} whileTap={{ scale: 1 }}>
            <circle cx="129" cy="170" r="170" fill="var(--accent-purple)"/>
          </motion.svg>
        </div>
        <h4 style={{marginBottom:4}}>Product dashboards</h4>
        <p>Building the foundations for the most downloaded banking app in the world</p>
      </a>
    
    <a style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/C3dk)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Product dashboards</h4>
      <p>Building the foundations for the most downloaded banking app in the world</p>
    </a>
    <a style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/bJoP)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>A north for chargebacks</h4>
      <p>Making sure a team's goals and product vision are clear</p>
    </a>
    <a style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/MSQJ)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Perfecting credit card limits</h4>
      <p>Making dark magic tangible to customers</p>
    </a>
    <a style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/tbar)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Personal loans that empower</h4>
      <p>De-risking a product launch through user research</p>
    </a>
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
  <h4 style={{color:`var(--font-mid-contrast)`}}>Over the three years I spent at Livework Studio, I have worked on several service and digital design projects accross different industries. During my time there I have navigated themes that varied from healthcare and public services to air travel and the financial sector.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>In my final year at Livework I have worked on two projects that re-imagined both the worst (delayed/canceled flights) and the best (premium business class) experiences one can have with an airline.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>The latter resulted in the five year vision that <a href="https://paxex.aero/2019/08/latam-premium-business-retrofit-lie-flat-beds/">completely re-positioned</a> the company's business strategy based on a new understanding of their customers. I also had a lot of fun building high-level prototypes to test inside a Boeing 777.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Livework still represents a very energetic moment of my career. After three years I left to work on a place where I would live the day-to-day of a product and learn from my mistakes once things were launched — an experience no consulting can ever offer.</h4>
  </article>

{/* 
<article>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
      <h3 style={{marginBottom:8}}>Other lives</h3>
      <h5 style={{margin:0}}>2007 - 2018</h5>
    </div>
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>My first real job as a designer was at a tiny company in the heart of São Paulo focused on what we then called "new media" — but we were mostly exploring social media. I helped companies find ways to take advantage of existing channels to connect with customers and worked from video projections in buildings in the streets to thinking about apps they could have in their profiles that would get customers engaged. Ah, around that time business pages on Facebook were in the very beginning and it kind of served as a catalyst to the work I was already doing. </h4>
  </article> */}
{/* 
  <article>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
      <h3 style={{marginBottom:8}}>The path towards design</h3>
      <h5 style={{margin:0}}>90's - 00s</h5>
    </div>
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>As a kid in the nineties I watched the objects in my parent's house morph from floppy disks and gigantic phones into CDs and StarTACs. I remember dismantling things and breaking more than one VHS player with my untamed curiosity to learn what was inside.</h4> 
  <h4 style={{color:`var(--font-mid-contrast)`}}>I also torn apart a decent amount of wall clocks; tv remotes; radios and tower PC's — sometimes trying to understand how they worked, others turning them into objects my family didn't need as much, like that wall clock that became an ash tray.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>I'm not a gamer today, but remember as a kid being crazy about platform and strategy videogames. Still get warmhearted when I think of the afternoons playing Flicky and Sonic in my MegaDrive or the evenings learning how to play Age of Empires with my dad in the 4sqm office we had at home.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>When I was 7, my parents gave me their old computer as they got a new one to the office. I used to lend/share toys and objects with my sister so I catalogued our belongings in a spreadsheet. As if I were some kind of a mini-librarian, I would log items in the spreadsheet everytime we borrowed something from one another. This was one of our favourite things to do and it also lead us to exchanging more and more stuff — just for the sake of logging things in the computer and then stamp our "library" cards.</h4> */}
  {/* only second to watching disney's robin hood where a fox is the main character */}
  {/* <h4 style={{color:`var(--font-mid-contrast)`}}>Fast forward a few years and I was in school. At age 13 I would spend hours trying to download songs in open directories of the web. I probably typed <code>intitle:"Index of"</code> in Google search enough times to have written the same number of characters as the entire Harry Potter series — which I pretty much how I occupied my time away from the screen. 
  </h4>

  <h4 style={{color:`var(--font-mid-contrast)`}}>Later on came LimeWire came and I got interested in downloading software as it was too expensive when converted to the Brazilian Real. I found an online forum where I could </h4>

</article> */}
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