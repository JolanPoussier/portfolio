interface Project {
  image: string;
  title: string;
  text: string;
  link: string;
  github: string;
  development: string;
  technos: string[];
}

export const projects = <Project[]>[
  {
    image: "/assets/projectsPic/outspeed.png",
    title: "Outspeed",
    text: "Outspeed est une bibliothèque des différentes techniques possibles dans Rocket League, un jeu multijoueur de football.",
    link: "https://www.outspeed.fr/",
    github: "https://github.com/JolanPoussier/ProjectRL",
    development:
      "Un back-end a été créé sur Next.JS (avec Node.JS) en Programmation Orientée Objet en utilisant un système de classe. La communication avec la BDD, créée et gérée sur Vercel, s'est faite à l'aide de l'ORM Prisma.",
    technos: ["Next.JS", "Node.JS", "TypeScript", "SCSS", "Prisma", "Vercel"],
  },
  {
    image: "/assets/projectsPic/aicooker.png",
    title: "AICooker",
    text: "AiCooker est une application vide-frigo réalisée avec l'API OpenAI(chatGPT) qui compose elle-même les recettes proposées.",
    link: "https://ia-cooker-2cd92e0c1e3b.herokuapp.com/",
    github: "https://github.com/JolanPoussier/FoodHelperAI",
    development:
      "Des test end to end ont été mis en place sur l'application à l'aide de Playwrite, ainsi que des github Actions (CI/CD). La totalité du contenu graphique a été généré par IA.",
    technos: [
      "Next.JS",
      "Node.JS",
      "TypeScript",
      "Tailwind",
      "Heroku",
      "Jest",
      "Playwright",
      "Github Actions",
    ],
  },
  {
    image: "/assets/projectsPic/portfolio.png",
    title: "Portfolio",
    text: "Ce portfolio sert à mettre en avant les projets que j'ai pu réaliser ainsi que mes compétences techniques.",
    link: "#home",
    github: "https://github.com/JolanPoussier/FoodHelperAI",
    development:
      "Le CSS de l'application a été réalisé avec styledComponents et certaines animations ont été mises en place grâce à la bibliothèque framer motion. ",
    technos: ["Next.JS", "TypeScript", "StyledComponents", "Vercel"],
  },
];
