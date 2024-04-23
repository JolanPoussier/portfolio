import styled, { keyframes } from "styled-components";

const borderRadiantAnimation = keyframes`
    0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const BorderBottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  aspect-ratio: 3/2;
  border-radius: 0 0 0 20px;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  background: linear-gradient(45deg, white, white, #69c2fa, #a37eed) border-box;
  background-size: 600% 600%;
  animation: ${borderRadiantAnimation} 10s infinite ease;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  &::before {
    content: "";
    position: absolute;
    bottom: calc(100% - 30px);
    left: -4px;
    width: 20px;
    height: 30px;
    background: linear-gradient(to top right, transparent 50%, #090b17 50%);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: calc(100% - 30px);
    width: 30px;
    height: 20px;
    background: linear-gradient(to top right, transparent 50%, #090b17 50%);
    z-index: 1;
  }
`;

const BorderTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50%;
  aspect-ratio: 3/2;
  border-radius: 0 20px 0 0;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  background: linear-gradient(45deg, white, white, #a37eed, #69c2fa) border-box;
  background-size: 600% 600%;
  animation: ${borderRadiantAnimation} 10s infinite ease;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 30px);
    right: -4px;
    width: 20px;
    height: 30px;
    background: linear-gradient(to bottom left, transparent 50%, #11132e 50%);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    right: calc(100% - 30px);
    width: 30px;
    height: 20px;
    background: linear-gradient(to bottom left, transparent 50%, #0d0f21 50%);
    z-index: 1;
  }
`;

export default function BordersHome() {
  return (
    <>
      <BorderBottomLeft />
      <BorderTopRight />
    </>
  );
}
