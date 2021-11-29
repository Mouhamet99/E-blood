setTimeout(function() {
    speakOnFireFox("Welcome. I am Mr Bot.");
}, 1000);

const user = JSON.parse(sessionStorage.getItem("user"));
console.table(user.email, user.password);
const questions = document.querySelectorAll(".questions");
const responses = document.querySelectorAll(
    '.answer input[type="radio"], .answer select'
);
let pageNumber = document.querySelector("#page-number");
let titles = document.querySelectorAll(".questions>h1");
let responseBtn = document.querySelector(".btn-response>button");
let nextButton = document.querySelector("#next");
const signOutbtn = document.querySelector("button#sign-out");

let count = 0;
let questionNumber = 0;
let testResult = 0;
const testDetails = [];
/*=================*/
/*Recuperation des attribut des noms des questions*/
/*=================*/
const responsesNames = Object.values(responses).map((e) => e.name);

/*=================*/
/*Numerotaion automatiques des questions*/
/*=================*/
titles.forEach((e, i) => {
    e.innerHTML = "Question " + (i + 1).toString();
});
/*=================*/
/*Gestion numerotation pages suivant le nombre questions*/
/*=================*/
function handlingPageNumber() {
    pageNumber.innerText =
        count.toString() + "/" + (questions.length - 1).toString();
}
handlingPageNumber();
/*=================*/
/*Gestion Affichage avec le bouton suivant*/
/*=================*/
nextButton.textContent = "Commencer";
nextButton.style.backgroundColor = "green";
nextButton.addEventListener("click", step);

function step() {
    this.style.backgroundColor = "#034F89";
    this.textContent = "Suivant";
    if (count !== 0) {
        update();
    }
    if (questions.length - 1 > count) {
        questions[count].classList.toggle("active");
        questions[++count].classList.toggle("active");
        handlingPageNumber();
        console.log(count);

        if (questions.length == count + 1) {
            console.log(questions.length - count);
            this.textContent = "Valider";
            this.style.backgroundColor = "green";
        }
    } else {
        console.log(user, questions.length, count);
        console.log(user);
        window.location.href = "./resultat.html";
    }
}
// id = oui puis on recupère la valeur sous format int
function update() {
    let elemenetName = responsesNames[questionNumber];
    let RadiouserResponse = document.querySelector(
        `input:checked[name="${elemenetName}"]`
    );
    let SelectUserResponse = document.querySelector(
        `select[name="${elemenetName}"]`
    );
    let userResponse = SelectUserResponse || RadiouserResponse;

    let obj = { libele: elemenetName, usesResponse: userResponse.value };
    testDetails.push(obj);

    if (userResponse.type == "radio") {
        console.log(userResponse);
        console.log(userResponse.value);
        if (elemenetName !== "termes-et-services" && elemenetName !== "vaccin")
            testResult += parseInt(userResponse.value, 10);
        questionNumber += 2;
    } else if (userResponse.selectedIndex !== 0) {
        console.log(userResponse.value);
        questionNumber += 2;
    }
    if (count == questions.length - 1) {
        user["testResult"] = testResult;
        user["details"] = testDetails;
        sessionStorage.setItem("user", JSON.stringify(user));
    }
    console.log(testResult);
}
/*=================*/
/*Deconnexion*/
/*=================*/
signOutbtn.addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "./connexion.html";
});
/*=================*/
/*Synthese vocale for firefox*/
/*=================*/

const speakOnFireFox = (msg, lang) => {

    const sp = new SpeechSynthesisUtterance(msg);
    // [sp.voice]= speechSynthesis.getVoices()
    // [sp.voice]= speechSynthesis.getVoices()[65]
    //english lang for firefox 19 40 65 67 102
    //english lang for firefox 38
    let index = (lang == 'fr') ? 30 : 19
    sp.voice = speechSynthesis.getVoices()[index];
    speechSynthesis.speak(sp);
};

/*=================*/
/*Synthese vocale for MsEdge*/
/*=================*/
const speakOnMsEdge = (msg, lang) => {
    const sp = new SpeechSynthesisUtterance(msg);
    if (!lang) {
        [sp.voice] = speechSynthesis.getVoices()
    } else {
        sp.voice = speechSynthesis.getVoices()[30]
    }
    speechSynthesis.speak(sp)
}