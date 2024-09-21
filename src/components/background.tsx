import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%} 
  `;
const BackgroundDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(270deg, #161a40, #090a16, #161a40);
  background-size: 600% 600%;

  -webkit-animation: ${backgroundAnimation} 10s ease infinite;
  animation: ${backgroundAnimation} 10s ease infinite;
`;

const Gradient = styled(motion.linearGradient)``;

export default function Background({
  homeRef,
  projectRef,
  aboutRef,
  contactRef,
}: {
  homeRef: boolean;
  projectRef: boolean;
  aboutRef: boolean;
  contactRef: boolean;
}) {
  return <BackgroundDiv></BackgroundDiv>;
}
