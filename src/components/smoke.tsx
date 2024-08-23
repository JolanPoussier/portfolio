import styled, { keyframes } from "styled-components";

const moveSmoke = keyframes`
  from {
    bottom: 47%;
  }
  to {
    bottom: calc(47% + 50px);
  }
`;

const widthSmoke = keyframes`
    0% {
      width: 25%;
    }
    50% {
      width: 75%;
    } 
    100% {
      width: 100%;
    }
`;

const fadeOut = keyframes`
    0% {
      opacity: 0;
    }
    50% {
    opacity: 1;
    } 
    100% {
      opacity: 0;
    }
  `;

const Container = styled.div`
  height: 140px;
  width 200px;
  position: absolute;
  left: 155px;
  bottom: 50%;
  display: flex;
  align-items: flex-end;

  animation:
    ${moveSmoke} 5s forwards infinite,
    ${fadeOut} 5s forwards infinite;
`;

const SVG = styled.svg`
  position: relative;
  animation: ${widthSmoke} 5s forwards infinite;
`;

const Container2 = styled(Container)`
  left: 85px;
  animation:
    ${moveSmoke} 5s forwards 1.7s infinite,
    ${fadeOut} 5s forwards 1.7s infinite;
`;

const SVG2 = styled(SVG)`
  width: 0%;
  animation: ${widthSmoke} 5s forwards 1.7s infinite;
`;

const Container3 = styled(Container)`
  left: 120px;
  animation:
    ${moveSmoke} 5s forwards 3.5s infinite,
    ${fadeOut} 5s forwards 3.5s infinite;
`;

const SVG3 = styled(SVG)`
  width: 0%;
  animation: ${widthSmoke} 5s forwards 3.5s infinite;
`;

export default function Smoke() {
  return (
    <>
      <Container>
        <SVG
          width="25"
          height="100"
          viewBox="0 0 54 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 0L40.334 38.166C55.6824 56.0069 57.9787 81.6362 46.0463 101.921L34.1459 122.152C28.8124 131.219 26 141.547 26 152.066V203.5L7.2328 168.794C-3.53933 148.872 -1.49618 124.464 12.4379 106.611L17.2906 100.393C29.7994 84.3664 32.8249 62.8902 25.2307 44.0313L7.5 0Z"
            fill="#D9D9D9"
          />
        </SVG>
      </Container>
      <Container2>
        <SVG2
          width="28"
          height="100"
          viewBox="0 0 34 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0L30.3658 15.5011C35.475 30.2611 33.1968 46.576 24.2398 59.3718V59.3718C11.7617 77.1976 11.6352 100.89 23.9223 118.848L29.5 127L18.586 119.1C-3.38898 103.195 -6.23443 71.5359 12.552 51.9666V51.9666C20.5396 43.6463 25 32.5593 25 21.0254V0Z"
            fill="#D9D9D9"
          />
        </SVG2>
      </Container2>
      <Container3>
        <SVG3
          width="25"
          height="63"
          viewBox="0 0 50 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0L44.2486 32.4641C52.7343 46.7758 50.9733 64.9351 39.8957 77.3496V77.3496C33.2003 84.8531 29.5 94.5578 29.5 104.614V127L18.586 119.1C-3.38898 103.195 -6.23443 71.5359 12.552 51.9666V51.9666C20.5396 43.6463 25 32.5593 25 21.0254V0Z"
            fill="#D9D9D9"
          />
        </SVG3>
      </Container3>
    </>
  );
}
