module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":940,"linkImagesToOriginal":false,"showCaptions":true,"markdownCaptions":true,"backgroundColor":"var(--bg-light)","margin":"3.5rem 0","borderRadius":4},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"anonymize":true,"exclude":["/preview/**","/do-not-track/me/too/"],"head":false,"respectDNT":true,"trackingId":"UA-99753331-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Lucas Terra · Design","short_name":"Lucas Terra","start_url":"/","background_color":"var(bg-lightest)","theme_color":"#ffffff","display":"standalone"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
