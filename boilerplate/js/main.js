// You js goes here
// You js goes here
// ARTICLE
// You js goes here
let articles = [
    {
        link: "http://altcampus.io/blog/understanding-positioning-in-css/"
    },
    {
        link: "https://altcampus.io/blog/basic-unix-commands/embed"
    },
    {
        link:"https://altcampus.io/blog/writing-semantically-correct-and-clean-html"
    },
    {
        link: "https://altcampus.io/blog/how-to-use-console-like-a-pro"
    },
    {
        link:"https://altcampus.io/blog/how-to-build-a-great-portfolio-as-a-beginner-developer"
    },
    {
        link:"https://altcampus.io/blog/array-methods-explained-pictorial-representation"
    },
    {
        link: "https://altcampus.io/blog/how-to-write-good-git-commit-message"
    },
    {
        link: "https://www.freecodecamp.org/news/making-vscode-extension"
    },
    {
        link:"https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript"
    },
    {
        link: "https://altcampus.io/blog/quiz/git-commands-1"
    },
    {
        link: "https://altcampus.io/blog/quiz/html-elements"
    },
    {
        link: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS"
    },
    {
        link: "http://perfectionkills.com/javascript-quiz"
    },
    {
        link: "https://www.sanfoundry.com/javascript-mcqs-lexical-structure"
    },
    {
        link: "http://davidshariff.com/js-quiz/"
    },
    {
        link: "https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm"
    },
    {
        link: "https://www.wscubetech.com/quiz-test-javascript"
    },
    {
        link: "https://dev.to/lydiahallie/interactive-javascript-quiz-1-1flc"
    },
    {
        link: "https://dev.to/lydiahallie/interactive-javascript-quiz-2-4pi1"
    },
    {
        link: "https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2"
    },
    {
        link: "https://medium.com/zerotomastery/dont-be-a-junior-developer-608c255b3056"

    },
    {
        link: "https://medium.freecodecamp.org/the-main-pillars-of-learning-programming-and-why-beginners-should-master-them-e04245c17c56"
    },
    {
        link: "https://medium.com/@benbob/what-i-learned-from-working-for-both-bill-gates-and-steve-jobs-f0c04e1e5160"
    },
    {
        link: "https://engineering.videoblocks.com/web-architecture-101-a3224e126947"
    },
    {
        link: "https://edgecoders.com/the-mistakes-i-made-as-a-beginner-programmer-ac8b3e54c312"
    },
    {
        link: "http://www.akkadia.org/drepper/cpumemory.pdf"
    },
    {
        link: "https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html"
    },
    {
        link: "http://blog.lunatech.com/2009/02/03/what-every-web-developer-must-know-about-url-encoding"
    },
    {
        link: "https://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before"
    },
    {
        link: "http://katemats.com/what-every-programmer-should-know-about-seo/"
    },
    {
        link: "http://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html"
    },
    {
        link: "http://gafferongames.com/networking-for-game-programmers/what-every-programmer-needs-to-know-about-game-networking/"
    },
    {
        link: "https://stackoverflow.com/questions/2794016/what-should-every-programmer-know-about-security"
    },
    {
        link: "https://opensource.com/article/18/11/multiple-programming-languages"
    },
    {
        link: "https://opensource.com/article/18/9/how-many-programming-languages"
    },
    {
        link: "https://opensource.com/article/18/10/next-programming-language-you-want-learn"
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


// Search Selector

const input = document.querySelector(".search-input");

const select = document.querySelector("#searchselect");
let url = "";


let selected = select.value;

input.addEventListener("keyup", (e) => {

    if (e.keyCode == 13) {
        let searchString = input.value.trim();
        
        let selected = select.value;

        if (searchString) {
        
        switch(selected) {
            case "mdn":
              url = "https://developer.mozilla.org/en-US/search?q=test" + searchString.split(" ").join("+");
              window.location.href = url;
              break;
              case "csstricks":
                url = "https://css-tricks.com/?s=" + searchString.split(" ").join("%");
                window.location.href = url;
                break;
                    case "stackof":
                        url = "https://stackoverflow.com/search?q=" + searchString.split(" ").join("+");
                        window.location.href = url;
                        break;
                        case "github":
                            url = "https://github.com/search?q=" + searchString.split(" ").join("+");
                            window.location.href = url;
                            break;
                            case "jsinfo":
                                url = "https://javascript.info/search/?query=" + searchString.split(" ").join("+") + "&type=article";
                                window.location.href = url;
                                break;
                                case "google":
                                    url = "https://www.google.com/search?q=" + searchString.split(" ").join("+");
                                    window.location.href = url;
                                    break;
          } 
        } 
        input.value = "";}

        
    })

document.querySelector(".fas").addEventListener("click", () => {
    document.querySelector("#searchselect").click();
    console.log("clicked");
})
