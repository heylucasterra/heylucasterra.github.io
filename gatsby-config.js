module.exports = {
  siteMetadata: {
    title: `Lucas Terra`,
    description: `Lucas Terra's personal website. Lucas is a designer and writer based in Brazil.`,
    author: `@lucasterra`,
    siteUrl: `https://lucasterra.com`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            `gatsby-remark-unwrap-images`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                // linkImagesToOriginal: true,
                // showCaptions: true,
                // markdownCaptions: true,
                // wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
              },
            },
            `gatsby-remark-smartypants`,
          ]
        },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
         name: `images`,
         path: `${__dirname}/src/images`
        //  path: path.join(__dirname, `src`, `images`),
          },
          
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Terra · Design`,
        short_name: `Lucas Terra`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
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
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (e.g. <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (e.g. for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
                // This toggles the display of line numbers globally alongside the code.
                // To use it, add the following line in gatsby-browser.js
                // right after importing the prism color scheme:
                //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                // Defaults to false.
                // If you wish to only show line numbers on certain code blocks,
                // leave false and use the {numberLines: true} syntax below
                showLineNumbers: false,
                // If setting this to true, the parser won't handle and highlight inline
                // code used in markdown i.e. single backtick code like `this`.
                noInlineHighlight: false,
                // This adds a new language definition to Prism or extend an already
                // existing language definition. More details on this option can be
                // found under the header "Add new language definition or extend an
                // existing language" below.
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
                // Customize the prompt used in shell output
                // Values below are default
                prompt: {
                  user: "root",
                  host: "localhost",
                  global: false,
                },
                // By default the HTML entities <>&'" are escaped.
                // Add additional HTML escapes by providing a mapping
                // of HTML entities and their escape value IE: { '}': '&#123;' }
                escapeEntities: {},
              },
            },
          ],
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
]  
    
    
    // `gatsby-plugin-offline`,
}