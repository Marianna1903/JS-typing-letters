let div = document.getElementsByClassName("div_textes")[0];
let p = document.getElementsByClassName("p_change")[0];
let body = document.getElementsByTagName("body")[0];

function printLetterByLetter(message,speed){
    var i = 0;
    var interval = setInterval(function(){
        p.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
            p.innerHTML = "";
        }
    },speed);
}

printLetterByLetter("happy",500);
setTimeout(function(){
	printLetterByLetter("sad",500);
	},3000)
setTimeout(function(){
	printLetterByLetter("angry",500);
	},5000)
setTimeout(function(){
	printLetterByLetter("crazy",500);
	},8000)

setInterval(function(){
	printLetterByLetter("happy",500);
setTimeout(function(){
	printLetterByLetter("sad",500);
	},3000)
setTimeout(function(){
	printLetterByLetter("angry",500);
	},5000)
setTimeout(function(){
	printLetterByLetter("crazy",500);
	},8000)
},11000)



