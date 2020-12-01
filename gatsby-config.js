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
              resolve: 'gatsby-remark-video',
              options: {
                width: 800,
                height: 'auto',
                preload: 'auto',
                muted: false,
                autoplay: false,
                playsinline: true,
                controls: true,
                loop: false,
                controlsList: 'nodownload',
              }
            },
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                height: 400, // Optional: Overrides optional.ratio
                related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                urlOverrides: [
                  {
                    id: 'youtube',
                    embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                  }
                ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                }
            },
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                offsetY: '150',
                icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" fill="var(--font-mid-contrast)"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                className: `header-anchor`,
                maintainCase: false,
                removeAccents: true,
                isIconAfterHeader: true,
                elements: [`h2`, `h3`],
                },
            },
            `gatsby-remark-copy-linked-files`,
            'gatsby-plugin-dark-mode',
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

    