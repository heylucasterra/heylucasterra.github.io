/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import ImgBlock from "./imgBlock"
// import { backgroundGray } from "./utils"

function PostLink({ post, index }) {
  const topicTags = post.frontmatter.topics.map(item => {
    return (
      <p key={item}>
        {item}
      </p>
    )
  })
  const [isHovered, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={post.frontmatter.path}
    >
      <ImgBlock
        featuredImage={post.frontmatter.cover}
        isHovered={isHovered}
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        color={post.frontmatter.color}
      />
      <div>
        <p>
          {post.frontmatter.title}
        </p>
        <p>
          {post.frontmatter.subtitle}
        </p>
        <div>
          {topicTags}
        </div>
      </div>
    </Link>
  )
}

export default PostLink