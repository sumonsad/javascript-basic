/*var marks = prompt("enter your marks : ");
if (marks>100 ||marks<0)
console.log("invalid marks");
if (marks>=80 && marks<=100)
console.log("A+");
else if(marks>=70 && marks<=79)
console.log("A");
else if(marks>=60 && marks<=69)
console.log("A-");
else if(marks>=50 && marks<=59)
console.log("B");
else if(marks>=40 && marks<=49)
console.log("C");
else if(marks>=33 && marks<=39)
console.log("D");
else
console.log("Fail");
document.write("</br>");
var x=3;
x+=8;
console.log(x);
document.write("</br>");
var num1=prompt("Enter First Number :");
var num2=prompt("Enter Second Number :");
var num1=parseInt(num1,10);
var num2=parseInt(num2,10);
var sum, sub, mul, div, modulus;
sum=num1+num2;
document.write(num1 + " + " + num2 + " = " +sum + "<br/>");
sub=num1-num2;
document.write(num1 + " - " + num2 + " = " +sub + "<br/>");
mul=num1*num2;
document.write(num1 + " * " + num2 + " = " +mul + "<br/>");
div=num1/num2;
document.write(num1 + " / " + num2 + " = " +div + "<br/>");
modulus=num1%num2;
document.write(num1 + " % " + num2 + " = " +modulus + "<br/>");

var letter=prompt("Enter a letter");
letter=letter.toLowerCase();
if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
document.write("vowel");
else
document.write("consonant");

var digit=prompt("Enter a digit");
switch(digit){
  case "0":
document.write("zero");
  break;
  case "1":
document.write("one");
  break;
  case "2":
document.write("two");
  break;
  case "3":
document.write("three");
  break;
  case "4":
document.write("four");
  break;
  case "5":
document.write("five");
  break;
  case "6":
document.write("six");
  break;
  case "7":
document.write("seven");
  break;
  case "8":
document.write("Eight");
  break;
  case "9":
document.write("Nine");
  break;
  default:
document.write("Not a digit");
}
letter=prompt("Enter a letter :");
letter=letter.toLowerCase();
switch(letter){
case "a":
document.write("vowel");
break;
case "e":
document.write("vowel");
break;
case "i":
document.write("vowel");
break;
case "o":
document.write("vowel");
break;
case "u":
document.write("vowel");
break;
default:
document.write("consonant");
}

var m=parseInt(prompt("Enter the starting number"));
var n=parseInt(prompt("Enter the last number"));
var sum=0;
for(var i = m; i <=n; i=i+1){
  sum=sum+i;
}
document.write(sum);
for(var x=1; x<=5; x++){
  var num1=parseInt(prompt("Enter 1st number"));
  var num2=parseInt(p30
    rompt("Enter 2nd number"));
  sum=num1+num2;
  console.log("Result = "+sum);
}
var i=1;
var sum=0;
while(i<=100) {
  if (i % 3==0 && i % 5==0){
    document.write(" "+i);
  sum=sum+i;
  }
  i=i+1;
}
document.write("<br/>")
document.write(sum);

var i=1;
do{
document.write(" "+i);
i++
}while(i<=10);

for(var i=1; i<=100; i++){
  if(i==10){
    break;
  }
  document.write(" "+i);
}

for(var i=1; i<=100; i++){
  if(i % 2 == 0){
    continue;
  }
  document.write(" "+i);
}
function square(num1,num2){
  var result=num1*num2;
  document.write("Result" + "=" +result +"<br>")
}
square(5,6);
square(6,7);
square(7,8);
square(8,9);

function addition(x,y){
var result = x+y;
document.write("Sum"+ "=" +result + "<br>")
}
function subtraction(x,y){
var result = x-y;
document.write("Sub"+ "=" +result + "<br>")
}
function multi(x,y){
var result = x*y;
document.write("Mul"+ "=" +result + "<br>")
}
function division(x,y){
var result = x/y;
document.write("Div"+ "=" +result + "<br>")
}
addition(3,4);
addition(5,9);
subtraction(36,12);
multi(4,5);
division(25,5);


function myFunction(){
  var carName = "Volvo";
document.getElementById('ami2').innerHTML= typeof carName
var names =["Rinku", "Sumon", "Raiyan", "Titu", "Mitu"];
console.log(names);
console.log(names[1]);
console.log(names.length);
names.push("Jitu");
console.log(names);
console.log(names.length);
names.pop();
console.log(names.length);
console.log(names);
names.pop();
console.log(names);
var country1=["Bangladesh", "India"];
var country2=["Pakistan", "Sreelanka"];
var country=country1.concat(country2);
console.log(country);

var num=[10, 20, 30, 40, 50];
var sum=0;
for(var i=0; i<5; i++){
  console.log(num[i]);
sum=sum+num[i];
}
console.log(sum);

function Student(name,age,cgpa,lang){
this.name=name;
this.age=age;
this.cgpa=cgpa;
this.lang=lang;

  this.display = function(){
  console.log(this.name);
  console.log(this.age);
  console.log(this.cgpa);
  console.log(this.lang);
  }
}
var student1 = new Student("Raiyan",20,3.50,["Bengali","Hindi","English"]);
var student2 = new Student("sumon",22,2.50,["Bengali","Urdu","English"]);
var student3 = new Student("Mitu",21,4.50,["Bengali","Japanis","English"]);
var student4 = new Student("Jitu",19,3.00,["Bengali","French","English"]);
student1.display();

var numOfWon = 0;
var numOfLost = 0;
for (var i=1;i<=5;i++){
  var guessNumber = parseInt(prompt("Enter a number from 1 to 5"));
  var randomNumber = Math.floor(Math.random()*5) + 1;
  if(guessNumber==randomNumber){
    console.log("you have won");
    numOfWon++;
  }else {
    console.log("you have lost. random number was :"+randomNumber);
    numOfLost++;
  }
}
document.write(Total number of won :+numOfWon + "<br>");
document.write(Total number of lost :+numOfLost + "<br>");

var numOfWon = 0;
var numOfLost = 0;
for(var i=1;i<=5;i++){
  var guessNumber=parseInt(prompt("Enter a number from 1 to 5"));
  var randomNumber=Math.floor(Math.random()*5)+1;
  if(guessNumber==randomNumber){
    console.log("you have won");
    numOfWon++;
  }else {
    console.log("you have lost. random number was :"+randomNumber);
    numOfLost++;
  }
}
document.write("Total number of won :" +numOfWon +"<br>");
document.write("Total number of lost :" +numOfLost);
*/
var photos = ["images/img1.jpeg","images/img2.jpeg","images/img3.jpeg"];
var imgTag = document.querySelector("img");

var count = 0;

function next(){
  count++;

  if(count>=photos.length){
    count=0;
    imgTag.src = photos[count];
  }else { 
    imgTag.src = photos[count];
  }
}

function prev(){
  count--;

  if(count <0 ){
    count=photos.length - 1;
    imgTag.src = photos[count];
  }else {
    imgTag.src = photos[count];
  }
}
/*
function addStyle(){
  var myVar = document.querySelector("#paraId");
  myVar.classList.add("para-style");
}
function removeStyle(){
  var myVar = document.querySelector("#paraId");
  myVar.classList.remove("para-style");
}

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout",function(){
myVar.classList.remove("my-style");
});

for (var i = 0; i<3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
  var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";
  })
}
document.getElementById("playVid").onclick = function (){
  document.getElementById("video").play();
}
document.getElementById("stopVid").onclick = function (){
  document.getElementById("video").pause();
}
var x = document.getElementById("myAudio");

function playAudio(){
  x.play();
}
function pauseAudio(){
  x.pause();
}

for (var i = 0; i<3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    playAnimation(text);

  });
}

document.addEventListener("keypress",function(event){
  var text = event.key;
  audioPlay(text);
  playAnimation(text);
})
function audioPlay (text){
  switch (text) {
    case "a":
    var audio = new Audio('sounds/a.mp3');
    audio.play();
      break;
      case "b":
      var audio = new Audio('sounds/b.mp3');
      audio.play();
        break;
        case "c":
        var audio = new Audio('sounds/c.mp3');
        audio.play();

  }
}
function playAnimation(text){
  var selectedButton = document.querySelector("."+text);
  selectedButton.classList.add("anim");

  setTimeout(function(){
selectedButton.classList.remove("anim");
},2000);
}

var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
  var text  = event.key;
  count++;
  document.querySelector("p").innerHTML = "You have pressed "+count;
});


const add = (x,y)=>{
  let sum=x+y;
  document.write(sum);
}
add(20,50);

var numbers = [10,20,30,40];
numbers.forEach(function(x,index,arr) {
arr[index] = x+5;
});
document.write(numbers);

var numbers = [10,20,5,6,7, 30,40,50];
var newNumbers = numbers.filter (function(x){
  return x>10;
})
document.write(newNumbers);
try{
alert("hi everyone");
alert(x);
alert("by everyone");
}catch(error){
console.log(error);
}finally{
  alert("by everyone");
}

document.querySelector("#checkButton").addEventListener("click",function(){
var num=  document.querySelector("#numText").value;
try{
if(num<5){
  throw "number is too low"
}else if(num>10){
throw "number is too high"
}
}catch(err){
  console.log(err);
}
});

function calculate(process){
with(document.frm)
  switch (process) {
    case 1:
    showresult.value = Math.abs(getvalue.value);
      break;
    case 2:
    showresult.value = Math.round(getvalue.value);
      break;
      case 3:
    showresult.value = Math.sin(convDegree(getvalue.value));
      break;
      case 4:
    showresult.value = Math.cos(convDegree(getvalue.value));
      break;
      case 5:
      showresult.value = Math.tan(convDegree(getvalue.value));
      break;
      case 6:
      showresult.value = Math.log(getvalue.value);
      break;
      case 7:
      showresult.value = Math.floor(getvalue.value);
      break;
      case 8:
      showresult.value = Math.ceil(getvalue.value);
      break;
      case 9:
      showresult.value = Math.sqrt(getvalue.value);
      break;
      case 10:
      showresult.value = Math.random();
      break;
      case 11:
      alert(Math.max(getvalue.value, prompt('Enter number', '0'))+' is greater the number');
      break;
      case 12:
      alert(Math.min(getvalue.value, prompt('Enter number', '0'))+' is smaller the number');
      break;
      case 13:
      showresult.value = Math.E;
      break;
      case 14:
      showresult.value = Math.PI;
      break;
  }
}
function convDegree(x){
  return x*22/7/180;
}

function clock(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
}
setInterval (clock, 1000);
document.write("<br>");
document.write(new Date());
var element = document.getElementById("myimage");
var duration = 1000;
var hidtime = 1000;
var showtime = 1000;
function setOpacity (value){
element.style.opacity = value
}
function fadeOut(){
for (i=0; i<1; i+=0.01){
  setTimeout("setOpacity("+(i-1)+")", i*duration);
}
setTimeout ("fadeIn()",(duration+hidtime));
}
function fadeIn(){
for (i=0; i<1; i+=0.01){
  setTimeout("setOpacity("+i+")", i*duration);
}
setTimeout ("fadeOut()",(duration+showtime));
}

var timeout;
function timeoutTrigger(){
  document.getElementById("show").innerHTML = "The timeout has been triggered ..... after 3 seconds";
}
function timeInit(){
  timeout = setTimeout("timeoutTrigger()", 3000);
  document.getElementById("show").innerHTML = "The timeout has been started...."
}
function timeClear(){
  clearTimeout(timeout)
  document.getElementById("show").innerHTML = "The timeout has been stop";
}

var = myVar;
function myFunction(){
  myVar = setTimeout(function(){
    alert("Hello");},3000);
}
function myStopFunction(){
  clearTimeout(myVar);
}

var d = new Date();
var t = d.toLocaleTimeString()
document.write(d.getFullYear()+"<br>");
document.write(d.getMonth()+"<br>");
document.write(t+"<br>");
document.write(d.getHours()+"<br>");
document.write(d.getSeconds()+"<br>");
document.write(d.getMilliSeconds()+"<br>");
document.write(d.getTime());

function myReg(){
  txt = document.getElementById("str").innerHTML;
  document.getElementById("show").innerHTML = /r/i.exec(txt);
}

function getNumber(){
  var getString = document.getElementById("getvalue").value;
  var result = getString.match(/\d+/g);
  for (var i=0; i<result.length; i++){
document.getElementById("showvalue").value += result[i]+"\n";
  }
}

function validateEmail(){
  var getEmail = document.getElementById("getvalue");
  var email = getEmail.value;
  var emailRegEx = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
  getEmail.style.color = "white";
  if(emailRegEx.test(email)){
    getEmail.style.backgroundColor="green";
  }else{
    getEmail.style.backgroundColor="red";
  }
}

function testResult(form){
  var myVar = form.inputbox.value;
  if(myVar==""){
alert("please write something---");
  }else{
alert("you written-----"+myVar);
  }
}

function docCal(form, pfield){
if(pfield=="result"){
  if(form.chbox.checked){
    form.t1.value=math.sqrt(form.result.value);
    }else{
    form.t1.value=form.result.value/2;
  }
    }else{
        if(form.chbox.checked){
            form.result.value=form.t1.value*form.t1.value;
            }else{
              form.result.value=form.t1.value*2;
            }
          }
  }
function testCode(){
  document.write("you selected: "+selectedCode());
}
function selectedCode(){
  for(i=0: i<=3; i++){
    var getChecked = document.myform.rdbox[i];
    if(getchecked.checked){
      return getChecked.value;
    }
  }
}
*/
/*function validateForm(){
  var name    = document.myform.name.value;
  var email   = document.myform.email.value;
  var telephone = document.myform.phone.value;
  var checkbox = document.myform.ckbox.value;
  var subject = document.myform.subject.value;
  var comment = document.myform.comment.value;
  if(name==""){
    document.getElementById("state").innerHTML = "please enter name..";
    return false;
  }
}
*/
