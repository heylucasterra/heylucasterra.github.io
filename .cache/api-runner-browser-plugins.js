module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-99753331-1","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":"60rem","linkImagesToOriginal":"false","showCaptions":"true","markdownCaptions":"true","wrapperStyle":{"backgroundColor":"red"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
