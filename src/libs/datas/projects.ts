interface Project {
  image: string;
  title: string;
  text: string;
  link: string;
}

export const projects = <Project[]>[
  {
    image: "/assets/projectsPic/outspeed.png",
    title: "Outspeed",
    text: "This website references a wide range of possible plays in Rocket League, a multiplayer football game. It was created using NextJS for the frontend and the backend and host on Vercel.",
    link: "https://www.outspeed.fr/",
  },
  {
    image: "/assets/projectsPic/aicooker.png",
    title: "AICooker",
    text: "With AiCooker you can generate kitchen recipes with products of your choice thanks to the OpenAI API. This project was created using NextJS, tailwind and the OpenAI API.",
    link: "https://ia-cooker-2cd92e0c1e3b.herokuapp.com/",
  },
];
