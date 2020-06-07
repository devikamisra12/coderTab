// You js goes here
// You js goes here
// ARTICLE
// You js goes here
let articles = [
    {
        //   title: "Understanding Positioning in CSS",
        link: "http://altcampus.io/blog/understanding-positioning-in-css/"
    },
    {
        // title: "Basic Unix Commands",
        link: "https://altcampus.io/blog/basic-unix-commands/embed"
    },
    {
        //   title: "Writing Semantically Correct and Clean HTML",
        link:
            "https://altcampus.io/blog/writing-semantically-correct-and-clean-html"
    },
    {
        //   title: "Use Console Like a Pro",
        link: "https://altcampus.io/blog/how-to-use-console-like-a-pro"
    },
    {
        //   title: "How to build a great portfolio as a beginner developer",
        link:
            "https://altcampus.io/blog/how-to-build-a-great-portfolio-as-a-beginner-developer"
    },
    {
        //   title: "Array Methods Explained With Pictorial Representation",
        link:
            "https://altcampus.io/blog/array-methods-explained-pictorial-representation"
    },
    {
        //   title: "How to Write a Good GIT Commit Message",
        link: "https://altcampus.io/blog/how-to-write-good-git-commit-message"
    },
    {
        //   title: "Making VSCode Extension",
        link: "https://www.freecodecamp.org/news/making-vscode-extension"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link:
            "https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://altcampus.io/blog/quiz/git-commands-1"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://altcampus.io/blog/quiz/html-elements"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "http://perfectionkills.com/javascript-quiz"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://www.sanfoundry.com/javascript-mcqs-lexical-structure"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "http://davidshariff.com/js-quiz/"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://www.wscubetech.com/quiz-test-javascript"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://dev.to/lydiahallie/interactive-javascript-quiz-1-1flc"
    },
    {
        //   title: "Implemnting a Linked List in JavaScript",
        link: "https://dev.to/lydiahallie/interactive-javascript-quiz-2-4pi1"
    }
];

let article = document.querySelector('.article');


//  Random generator
function generateRandom() {
    let i = Math.floor(Math.random() * articles.length);
    return articles[i];
}

function handleLoad() {
    article.innerHTML = "";
    let source = document.createElement("a");
    source.href = generateRandom().link;
    source.classList.add("embedly-card");
    source.setAttribute("data-card-controls", 0);
    article.append(source);


    // let a = document.createElement('a');
    // a.href = generateRandom().link;
    // a.target = "_blank";
    // a.append(article);
    // // console.log(a);
    // document.body.append(a);
    // let heading = document.querySelector('h1');
    // let heading = document.createElement("h1");
    // heading.innerText = generateRandom().title;
    // let source = document.querySelector('a');
    // let source = document.createElement("iframe");
    // source.innerText = generateRandom().link;
    // source.src = "'" + generateRandom().link + "'";
    // source.target = "_blank";
    // img = document.createElement('IMG');
    // img.src = generateRandom().image;
    // img.classList.add('image');
}



window.addEventListener("load", handleLoad);
