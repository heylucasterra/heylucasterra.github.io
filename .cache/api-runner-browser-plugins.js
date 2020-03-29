module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":"60rem","linkImagesToOriginal":"false","showCaptions":"true","markdownCaptions":"true","wrapperStyle":{"backgroundColor":"red"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
