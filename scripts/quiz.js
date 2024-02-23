
/*
function user(name, is_student) {
    this.name = name;
    this.is_student = is_student;
};
*/
function create_new_answer_box(){
    let id = document.getElementById("create_new_answer");
    id = id.previousElementSibling.id;
    console.log(id);
    id = parseInt(id[6]);
    console.log(id);
    if(id < 5){
        let answer_label = document.createElement("label");
        let answer_text = document.createElement("input");
        
        id++;
    
        answer_label.innerHTML = "Answer "+ id;
        answer_label.id = "answer"+id;
        answer_label.class="answer_label_class";
        answer_label.setAttribute("for", "answer"+id);
        
        answer_text.type="text";
        answer_text.id = "answer"+id;
        answer_text.classList.add("answer_text_class");
    
        let button = document.getElementById("create_new_answer");
        
        button.parentNode.insertBefore(answer_label, button);
        button.parentNode.insertBefore(answer_text, button);
    } else {
        alert("Max 5     answers");
        console.log("FAIL");
    }
    


}



let quiz_questions = [];
let quiz_answers = [];
const question_txt_field = document.getElementById('question_txt_field');
const answer_txt_field = document.getElementById('answer_txt_field');
const quiz_txt_area = document.getElementById('quiz_txt_area');
const button_1 = document.getElementById('button1');
const button_2 = document.getElementById('button2');


button_1.addEventListener('click', () => {
    if (question_txt_field.value && answer_txt_field.value) {
        create_quiz_q_a(question_txt_field.value, answer_txt_field.value);
    } else {
        console.log('Please enter both a question and answer.');
    }
    question_txt_field.value = "";
    answer_txt_field.value = "";
});

button_2.addEventListener('click', () => {
    print_quiz();
});


function create_quiz_q_a(question, answer) {
    quiz_questions.push(question);
    quiz_answers.push(answer);
}

function print_quiz() {
    let str = "";
    for (let i = 0; i < quiz_questions.length; i++) {
        console.log(quiz_questions[i] + " = " + quiz_answers[i]);
        if (i != 0) {
            str += "\n";
        }
        str += "Question: " + quiz_questions[i] + "\n" + "Answer: " + quiz_answers[i];
    }
    quiz_txt_area.value = str;
}

function end_quiz() {
    quiz_txt_area.value = "";
}

function clearQAs() {
    quiz_questions = [];
    quiz_answers = [];
}
