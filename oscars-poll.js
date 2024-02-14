// Following this tutorial: https://www.youtube.com/watch?v=AIgtuB3569w, will make changes as necessary

let poll = {
    question: "Who do you think should win Best Actor in a Leading Role?",
    answers:[
        "Bradley Cooper, Maestro",
        "Colman Domingo, Rustin",
        "Paul Giamatti, The Holdovers", 
        "Cillian Murphy, Oppenheimer",
        "Jeffrey Wright, American Fiction"
    ],
    pollCount:20,
    answersWeight:[36,3,20,49,28],
    selectedAnswer:-1,
};

let pollDOM = {
    question:document.querySelector(".poll .question"),
    answers:document.querySelector(".poll .answers")
};

pollDOM.question.innerText = poll.question;
pollDOM.answers.innerHTML = poll.answers.map(function(answer,i){
        // Splitting the answer into actor name and movie title
        let [actor, movie] = answer.split(', ');
        // Generating HTML with actor name in bold and movie title in italics
        return (
            `<div class="answer" onclick="markAnswer(${i})">
                <span class="actor"><strong>${actor}</strong></span>, <span class="movie"><em>${movie}</em></span>
                <div class="percentage-bar"></div>
                <span class="percentage-value"></span>
            </div>`
    );
}).join("");

function markAnswer(i){
    poll.selectedAnswer = +i;
    try{
        document.querySelector(".poll .answers .answer.selected").classList.remove
    }
    catch(msg){}
    document.querySelectorAll(".poll . answers .answer")[+i].classList.add("selected");
    showResults();
}


function showResults(){
    let answers = document.querySelectorAll(".poll .answers .answer");
    for(let i=0;i<answers.length;i++){
        let percentage = 0;
        if(i == poll.selectedAnswer){
            percentage = Math.round(
                (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
            );
        } else{
            percentage = Math.round(
                (poll.answersWeight[i]) * 100 / (poll.pollCount+1)
            );
        }

        answers[i].querySelector(".percentage-bar").style.width  = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}


