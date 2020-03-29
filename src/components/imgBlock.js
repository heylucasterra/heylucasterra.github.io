import React, { useState } from "react"
import Img from "gatsby-image/withIEPolyfill"
import { backgroundGray } from "./utils"

function ImgBlock({ fluid, color }) {
  return (
    <div style={{ backgroundColor: color, }}
    >
      <Img
        // className=
        backgroundColor="#f0f0f0"
        fluid={fluid}
        objectFit="contain"
      ></Img>
    </div>
  )
}

export default ImgBlock