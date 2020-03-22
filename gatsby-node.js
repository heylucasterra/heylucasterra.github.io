const path = require(`path`);

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions;
  // const posts = result.data.allMarkdownRemark.edges
  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id 
          frontmatter {
            path
            date
            lastEdit
            title
            subtitle
            designteam
            color
            accent
            topics
            role
            featuredImage
            published
            impact
            role
            company
            icon
          }
        }
      }
    }
  }`)

  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach( ({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  });

  const blogTemplate = path.resolve('src/templates/blog.js')
  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id 
          frontmatter {
            path
            date
            lastEdit
            title
            subtitle
            designteam
            color
            accent
            topics
            role
            featuredImage
            published
            impact
            role
            company
          }
        }
      }
    }
  }`)

  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach( ({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
      })
    })
  })


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }};