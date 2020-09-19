"use strict"

var obj1 = 0; var obj2 = 0; var operator = "+";
var counter = 0;
var answerBar = document.getElementById("answer");


function FindResult(){
    var result = eval(obj1 + " " + operator + " " + obj2);    
    answerBar.textContent = result;
    counter = 0;
}

function ClearAnswerBar(){
    answerBar.textContent = 0;
    obj1 = 0;
    obj2 = 0;
    operator = 0;
    counter = 0;
}

function operatorClicker(){
    counter = 1;
}

function SetValues(para){
    if(counter === 0){
        x.toElement.innerText
        var num = para.toElement.innerText;
        num: Number;
        obj1 += num;
    }
}

function multiplyClicked(){
    operator = "*";
    answerBar.textContent = operator;
    operatorClicker();
}

function minusClicked(){
    operator = "-";
    answerBar.textContent = operator;
    operatorClicker();
}

function plusClicked(){
    operator = "+";
    answerBar.textContent = operator;
    operatorClicker();
}

function DevideClicked(){
    operator = "/";
    answerBar.textContent = operator;
    operatorClicker();
}

function PlusMinusClicked(){
    operator = "+";
    answerBar.textContent = operator;
    operatorClicker();
}

function ModClicked(){
    operator = "%";
    answerBar.textContent = operator;
    operatorClicker();
}

function OneClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 1;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 1;
        answerBar.textContent = obj2;
    }
}

function TwoClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 2;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 2;
        answerBar.textContent = obj2;
    }
}
function ThreeClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 3;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 3;
        answerBar.textContent = obj2;
    }
}
function FourClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 4;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 4;
        answerBar.textContent = obj2;
    }
}
function FiveClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 5;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 5;
        answerBar.textContent = obj2;
    }
}
function SixClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 6;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 6;
        answerBar.textContent = obj2;
    }
}
function SevenClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 7;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 7;
        answerBar.textContent = obj2;
    }
}
function EightClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 8;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 8;
        answerBar.textContent = obj2;
    }
}
function NineClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 9;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 9;
        answerBar.textContent = obj2;
    }
}

function zeroClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 0;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 0;
        answerBar.textContent = obj2;
    }
}

function DecClicked(){
    if(counter === 0){
        obj1 = obj1*10 + 0.0;
        answerBar.textContent = obj1;
    }
    else{
        obj2 = obj2*10 + 0;
        answerBar.textContent = obj2;
    }
}

var ACbuttonClick = document.getElementsByClassName("AC");
ACbuttonClick[0].addEventListener("click",ClearAnswerBar);

var EvaluatebuttonClick = document.getElementsByClassName("Evaluate");
EvaluatebuttonClick[0].addEventListener("click",FindResult);

var multiply = document.getElementsByClassName("Multiply");
multiply[0].addEventListener("click",multiplyClicked);

var minus = document.getElementsByClassName("Minus");
minus[0].addEventListener("click",minusClicked);

var plus = document.getElementsByClassName("Plus");
plus[0].addEventListener("click",plusClicked);

var Devide = document.getElementsByClassName("Devide");
Devide[0].addEventListener("click",DevideClicked);

var PlusMinus = document.getElementsByClassName("PlusMinus");
PlusMinus[0].addEventListener("click",PlusMinusClicked);

var Mod = document.getElementsByClassName("Mod");
Mod[0].addEventListener("click",ModClicked);


var one = document.getElementsByClassName("One");
one[0].addEventListener("click",OneClicked);

var Two = document.getElementsByClassName("Two");
Two[0].addEventListener("click",TwoClicked);

var Three = document.getElementsByClassName("Three");
Three[0].addEventListener("click",ThreeClicked);

var Four = document.getElementsByClassName("Four");
Four[0].addEventListener("click",FourClicked);

var Five = document.getElementsByClassName("Five");
Five[0].addEventListener("click",FiveClicked);

var Six = document.getElementsByClassName("Six");
Six[0].addEventListener("click",SixClicked);

var Seven = document.getElementsByClassName("Seven");
Seven[0].addEventListener("click",SevenClicked);

var Eight = document.getElementsByClassName("Eight");
Eight[0].addEventListener("click",EightClicked);

var Nine = document.getElementsByClassName("Nine");
Nine[0].addEventListener("click",NineClicked);

var Zero = document.getElementsByClassName("Zero");
Zero[0].addEventListener("click",zeroClicked);