import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"
// import Project from "../components/project"
// importing thumbnail images
import DesignTeamLogo from "../images/project-thumbnails/design-team-logo-black.png"
import Bias from "../images/project-thumbnails/bias-in-bias-out.png"
import SideQuests from "../images/project-thumbnails/side-quests.svg"
import Dashboard from "../images/project-thumbnails/dashboard.png"
// import { useStaticQuery } from "gatsby" // to query for image data
// import Img from "gatsby-image"


const IndexPage = () => (

  <Layout>
    <SEO title="Home" /> 
    {/* <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.25,}} style={{}}>
      <h2>I help teams make thoughtful product decisions</h2>
      <h4 style={{color:`var(--font-mid-contrast)`}}>Sometimes I also help them stop bad design from happening.</h4>
    </motion.article>

<motion.hr initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.30,}} style={{maxWidth:1080}}></motion.hr>
<br></br>
<br></br> */}
{/* <div>
  <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.25,}} style={{}}>
    <h1>Hello</h1>
  </motion.article>

  <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.35,}} style={{}}>
    <div>
      <h4 style={{color:`var(--font-mid-contrast)`}}>I am a hands-on design leader that prefers tea over coffee, films over tv series and fiction over technical books.</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>I stumbled on design by accident, when I was trying to download software at a piracy forum (content and tools aren't cheap if you live in the southern hemisphere). Ever since, I had the chance to work with hardware, software and immaterial services that reached millions of human-beings.</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>I consider myself a curious person and feed my curiosity by looking for opportunities to meet new people and ways of living.</h4> 
      <h4 style={{color:`var(--font-mid-contrast)`}}>One of the things I admire the most in people is their ability to change their minds about things. It kind of give's me hope in humanity.</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>Keep scrolling to learn more about my work, or hit me up for a chat</h4>
      <h4 style={{color:`var(--font-mid-contrast)`}}>It's pronounced <code>teh-hah</code>;)</h4>
       <div class="">
        <img src="" alt="text" style={{backgroundColor:`var(--accent-pink)`, padding:`140px 130px`,borderRadius:10000}}>
        </img>
      </div>
    </div>
  </motion.article>
</div> */}
{/* 
<motion.div style={{display:'flex', alignItems:'baseline', marginBottom:`3.45rem`}} initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.45,}}>
  <article>
    <h5>Speaking</h5>
    <div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · UXR Conference, Toronto / Remote</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · Aprender Design, Podcast</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · Design Insights, Podcast</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · PUC University, Remote</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · PM3 (Product course), Recorded</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2020 · Dotz, Remote</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2019 · SAP, Porto Alegre</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2018 · University of São Paulo, São Paulo</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2017 · University of São Paulo, São Paulo</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2017 · ESPM, São Paulo</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2016 · Stanford Center on Longevity, Palo Alto</div>          
    </div>
  </article>
  <article>
    <h5>Awards</h5>
    <div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2014 · Bienal Iberoamericana de Diseño, Madrid</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2014 · Industrial Designers Society of America (IDSA), Global</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2013 · Industrial Designers Society of America (IDSA), Global</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2013 · Industrial Designers Society of America (IDSA), Global</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2012 · Industrial Designers Society of America (IDSA), Global</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2012 · Best short film · Festival do Minuto, Web</div>
      <div class="tag" style={{color:`var(--font-mid-contrast)`}}>2012 · EDP University Challenge, São Paulo</div>
    </div>
  </article>
</motion.div> */}

    <motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.25,}}>
      <h1 >Work</h1>
    </motion.article>

<motion.article initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.35,}} style={{}}>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
    <a href="https://www.nubank.com.br/" target="blank" class="" style={{marginBottom:-8, alignSelf:'flex-end'}}>
      <h3 style={{marginBottom:8}}>Nubank</h3>
      </a>
      <h5 style={{margin:0}}>2018 - now</h5>

    </div>
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>I'm currently working as a Design Manager leading Design and User Research for Nubank's credit card.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Over the last three years I have helped raise the bar of our product, grow an international team from 12 to 120+ designers, shape design and product culture and foster customer understanding as we build enduring relationships with over 30MM customers.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>In 2019, Nu became the <a href="https://qz.com/1738245/nubanks-app-has-more-downloads-than-revolut-monzo-and-n26-combined/
" target="blank">most downloaded</a> banking app in the world and was recognized as one of the <a href="https://www.fastcompany.com/90299054/nubank-most-innovative-companies-2019" target="blank">world's most innovative companies</a>. In 2020 we have launched our credit card in <a href="https://techcrunch.com/2020/03/03/valued-at-10b-nubank-launches-its-nu-credit-card-in-mexico/" target="blank">Mexico</a> and <a href="https://www.nasdaq.com/articles/brazilian-financial-startup-nubank-expands-to-colombia-2020-09-30" target="blank">Colombia</a>.</h4>
</motion.article>

 <motion.div initial={{opacity: 0,}} animate={{x: 0, y: -24, scale: 1, rotate: 0, opacity: 1,}} transition={{duration: 0.5,  ease: "easeOut", delay: 0.45,}} style={{}} style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`, marginBottom: `5rem`}}> 
  <div style={{opacity:`100%`,display:`flex`,overflow:`scroll`,textAlign:`left`,height:`32rem`,justifyContent:`flex-start`, marginBottom:`1.45rem`}}>
      <Link to="/nubank/product-dashboards" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:0}}>
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


      <Link to="/nubank/side-quests" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:160, top: 75}}alt="Calendar interface with a focus block time slot" src={SideQuests} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .3 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="111" viewBox="0 0 255 111" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <rect width="255" height="111" fill="var(--accent-teal)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Day to day and side quests</h4>
        <p>Self started initiatives in a fast-growing company</p>
        <wrapper style={{display: `flex`}}>
          <h5 class="label">Product</h5>
          <h5 class="label">Operations</h5>
          <h5 class="label">Misc</h5>
        </wrapper>
      </Link>
      
      <Link class="inactive-wrapper" style={{height:504, width:255, marginLeft: 24,}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" alt="Nubank Design Team Logo" src={DesignTeamLogo} whileHover={{rotate: 180, transition: {duration: 40 },}}/>
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="187" viewBox="0 0 255 187" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}} >
            <path d="M127.5 0L255 187H0L127.5 0Z" fill="var(--accent-orange)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Designing a design team</h4>
        <p>Building and growing the credit card design team from the ground up</p>
        
        <wrapper style={{display: `flex`}}>
          <h5 class="label">Coming soon</h5>
          <h5 class="label">Leadership</h5>
        </wrapper>

      </Link>
      
    <div style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/MSQJ)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>A healthy path to credit</h4>
      <p>Making credit building tangible to millions of latin americans</p>
      <wrapper style={{display: `flex`}}>
        <h5 class="label">Coming soon</h5>
        <h5 class="label">Product</h5>
      </wrapper>
    </div>

    <div style={{height:504, width:255, marginLeft:24}} class="inactive-wrapper">
      <div style={{backgroundColor:`var(--bg-light)`,zIndex:999999, width:255,height:370,marginBottom:16, backgroundImage:`url(https://gdurl.com/tbar)`,backgroundRepeat:`no-repeat`,backgroundPositionY:`bottom`, backgroundSize:`100%`,borderRadius:4}}></div>
      <h4 style={{marginBottom:4}}>Personal loans that empower</h4>
      <p>De-risking a product launch through user research</p>
      <wrapper style={{display: `flex`}}>
        <h5 class="label">Coming soon</h5>
        <h5 class="label">Product</h5>
      </wrapper>
    </div>
  </div>
  </motion.div>


<article style={{marginBottom: `5rem`}}>
  <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
    <div>
    <a href="https://www.liveworkstudio.com/" target="blank" class="" style={{alignSelf:'flex-end',marginBottom:-8}}>
      <h3 style={{marginBottom:8}}>Livework Studio</h3>
   </a>
      <h5 style={{margin:0}}>2015 - 2018</h5>
    </div>
     
  </div>
  <h4 style={{color:`var(--font-mid-contrast)`}}>At Livework I have worked on a number of service and product design projects, mostly spanning accross mobility, health and finance combining physical and digital experiences.</h4>
  <h4 style={{color:`var(--font-mid-contrast)`}}>Projects can't be publicly disclosed — but I can tell you about the time I helped the biggest airline in the region <a href="https://airwaysmag.com/airlines/latam-showcases-new-business-class/" target="blank">re-position their business class to focus on rest</a> (and how we prototyped it in a Boeing 777); or about when I jammed with the Facebook public policy team to <a href="https://www.ttclabs.net/insight/collaboration_is_key_to_designing_digital_experiences_we_can_trust" target="blank">reimagine the platform around privacy</a>; partnered with the UK government to help <a href="https://www.gov.uk/disabled-students-allowances-dsas" target="blank">disabled students get access to their allowances</a> or how I helped translate patient's journey with cancer into a living exhibition.</h4>
  </article>

  <article>
    <div style={{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`,paddingBottom:`16px`}}>
      <div>
        <h3 style={{marginBottom:8}}>Other experiences and personal projects</h3>
        <h5 style={{margin:0}}>2009 - now</h5>
      </div>
      
    </div>
    <h4 style={{color:`var(--font-mid-contrast)`}}>Before that, I have helped brands trailblaze the early days of social networks; created an AR drumkit for Faber Castell back in 2011; improved how physicians discover and publish medical papers; designed <Link to="http://torstenneeland.com" target="_blank">physical products</Link> in the UK, worked on a concept and crash test of a hybrid vehicule and had my own endeavor helping older adults get acquainted with their digital gadgets.</h4>
  </article>

  <div style={{maxWidth:`100%`,justifyContent:`center`,textAlign:`center`}}> 
  <div style={{opacity:`100%`,display:`flex`,overflow:`scroll`,textAlign:`center`,height:`32rem`,justifyContent:`left`, marginBottom:`1.45rem`}}>
  
  <Link to="/projects/bias-in-bias-out" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:8}}>
        <motion.div class="thumbnail">
          <motion.img class="thumbnail-image" style={{maxWidth:155, top: 100,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />

          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="var(--accent-coral)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Bias in Bias out</h4>
        <p>Can you code an unbiased machine?</p>
        <h5 class="label">Speculative</h5>
      </Link>

  <Link class="inactive-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          {/* <motion.img class="thumbnail-image" style={{maxWidth:155, top: 90,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="#28BA6B"/>
          </motion.svg> */}
        </motion.div>
        <h4 style={{marginBottom:4}}>Generative Boardgames</h4>
        <p>Training a model to create board games</p>
        <wrapper style={{display: `flex`}}>
          <h5 class="label">Coming soon</h5>
          <h5 class="label">Speculative</h5>
        </wrapper>
      </Link>
      
      {/* to="/projects/timtim-por-timtim" */}
      <Link  class="inactive-wrapper" style={{height:504, width:255, marginLeft:24}}>
        <motion.div class="thumbnail">
          {/* <motion.img class="thumbnail-image" style={{maxWidth:155, top: 70,}} alt="Old macintosh with the code <bias></bias> written in the screen" src={Bias} initial={{scale: 1,}} whileHover={{scale: 1.025, transition: {duration: .2 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, left: 19, bottom:`-2%`,}} xmlns="http://www.w3.org/2000/svg" width="220" height="116" viewBox="0 0 233 116" fill="none" initial={{scale: 1.1,}} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 1.05}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.282 7.87324C86.7576 -2.6244 69.7225 -2.62442 59.1981 7.87322L8.05728 58.8839C-2.45145 69.3659 -2.45135 86.389 8.05737 96.871V96.871C18.566 107.353 18.5661 124.376 8.05747 134.858V134.858C-2.45116 145.34 -2.45116 162.362 8.05746 172.844L59.1987 223.855C69.723 234.353 86.7579 234.353 97.2822 223.855V223.855C107.807 213.358 124.841 213.358 135.366 223.855V223.855C145.89 234.353 162.925 234.353 173.449 223.855L224.59 172.844C235.099 162.362 235.099 145.34 224.59 134.858V134.858C214.082 124.376 214.082 107.353 224.591 96.871V96.871C235.099 86.389 235.099 69.3659 224.591 58.8839L173.45 7.87323C162.925 -2.6244 145.89 -2.6244 135.366 7.87324V7.87324C124.842 18.3709 107.806 18.3709 97.282 7.87324V7.87324Z" fill="#28BA6B"/>
          </motion.svg> */}

        </motion.div>
        <h4 style={{marginBottom:4}}>Timtim por Timtim</h4>
        <p>Helping older adults get acquainted with their gadgets</p>
        <wrapper style={{display: `flex`}}>
          <h5 class="label">Coming soon</h5>
          <h5 class="label">Service</h5>
        </wrapper>
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