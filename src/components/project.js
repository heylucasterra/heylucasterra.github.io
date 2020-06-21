import React from "react";
// import styled from "styled-components";
import { motion } from "framer-motion";


const shape = {
    rest: {
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        y: 16,
        scale: 1.1,
        transition: {
            duration: 0.5,
        },
    },
}

const image = {
    rest: {
        y:0,
    },
    hover: {
        y:-16,
    }
}

// const HoverTest = () => {
//     return (
//         <Container
//             initial="rest"/>
//     )
// }


{/* <a href="http://lucasterra.com" class="thumbnail-wrapper" style={{height:504, width:255, marginLeft:12}}>
        <motion.div class="thumbnail">  
          <motion.img class="thumbnail-image" alt="Nubank Design Team Logo" whileHover={{rotate: 180, transition: {duration: 40 },}} />
          <motion.svg style={{display:`flex`, alignItems:'flex-end', position:`relative`, bottom:`-4%`,}} xmlns="http://www.w3.org/2000/svg" width="255" height="187" viewBox="0 0 255 187" fill="none" whileHover={{ scale: 1.1, transition: { duration: 0.5 },}} whileTap={{ scale: 1}}>
            <path d="M127.5 0L255 187H0L127.5 0Z" fill="var(--accent-orange)"/>
          </motion.svg>
        </motion.div>
        <h4 style={{marginBottom:4}}>Nurturing Design Culture</h4>
        <p>Growing an international design organisation</p>
      </a> */}