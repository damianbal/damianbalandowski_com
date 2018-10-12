let project = (
  title,
  description,
  thumb,
  gh_link = "#",
  demo_link = "#",
  tech = "?"
) => {
  return {
    title,
    description,
    thumb,
    gh_link,
    demo_link,
    tech
  };
};

export const games = [
  project(
    "Modu",
    `Modern Game Framework for Web
    
    http://portfolio.damianbalandowski.com/modu_demos/5/
    http://portfolio.damianbalandowski.com/modu_demos/6/
    `,
    "http://damianbalandowski.com/img/js.jpeg",
    "https://github.com/damianbal/modu",
    "http://portfolio.damianbalandowski.com/modu_demos/4/",
    "JS (ES6), PIXI.js"
  ),
  project(
    "Colorflow",
    "Android / iOS game",
    "http://damianbalandowski.com/img/colorflow.png",
    "",
    "https://play.google.com/store/apps/details?id=com.balandowski.colorflow&hl=en",
    "Cocos2D-X, C++"
  ),
  project(
    "Monsterki",
    "Game developed in JS HTML5 Canvas",
    "http://damianbalandowski.com/img/Monsterki.png",
    "https://github.com/damianbal/Monsterki",
    "http://portfolio.damianbalandowski.com/Monsterki/",
    "JS (ES6), PIXI.js"
  ),
  project(
    "AimArena",
    "Game developed in PIXI.js",
    "http://damianbalandowski.com/img/aimarena.png",
    "",
    "http://portfolio.damianbalandowski.com/aimarena-dev/",
    "JS (ES6), PIXI.js, Vue.js"
  ),
  project(
    "Game Engine",
    "Over years I was developing a game engine in C++ and OpenGL 3.2, I learned a lot from it, but of course, the project was not finished, and really it would never be as you can add more and more features to it.",
    "http://damianbalandowski.com/img/game_engine.png",
    "",
    "https://www.youtube.com/watch?v=wrCrm02zHN8&list=PL3Q2lmRKrbfLLykPFppRBBAQXOJ2yDpE2",
    "C++, OpenGL"
  ),
  project(
    "Snake",
    "Game developed in SFML",
    "http://damianbalandowski.com/img/snake.png",
    "",
    "https://www.youtube.com/watch?v=L4RXoXHJrD4",
    "C++, SFML2"
  )
];

export const projects = [
  project(
    "Galleo",
    "Create galleries and access them by API",
    "http://damianbalandowski.com/img/galleo.png",
    "https://github.com/damianbal/Galleo",
    "",
    "Laravel, HTML, CSS3, PHP"
  ),
  project(
    "Meetio",
    "Meeting platform",
    "http://damianbalandowski.com/img/meetio.png",
    "https://github.com/damianbal/meetio",
    "",
    "Symfony Components, PHP, Vue.js, vuex, vue-router, Doctrine"
  ),
  project(
    "Ladasho",
    "Tiny Resource Manager for Laravel",
    "http://damianbalandowski.com/img/ladasho1.png",
    "https://github.com/damianbal/ladasho-app",
    "",
    "Laravel, PHP, Vue.js, vuex, vue-router"
  ),
  project(
    "Newsfly",
    "Send email news to subscribers",
    "http://damianbalandowski.com/img/newsfly.png",
    "https://github.com/damianbal/newsfly",
    "https://newsfly-platform.herokuapp.com/",
    "Laravel, PHP"
  ),
  project(
    "Microdisqus",
    "simple discussion platform made in Laravel",
    "http://damianbalandowski.com/img/microdisqus.png",
    "https://github.com/damianbal/microdisqus",
    "",
    "Laravel, PHP"
  ),
  project(
    "OpenFlix",
    "https://github.com/damianbal/openflix",
    "http://damianbalandowski.com/img/openflix.png",
    "https://github.com/damianbal/openflix-vue",
    "",
    "Laravel, PHP, JS, Vue.js"
  ),
  project(
    "InvPlus",
    "Platform for creating invoices, made in Laravel",
    "http://damianbalandowski.com/img/invplus.png",
    "https://github.com/damianbal/invplus",
    "",
    "Laravel, PHP, JS, Vue.js"
  ),
  project(
    "PasteBuddy",
    "Simple code sharing website",
    "http://damianbalandowski.com/img/pastebuddy.png",
    "https://github.com/damianbal/pastebuddy",
    "http://portfolio.damianbalandowski.com/pastebuddy/#/",
    "JS, Vue.js, Shipla"
  ),
  project(
    "React Restaurant",
    "",
    "http://damianbalandowski.com/img/rr.png",
    "",
    "http://portfolio.damianbalandowski.com/rr/#",
    "JS, Vue.js, Firebase"
  ),
  project(
    "QuizLand",
    "https://github.com/damianbal/quizland-backend",
    "http://damianbalandowski.com/img/quiz.png",
    "https://github.com/damianbal/quizland-frontend",
    "http://portfolio.damianbalandowski.com/quiz/",
    "PHP, Vue.js"
  ),
  project(
    "MeApp",
    "",
    "http://damianbalandowski.com/img/meapp.png",
    "",
    "http://portfolio.damianbalandowski.com/meapp/",
    "JS, Vue.js, Firebase"
  ),
  project(
    "Shipla",
    "https://github.com/damianbal/shipla  - Very simple API platform",
    "http://damianbalandowski.com/img/shipla_1.png",
    "https://github.com/damianbal/shipla-dashboard",
    "http://portfolio.damianbalandowski.com/shipla-dashboard/#/",
    "JS, Vue.js, Firebase"
  ),
  project(
    "Schat",
    "",
    "http://damianbalandowski.com/img/schat.png",
    "https://github.com/damianbal/schat",
    "",
    "JS, Vue.js, PHP, Laravel"
  ),
  project(
    "LiteForoBoard",
    "",
    "http://damianbalandowski.com/img/laravel.png",
    "https://github.com/DamianPrg/liteforoboard",
    "",
    "Laravel, PHP"
  ),
  project(
    "Artison",
    "",
    "http://damianbalandowski.com/img/artison.png",
    "https://github.com/DamianPrg/Artison",
    "http://damianprg.github.io/Artison/",
    "Objective-C, Cocoa"
  ),
  project(
    "Nue-Blog",
    "",
    "http://damianbalandowski.com/img/php.png",
    "https://github.com/damianbal/nue-blog",
    "https://github.com/damianbal/nue-fw",
    "PHP, HTML, CSS"
  )
];

export const templates = [
  project(
    "VisitSzczecin",
    "",
    "http://damianbalandowski.com/img/visitszczecin.png",
    "",
    "http://portfolio.damianbalandowski.com/VisitSzczecin/",
    "HTML5, Bootstrap 4"
  ),
  project(
    "SimplyAgency",
    "",
    "http://damianbalandowski.com/img/simplyagency.png",
    "",
    "http://portfolio.damianbalandowski.com/SimplyAgency/",
    "HTML5, Bootstrap 4"
  ),
  project(
    "Innovation",
    "",
    "http://damianbalandowski.com/img/Innovation.png",
    "",
    "http://portfolio.damianbalandowski.com/Innovation/",
    "HTML5, Bootstrap 4"
  ),
  project(
    "Vispacci (Wordpress)",
    "",
    "http://damianbalandowski.com/img/vispacci.png",
    "https://github.com/damianbal/vispacci-wp-theme",
    "",
    "PHP, HTML, CSS, Wordpress"
  ),
  project(
    "Finalito",
    "",
    "http://damianbalandowski.com/img/Finalito.png",
    "",
    "http://portfolio.damianbalandowski.com/Finalito/",
    "HTML5, Bootstrap 4"
  ),
  project(
    "App-X",
    "",
    "http://damianbalandowski.com/img/appx.png",
    "",
    "http://portfolio.damianbalandowski.com/appx/",
    "HTML5, CSS3"
  ),
  project(
    "DarkBoard",
    "",
    "http://damianbalandowski.com/img/darkboard.png",
    "",
    "http://portfolio.damianbalandowski.com/darkboard/",
    "HTML5, Bootstrap 4, CSS3"
  ),
  project(
    "DarkBoot",
    "",
    "http://damianbalandowski.com/img/darkboot.png",
    "",
    "http://portfolio.damianbalandowski.com/darkboot/",
    "SASS, Bootstrap 4"
  ),
  project(
    "Suppaclo",
    "",
    "http://damianbalandowski.com/img/suppaclo.png",
    "",
    "http://portfolio.damianbalandowski.com/suppaclo/",
    "HTML5, CSS3"
  ),
  project(
    "Darky",
    "",
    "http://damianbalandowski.com/img/darky.png",
    "",
    "http://portfolio.damianbalandowski.com/darky/",
    "HTML5, CSS3"
  ),
  project(
    "XDash",
    "",
    "http://damianbalandowski.com/img/xdash.png",
    "",
    "http://portfolio.damianbalandowski.com/xdash/",
    "HTML5, CSS3"
  ),
  project(
    "SimplyAlpine",
    "",
    "http://damianbalandowski.com/img/simplyalpine.png",
    "",
    "http://portfolio.damianbalandowski.com/alpine/",
    "HTML5, CSS3"
  ),
  project(
    "Pizzeria",
    "",
    "http://damianbalandowski.com/img/pizzeria.png",
    "",
    "http://portfolio.damianbalandowski.com/pizzeria/index.html",
    "HTML5, CSS3"
  ),
  project(
    "Forum",
    "",
    "http://damianbalandowski.com/img/forum.png",
    "",
    "http://portfolio.damianbalandowski.com/forum/index.html",
    "HTML5, CSS3"
  ),
  project(
    "Gaming 1",
    "",
    "http://damianbalandowski.com/img/gaming2.png",
    "",
    "http://portfolio.damianbalandowski.com/Game-Place-2/",
    "HTML, CSS3"
  ),
  project(
    "Gaming 2",
    "",
    "http://damianbalandowski.com/img/gaming1.png",
    "",
    "http://portfolio.damianbalandowski.com/Game-Place-1/",
    "HTML, CSS3"
  ),
  /*
    project("Gaming",
    "",
    "http://damianbalandowski.com/img/gaming0.png",
    "",
    "http://portfolio.damianbalandowski.com/Game-Place-0/", "HTML, CSS3"
    ),
    */
  project(
    "VOD",
    "",
    "http://damianbalandowski.com/img/vod.png",
    "",
    "http://portfolio.damianbalandowski.com/vod/new_index.html",
    "HTML, CSS3"
  ),
  /*
    project("BookyConcert",
    "",
    "http://damianbalandowski.com/img/bookyconcert.png",
    "",
    "http://portfolio.damianbalandowski.com/bookyconcert/", "HTML, CSS3"
    ),
    */
  project(
    "LiteKit",
    "",
    "http://damianbalandowski.com/img/litekit.png",
    "",
    "http://portfolio.damianbalandowski.com/litekit/",
    "SASS, CSS3"
  ),
  project(
    "LYO",
    "",
    "http://damianbalandowski.com/img/lyo.png",
    "",
    "http://portfolio.damianbalandowski.com/lyo/2/",
    "SASS, CSS3"
  )
];
