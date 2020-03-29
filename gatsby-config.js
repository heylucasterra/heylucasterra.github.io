module.exports = {
  siteMetadata: {
    title: `Lucas Terra`,
    description: `product designer based in brazil.`,
    author: `@lucasterra`,
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-99753331-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
          useMozJpeg: false,
          stripMetadata: true,
          defaultQuality: 75,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [`gatsby-remark-unwrap-images`],
        },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // path: path.join(__dirname, `src`, `images`),

      },
    },  
    // below code snippet from "add plugin" section in https://www.gatsbyjs.org/docs/adding-markdown-pages/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    // configuring plugin
    `gatsby-transformer-remark`,
    // `transformer remark` will recognize files which are Markdown and read their content. The plugin will convert the frontmatter metadata part of the Markdown files in my website as frontmatter and the content part as HTML.
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }, 
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: `60rem`,
        linkImagesToOriginal:	`false`,
        showCaptions: `true`,
        markdownCaptions: `true`,
        wrapperStyle: {
          backgroundColor: `red`,
        }
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_self",
            rel: "nofollow"
          }
        }
        ]
      }
    },


]  
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
}