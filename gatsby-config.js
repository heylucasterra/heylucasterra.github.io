module.exports = {
  siteMetadata: {
    author: `@lucasterra`,
    description: `Lucas is a Product Designer based in São Paulo, Brazil.`,
    siteUrl: `https://lucasterra.com`,
    title: `Lucas Terra`,
  },
  
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            // {
            //   resolve: `gatsby-transformer-video`,
            //   options: {
            //     downloadBinaries: false,
            //     /**
            //      * Optional: Pass your own binaries
            //      *
            //      * Assumes you store your binaries in the following pattern:
            //      * ./bin/darwin/ffmpeg
            //      * ./bin/darwin/ffprobe
            //      * ./bin/linux/ffmpeg
            //      * ./bin/linux/ffprobe
            //      * ...
            //      *
            //      * Default: null
            //      */
            //     ffmpegPath: resolve(__dirname, "bin", platform(), "ffmpeg"),
            //     ffprobePath: resolve(__dirname, "bin", platform(), "ffprobe"),
        
            //     // Optional profiles for full fluent-ffmpeg access
            //     profiles: {
            //       sepia: {
            //         extension: `mp4`,
            //         converter: function({ ffmpegSession, videoStreamMetadata }) {
            //           // Example:
            //           // https://github.com/gatsbyjs/gatsby/blob/gatsby-transformer-video/examples/using-gatsby-transformer-video/gatsby-config.js
            //         },
            //       },
            //     },
            //   },
            // },
            // {
            //   resolve: `gatsby-remark-videos`,
            //   options: {
            //     pipelines: [
            //       {
            //         name: 'vp9',
            //         transcode: chain =>
            //           chain
            //             .videoCodec('libvpx-vp9')
            //             .noAudio()
            //             .outputOptions(['-crf 20', '-b:v 0']),
            //         maxHeight: 480,
            //         maxWidth: 900,
            //         fileExtension: 'webm',
            //       },
            //       {
            //         name: 'h264',
            //         transcode: chain =>
            //           chain
            //             .videoCodec('libx264')
            //             .noAudio()
            //             .addOption('-profile:v', 'main')
            //             .addOption('-pix_fmt', 'yuv420p')
            //             .outputOptions(['-movflags faststart'])
            //             .videoBitrate('1000k'),
            //         maxHeight: 480,
            //         maxWidth: 900,
            //         fileExtension: 'mp4',
            //       },
            //     ],
            //   }
            // },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 940,
                linkImagesToOriginal: false,
                showCaptions: true,
                markdownCaptions: true,
                backgroundColor:`var(--bg-light)`,
                margin: `3.5rem 0`,
                borderRadius: 4,
                // wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
              },
            },
            "gatsby-remark-unwrap-images",
            "gatsby-remark-smartypants",
          ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        anonymize: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        head: false,
        respectDNT: true,
        trackingId: "UA-99753331-1",
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

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Terra · Design`,
        short_name: `Lucas Terra`,
        start_url: `/`,
        background_color: `var(bg-lightest)`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🌎'
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'lucasterra.com',
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'http:lucasterra.com',
            to: 'https:lucasterra.com',
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-htaccess',
    //   options: {
    //     RewriteBase: '/custom/',
    //     https: true,
    //     www: true,
    //     SymLinksIfOwnerMatch: true,
    //     host: 'www.lucasterra.com', // if 'www' is set to 'false', be sure to also remove it here!
    //     ErrorDocument: `
    //       ErrorDocument 401 /error_pages/401.html
    //       ErrorDocument 404 /error_pages/404.html
    //       ErrorDocument 500 /error_pages/500.html
    //     `,
    //     redirect: [
    //       'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
    //       {
    //         from: 'http://lucasterra.com',
    //         to: 'https://lucasterra.com',
    //       },
    //       {
    //         from: 'http://lucasterra.com',
    //         to: 'https://lucasterra.com',
    //       },
    //     ],
    //   },
    // },
  ]
}

    