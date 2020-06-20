import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const textMotion = {
  rest: {
    color: "grey",
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    color: "blue",
    x: 0,
    rotate: 360,
    transition: {
      duration: 4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
};

const HoverTest = () => {
  return (
    <Container initial="rest" whileHover="hover" animate="rest">
      <SlashContainer variants={slashMotion}>
        <svg width="1em" height="1em" viewBox="0 0 27 50">
          <path
            fill="#154FFF"
            d="M21.177 0L0 50h5.818L26.995 0z"
            fillRule="evenodd"
          />
        </svg>
      </SlashContainer>
      <motion.h1 variants={textMotion}>Hover me!</motion.h1>
    </Container>
  );
};
export default HoverTest;

const Container = styled(motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;

const SlashContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;

  transform: translateY(-50%);

  svg {
    width: auto;
    height: 50px;
    object-fit: scale-down;
  }
`;
