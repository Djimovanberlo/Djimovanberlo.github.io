import taalkundigImg from 'assets/images/taalkundig.png'
import sisoeImg from 'assets/images/sisoe.png'
import talentCalcImg from 'assets/images/talent-calc.png'
import weddingImg from 'assets/images/wedding.png'
import portfolioImg from 'assets/images/portfolio.png'
import ancientBasementImg from 'assets/images/ancient-basement.png'
import cardGeneratorImg from 'assets/images/card-generator.png'
import dinogameImg from 'assets/images/dinogame.png'
import soaringFlocksImg from 'assets/images/soaring-flocks.png'
import fakeIdGeneratorImg from 'assets/images/fake-id-generator.png'

const sisoe = {
  title: 'Sisoe',
  text: 'Sisoe is a portfolio website I build for a friend. It has a homepage - which contains selected portfolio items and a contact form; and a portoflio page - which holds all portfolio items. The website is build with React, Sass, GraphQL and Contentful. The code is done, but the content is not filled in yet.',
  imgSrc: sisoeImg,
  githubLink: 'https://github.com/Djimovanberlo/sisoe',
  projectLink: 'https://sisoe.vercel.app/',
  stack: ['react', 'sass', 'graphQL', 'contentFul'],
}

const taalkundig = {
  title: 'Taalkundig',
  text: 'Taalkundig is a blog website I built for my brother. It has a homepage - which holds a blog post overview, a blog post detail page and a short about page. The website is built with React, Sass, GraphQL and Contentful. Although the code is ready, the content hasnot been added yet.',
  imgSrc: taalkundigImg,
  githubLink: 'https://github.com/Djimovanberlo/taalkundig',
  projectLink: 'https://taalkundig.vercel.app/',
  stack: ['react', 'sass', 'graphQL', 'contentFul'],
}

const talentCalculator = {
  title: 'Talent Calculator',
  text: "I started this project to learn TypeScript. It is a remake of Classic World of Warcraft's talent calculator but with some of my own ideas for talents and content added in. The code is super messy, as I was just starting out. The project was was built with React, TypeScript and vanilla CSS.",
  imgSrc: talentCalcImg,
  githubLink: 'https://github.com/Djimovanberlo/tc-ts',
  projectLink: 'https://djimovanberlo.github.io/tc-ts',
  stack: ['react', 'typeScript', 'sass', 'contentFul'],
}

const portfolio = {
  title: 'Portfolio',
  text: "You're looking at it! I had a bunch of fun building this and being able to design it myself. I can only imagine what kind of portfolio I'll be able to build in a few years' time.",
  imgSrc: portfolioImg,
  githubLink: 'https://github.com/Djimovanberlo/new-portfolio',
  projectLink: '',
  stack: ['react', 'typeScript', 'sass'],
}

const weddingSite = {
  title: 'Wedding Site',
  text: "I built a website for my wedding party, which includes some info about the party and an RSVP form. The website is built with React, Sass and Firebase. It featurestwo themes, some people did not quite get the humor (which makes it even funnier). Password: 'RideauRouge'",
  imgSrc: weddingImg,
  githubLink: 'https://github.com/Djimovanberlo/trouwuhh',
  projectLink: 'https://djimovanberlo.github.io/trouwuhh',
  stack: ['react', 'sass', 'firebase'],
}

const cardGenerator = {
  title: 'Card Generator',
  text: '⚠ Under construction ⚠. While developing my board game, Dino Game, my partner in crime and I want to be able to generate cards to streamline the process. Currently, we have to handle each card individually within design software, which is time-consuming. This card generator will allow us to generate cards based on user input.',
  imgSrc: cardGeneratorImg,
  githubLink: '',
  projectLink: '',
  stack: [''],
}

const ancientBasement = {
  title: 'Ancient Basement',
  text: '⚠ Under construction ⚠. Ancient Basement is an in-browser game that I’m working on. Its central gameplay loop involves repeated fights in jRPG style (Lufia, Final Fantasy, etc.), combined with a roguelite-style meta game. The game is being built with React, TypeScript, Recoil and Sass.',
  imgSrc: ancientBasementImg,
  githubLink: 'https://github.com/Djimovanberlo/ancient-basement',
  projectLink: '',
  stack: ['react', 'typeScript', 'sass'],
}

const dinoGame = {
  title: 'Dino Game',
  text: 'Dino Game is a board game that I am developing along with a friend. Players take on the role of a Dinosaur hero and have to cooperate in order to defend their land from evil invading mammal tribes. Dino game combines elements of deck building, tower defense and RPGs.',
  imgSrc: dinogameImg,
  githubLink: '',
  projectLink: '',
  stack: [''],
}

const soaringFlocks = {
  title: 'Soaring Flocks',
  text: 'Soaring flocks was my final project at Codaisseur Academy. In this game, players take on the role of capitalistic birds that compete for the most wealth. Players can generate and trade resources and chat with eachother. The game was built with React, Redux, Sequelize and Bootstrap.',
  imgSrc: soaringFlocksImg,
  githubLink: 'https://github.com/Djimovanberlo/soaring-flocks-client',
  projectLink: 'https://soaring-flocks.netlify.app/gameInfo',
  stack: ['react', 'sequelize', 'bootstrap'],
}

const fakeIdGenerator = {
  title: 'Fake ID generator',
  text: "Fake ID generator was a group project created during my time at Codaisseur Academy. The app uses a face recognition API to detect the user's face and then allows for some funny customization options. The app was built with React, Redux and vanilla CSS.",
  imgSrc: fakeIdGeneratorImg,
  githubLink: 'https://github.com/wmw123/fake-id-generator',
  projectLink: 'https://relaxed-heisenberg-4577a7.netlify.app/',
  stack: ['react', 'redux', 'css'],
}

const projects = {
  portfolio,
  weddingSite,
  sisoe,
  taalkundig,
  talentCalculator,
  soaringFlocks,
  fakeIdGenerator,
  ancientBasement,
  cardGenerator,
  dinoGame,
}

export const projectsIntro =
  'Below are a bunch of my projects. Some of them are still being worked on and some of them are finished. I also included some projects that I am working on with others.'

export default projects
