import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Container = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: space-around;
`;
const File = styled(Image)`
  position: relative;
`;

const Block = styled(motion.div)`
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 0 white;
  ::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 20px;
    top: 5px;
    left: 5px;
    box-shadow: 0 0 0 white;
    z-index: -1;
    transition: box-shadow 0.3s ease-out;
  }
  &:hover {
    cursor: pointer;
    & ${File} {
      transition: all 0.3s ease-out;
      content: url("/assets/openfile.png");
      width: 44px;
      height: 44px;
    }
    ::after {
      box-shadow: 0 0 30px white;
    }
  }
  font-size: 0.8em;
`;

export default function Files() {
  return (
    <Container>
      <Block
        as={motion.div}
        initial="hidden"
        animate="reveal"
        transition={{ duration: 0.2, delay: 4.5 }}
        variants={charVariants}
      >
        <File width={40} height={40} src={"/assets/file.png"} alt="file" />
        <span>Dev&apos;</span>
      </Block>
      <Block
        as={motion.div}
        initial="hidden"
        animate="reveal"
        transition={{ duration: 0.2, delay: 4.7 }}
        variants={charVariants}
      >
        <File width={40} height={40} src={"/assets/file.png"} alt="file" />
        <span>Perso</span>
      </Block>
      <Block
        as={motion.div}
        initial="hidden"
        animate="reveal"
        transition={{ duration: 0.2, delay: 4.9 }}
        variants={charVariants}
      >
        <File width={40} height={40} src={"/assets/file.png"} alt="file" />
        <span>Contact</span>
      </Block>
    </Container>
  );
}
