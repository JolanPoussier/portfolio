interface Project {
  image: string;
  title: string;
  text: string;
  link: string;
  github: string;
}

export const projects = <Project[]>[
  {
    image: "/assets/projectsPic/outspeed.png",
    title: "Outspeed",
    text: "Outspeed est une bibliothèque des différentes techniques possibles dans Rocket League, un jeu multijoueur de football.",
    link: "https://www.outspeed.fr/",
    github: "https://github.com/JolanPoussier/ProjectRL",
  },
  {
    image: "/assets/projectsPic/aicooker.png",
    title: "AICooker",
    text: "AiCooker permet de générer des recettes de cuisine avec les produits de votre choix. C'est une application vide-frigo réalisée avec l'API OpenAI(chatGPT) qui compose elle-même les recettes proposées.",
    link: "https://ia-cooker-2cd92e0c1e3b.herokuapp.com/",
    github: "https://github.com/JolanPoussier/FoodHelperAI",
  },
  {
    image: "/assets/projectsPic/portfolio.png",
    title: "Portfolio",
    text: "Ce portfolio afin de mettre en avant les projets que j'ai pu réaliser ainsi que mes compétences techniques.",
    link: "#",
    github: "https://github.com/JolanPoussier/FoodHelperAI",
  },
];
