"use client";
import React from 'react'
import Image from "next/image";

const skills = [

  { name: "Angular", img: "/iamges/angular.png" },
  { name: "API", img: "/iamges/api.png" },
  { name: "Bootstrap", img: "/iamges/bootstrap.png" },
  { name: "Chakra UI", img: "/iamges/chakra-ui.png" },
  { name: "ChatGPT", img: "/iamges/chatgpt.png" },
  { name: "CSS3", img: "/iamges/css3.png" },
  { name: "CSS Grid", img: "/iamges/css-grid.png" },
  { name: "Cursor AI", img: "/iamges/cursor-ai.png" },
  { name: "Cypress", img: "/iamges/cypress.png" },
  { name: "ESLint", img: "/iamges/eslint.png" },
  { name: "Figma", img: "/iamges/figma.png" },
  { name: "Git", img: "/iamges/git.png" },
  { name: "GitHub", img: "/iamges/github.png" },
  { name: "GitHub Copilot", img: "/iamges/github-copilot.png" },
  { name: "GitHub Page", img: "/iamges/github-page.png" },
  { name: "GitLab", img: "/iamges/gitlab.png" },
  { name: "HTML5", img: "/iamges/html5.png" },
  { name: "Webpack Icons", img: "/iamges/icons8-webpack-50.png" },
  { name: "JavaScript", img: "/iamges/javascript.png" },
  { name: "Jest", img: "/iamges/jest.png" },
  { name: "JSON", img: "/iamges/json.png" },
  { name: "Material UI", img: "/iamges/material-ui.png" },
  { name: "Netlify", img: "/iamges/netlify.png" },
  { name: "NPM", img: "/iamges/npm.png" },
  { name: "React JS", img: "/iamges/react-js.png" },
  { name: "Sass", img: "/iamges/sass.png" },
  { name: "SCSS", img: "/iamges/scss.png" },
  { name: "Tailwind CSS", img: "/iamges/tailwind-css.png" },
  { name: "TypeScript", img: "/iamges/typescript.png" },
  { name: "Vite", img: "/iamges/vite.png" },
  { name: "VS Code", img: "/iamges/vs-code.png" },
  { name: "Vue JS", img: "/iamges/vue-js.png" },
  { name: "Yarn", img: "/iamges/yarn.png" },
  { name: "NestJS", img: "/iamges/nest.js.png" },
  { name: "Postman", img: "/iamges/postman.png" },
  { name: "Firebase", img: "/iamges/firebase.png" },
  { name: "Node.js", img: "/iamges/node-js.png" },
  { name: "Redux", img: "/iamges/redux.png" },
  { name: "Vercel", img: "/iamges/vercel.png" },
    { name: "React-Native", img: "/iamges/react-native.png" },
    { name: "Jquery", img: "/iamges/jquery.png" },
    { name: "Next.js", img: "/iamges/next.js.png" },
    { name: "Wordpress", img: "/iamges/wordpress.png" },
];



const page = () => {
  return (
    <>
    
      <div className="container text-center pb-[100px] pt-[200px] ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px]  ">
          {skills.map(({ name, img }, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] w-[190px] h-[200px] rounded-lg hover:pt-[20px] hover:scale-90 flex flex-col items-center justify-center hover:shadow-pink-500/30 transition duration-300"
            >
                <Image src={img} alt={`${name} logo`} width={50} height={50}  className=" object-contain" />
              <p className="text-[20px] font-bold font-main mt-[18px] text-white">   {name}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default page