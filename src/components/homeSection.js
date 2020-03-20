// import React, { Component, useState } from "react"
import React from "react"
// import PostList from "./postList"

const HomeSection = ({ title, date, subtitle, description, sectionPosts, posts, isAll }) => {
// const sectionPosts = posts.filter(
// item =>
// item.node.frontmatter.category === title &&
// item.node.frontmatter.published === true
// )
  return (
    // sectionPosts.length > 0 && (
      <div>
        <div>
          {isAll && (
            <div>
              <h2>
                {title}
              </h2>
              <h4>
                {subtitle, date}
              </h4>
              <p>
                {description}
              </p>
            </div>
          )}
          {/* <PostList posts={sectionPosts} /> */}
        </div>
      </div>
    )
  // )
}

export default HomeSection