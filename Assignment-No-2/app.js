// -------------------------------CHANGING CASE QUESTION Start----------------------------

// Changing case

// Question == 1

// var a=prompt("Enter in  Small Letter");

// var b = a.toUpperCase();

// console.log(b)

// Question == 2

// var a=prompt("Enter in  Capital  Letter");

// var b = a.toLowerCase();

// console.log(b)

// Strings: measuring length and extracting parts

// Question == 1

// var a =prompt("Enter your Fav Mobile Name")

// var b = a.length;

// console.log(b)

// Question == 2

// var a =prompt("Enter your  Name")

// var b = a.charAt(a.length - 1);

// console.log(b)      

// Strings: finding segments

// Question == 1

// var a ="Pakistani"

// var b=a.indexOf("n")

// console.log(b)

// Question == 2  number of occurrences


// var userstr = prompt("Enter the String")
// var userstr1 = prompt("Enter the String")

// var str="The quick brown fox jumps over The lazy dog"

// for ( i=0 ; str.length ; i++){

//     var find = str.slice( i + 3 )
//     if( find == "the"){
//         console.log("Exits")
//     }

// }

// var str="The quick brown fox jumps over the lazy dog";

// for ( var i =0 ; i < str.length ; i++ ){
//     var find = str.slice( i , i + 3 )

//     if( find ="the" ){
//         console.log(find)
//     }
// }

// question = 3 : finding a character at a location

// var word = "Pakistani";

// function Location(c){ 
// var b = word[c];
// console.log(b) 
// }
// Location(prompt("Enter the Index number to print the Character:"))


// Question =4 replacing characters

// Simple replacement 

// var text= "Hyderabad to  "
// console.log(text)
// var b = text.replace( "Hyder" , "Islam" )

// console.log(b)

// For global replacement 


// var a ="Ali live in Ali And karachi live in Ali"

// var b = a.replace( /Ali/g , "Samra")

// console.log(b)

// Question  = 4  Golbal Replacement and occurences

// var message = "Ali and Sami are best friends. They play cricket and  football together.";

// console.log(message)

// var changeMessage = message.replace(/and/g , "&")
// console.log(changeMessage)


// With function We make thsis code  look like this 

// var message = "Ali and Sami are best friends. They play cricket and  football together.";
// function replaceName( b ){
// var changeMessage = message.replace(  b , "&" ) 
// console.log(changeMessage)
// }
// replaceName("and");

// /-----------------------------/ Its not Working With Functions 

// Topic = Rounding numbers 

// Question =1 

// var a =+prompt("Ente the Postive integer:")
// console.log(a)


// part a  Example value (3.45216) Round of this 

// function normalRound(a){

//     console.log("This is value" , a )
//     // console.log(a)   
//     var b=Math.round(a)
//     console.log("This is round of value", b)
// }
// normalRound(+prompt("Ente the point value to get  Normal Round Of Value :"))

// // part c. floor value of the numbe
// // Floor is use to down the value like we put 3.9 it gives 3 put 3.1 gives 3
// function floornormalRound(a){ 

//     console.log("This is value" , a )
//     // console.log(a)   
//     var b=Math.floor(a)
//     console.log("This is Floor value", b)
// }
// floornormalRound(+prompt("Ente the point value to get floor Round Of Value :"))


// // part d. Ceil value of the number

// function celinormalRound(a){

//     console.log("This is value" , a )
//     // console.log(a)   
//     var b=Math.ceil(a)
//     console.log("This is Celi value", b)
// }
// celinormalRound(+prompt("Ente the point value to get ceil Round Of Value :"))


// Question = 2

// var a =+prompt("Ente the negative integer:")
// console.log(a)


// // part a  Example value (-2,6478) Round of this 

// function normalRound(a){

//     console.log("This is User Enter value" , a )
//     // console.log(a)   
//     var b=Math.round(a)
//     console.log("This is round of value", b)
// }
// normalRound(+prompt("Ente the point value to get  Normal Round Of Value :"))

// part c. floor value of the numbe

// part d. Ceil value of the number

// function celinormalRound(a){

//     console.log("This is User Enter value" , a )
//     // console.log(a)   
//     var b=Math.ceil(a)
//     console.log("This is Celi value", b)
// }
// celinormalRound(+prompt("Ente the point value to get ceil Round Of Value :"))

// Question =6 Generating random numbers

// part =1

// function generatingRamdonnNumber(){
// var number=Math.random();
// var dicsNumber= ( number * 6 ) + 1;
// var roundOff=Math.floor(dicsNumber)
// return roundOff;
// }
// var b =generatingRamdonnNumber();
// console.log(b)   


// part = 2 Display Head and tail Using MAth.Random Number

// function TAIL(){
// var a=Math.random();
// var b=( a * 1 ) + 1;
// var c=Math.round(b);

// if( c == 1 ){
//     console.log("Tail")
// }
// else{
//         console.log("Head")
//     }
// }
// TAIL();    

// Part = 3 secret number 

// function secretNumber(userInput){ 
//     var a =Math.random();
//     var b =(a * 10 ) +1;
//     var c= Math.floor(b)
//     if( userInput == c ){
//         console.log("Hurry! You win the")
//     console.log("The Secret Number is " , c )
// } else{
//     console.log("The Secret Number is " , c )
//     console.log("You lose!")
// }
// }
// secretNumber(+prompt("Guess The Secret Number 1 to 10 :"));


// Converting strings to integers and decimals

// part = 1 

//````````````````````````````````````-not take input in kgs 

// var weight =prompt("Enter your Weigth")
// console.log(weight)
// var b=parseFloat(weight)
// console.log( "Your Weight is :" ,b)

// Converting strings to numbers, numbers to strings
// part =1

// var userInput=prompt("Enter the Value");
// // console.log("The User Value is " , userInput , "this is String Value"  )

// var b=typeof(userInput);
// console.log( "User input is :", b)

// var c= parseInt(userInput)
// var d=typeof(c)
// console.log( "String to number " , d)

// part = 2 

// var num= 35.36;
// console.log(num)
// var b=num.toString();
// console.log(b)

// Controlling the length of decimals

// var percentage = 30 / 45 * 100; 
// var pointTwo =  percentage.toFixed(2);
// console.log(pointTwo)

// -------------------------------CHANGING CASE QUESTION END---------------------------- 

// var a=new Date();
// console.log(a)
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getMonth())
// console.log(a.getFullYear())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getTime())

// Chapter 31 sy 34 Questions Solved /
/////////////---------------Date Methods-----------//////////////////

// Question NO =1 and 2

// var New= new Date();
// console.log(New)

// // var b= New.toLocaleString();
// // console.log(b);
// var c =New.getMonth();
// // alert(New.getMonth())

// const NameMonth=["January","February","March","April","May","June","July",
// "August","September","October","November","December"];

// var currentMonth= NameMonth[c]
// alert("Current Mointh is : " + currentMonth)

// Question NO = 3  

// var a =new Date();
// var b=a.getDay();

// const c=["Sun","Mon","Tue", "Wed" , "Thu","Sat"]

// var Currentday=c[b]
// alert("Today is : " + Currentday )


// Question NO = 4

// var a =new Date();
// var b=a.getDay();

// const c=["Sun","Mon","Tue", "Wed" , "Thu","Sat"]

// var Currentday=c[b]
// // alert("Today is : " + Currentday )

// if(Currentday=="Sun" || Currentday=="Sat" ){
//     alert("Its Fun Day")
// }else{
//     alert("Its Working DAY")
// }

// Question NO = 5 

// var a=new Date();

// var b=a.getDate();

// console.log(b)

// if( b <= 15 ){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last Days OF The month! ")
// }

// Question NO = 6

// var a=new Date();
// console.log(a);

// var b=a.getMilliseconds();
// console.log(b)
// var d=new Date("1-1-1970")
// var c= d.getMonth();

// console.log(c)

// // var E = b + c;

// // console.log("Total milisecond Since Jan,1.1970: " , E )

// Question NO = 7
// var a=new Date();

// var b=a.getHours();

// console.log(b)
// if ( b<= 12 ){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }



// Question NO = 8

// var a =new Date();
// a.setDate(31)
// a.setMonth(10)
// a.setHours(00)
// a.setMinutes(00)
// a.setSeconds(00)
// a.setFullYear(2020)
// console.log("Later Date:"  , a)

// // Question NO = 9

// var pastDate=new Date("05-18-2015");
// // pastDate.setDate()
// pastDate.setMonth(5)
// // console.log(pastDate.getDate())
// console.log("Suppose This is The first Ramandan date " , pastDate)

// var a=new Date();
// console.log(a);



// Chanter 35 to 38 

// Question 1

// function currentDate(){
//     var a=new Date();
//     console.log(a)
// }
// currentDate();


// Question 2

// function welcome(a,b){

//     // var a=prompt("Enter First Name");
//     // var b=prompt("Enter Second Name");   
//     console.log("Welcome" , a , b );
// }

// welcome(prompt("Enter First Name") ,prompt("Enter Second Name") );

// Question 3

// function add(){
//     var a=+prompt("Enter First Number")
//     var b=+prompt("Enter Second Number")
//     var c= a + b;
//     return c;
// }
// var d = add();
// console.log(d)

// Question  4 Done in Class
// Question 5 

// function Saquare(){
//     var a=+prompt("Enter number");
//     var b= a*a;
//     return b;
// }
//   var c=Saquare();
//   console.log(c)

// Question 6

// function abc(num1, num2, operater) {
//     var c;
//     switch (operater) {
//         case ("+"):
//             c = num1 + num2;
//             alert("The Result is" + c);
//             break;
//             case ("-"):
//             c= num1 - num2;
//             alert("The Result is" + c )
//             break;
//             case ("x"):
//             c= num1 * num2;
//             alert("The Result is" + c )
//             break;
//             case ("/"):
//             c= num1 / num2;
//             alert("The Result is" + c )
//             break;
//             default:
//     }
// }
// abc(+prompt("Enter 1st Number"), +prompt("Enter 2st Number"), prompt("Enter Operation + ,-,x,/"))


// Question 6 Factorial 

// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1)
//         return 1;
//     while (num > 1) {
//         num--;
//         result *= num;
//     }
//     return result;
// }
// var userInput = prompt("Factorial of which number you want?")
// document.write("<h1>" + "The Factorial of " + userInput + " is " + factorialize(userInput) + "</h1>");

// var number=+prompt("Enter the number For Factorial !")
// var num1=1;
// for( var i = 1; i <= number ; i++ ){

//     num1 = num1 * i;
//     // console.log(i)
// }
// console.log("The Number is :" , num1 )

// // function abc(number){
// //     var mynum = 1 ;
// //     for ( var i = 1; i <= number; i++ ){
// //         mynum = mynum *1;
// //     }
// //     console.log("the factorial of " , number ,"is " , mynum  )
// // }

// // abc(+prompt("Enter the number you Want Factorial "));


// Question no 7 

// function  c(a,b){

//     for( var i = a ; i<= b ; i++){
//         console.log(i)
//     }
// } 
// c(prompt("Enter the first number"), prompt("Enter the sec number") );


// Question no 8
// Question no 9

// function angle(width , height){

//     var c = width * height;
//     console.log("Area OF Reactangle is : " , c ) 
// }
// angle(+prompt("Enter Width Of Reactangle " ),+prompt("Enter height Of Reactangle " ))


// Question no 10

// var Name=prompt("Enter the name To Cheak its Palindrome or not !")
// var len = Name.length;
// // console.log(len);

// Question no 11 

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// function uppercase(str){
//     var oldarray = str.split('  '); 
//     var newarray = []; 
//     for( var a = 0 ; a < oldarray.length ; a++ ){
//         newarray.push(oldarray[a].charAt(0).toUpperCase()+ oldarray[ a ].slice(1));
//     }
//     return newarray.join('  ');
// }
// console.log(uppercase("the quick brown fox"));

// var word="the quick brown fox";
// var a = word.toUpperCase();
// console.log(a);

// Question no 12

// var count = 0;
// function Reppetion(a, b) {
    
    //     for (i = 0; i < a.length; i++) {
        //         if (a.charAt(i) == b) {
//             count++;
//         }
//     }
//     console.log(count)
// }

// Reppetion(prompt(" Enter the Srting! "), prompt("Enter the letter Cheak repitions"))


// Question no last

// var radius=+prompt("number")



// console.log("Circumference Of cirlce is: " ,formula)


// function calcCircumference(radius){

//     var formula=(2 * 3.142 * radius )
//     var a=formula.toFixed(2);
//     console.log("Circumference Of circle ", a)
// }
// calcCircumference(+prompt("Enter the radius of circle:"))


// function calcCircumference(radius){

//     var formula=( 3.142 * radius*radius )
//     var a=formula.toFixed(2);
//     console.log("Area Of circle ", a)
// }
// calcCircumference(+prompt("Enter the radius of circle:"))





















