"use client";

import splitStringUsingRegex from "@/utils/splitStringUsingRegexs";
import styled from "styled-components";
import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.extralight};
  line-height: 1em;
  font-size: 2em;
`;

const Job = styled(Name)`
  font-size: 3em;
  font-family: ${(props) => props.theme.fonts.medium};
`;

const Intro = styled(Name)`
  font-size: 1em;
`;

export function Title() {
  const name = "Jolan Poussier";
  const job = "Développeur Web";
  const intro = "Je créé des applications web avec NextJS.";

  const nameChars = splitStringUsingRegex(name);
  const jobChars = splitStringUsingRegex(job);
  const introChars = splitStringUsingRegex(intro);

  return (
    <>
      <Name>
        {nameChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{ duration: 0, delay: index * 0.1 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Name>
      <Job>
        {jobChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{ duration: 0, delay: index * 0.1 + name.length * 0.1 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Job>
      <Intro>
        {introChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{
              duration: 0,
              delay: index * 0.05 + name.length * 0.1 + job.length * 0.1,
            }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Intro>
    </>
  );
}
