// answer 1
let a, b, c, d, e;
let avg = 0;
// sum

function code() {
    a = parseInt(document.getElementById("t1").value);
    b = parseInt(document.getElementById("t2").value);
    c = parseInt(document.getElementById("t3").value);
    d = parseInt(document.getElementById("t4").value);
    e = a + b + c + d;
    document.write(`the total number of sum is:${e} <br>`);

    // average number

    avg = e / 4;
    document.write(`the average is: ${avg} <br>`);

    // largest number
    if (a > b && a > c && a > d) {
        document.write(`the largest number is: ${a} <br>`);
    } else if (b > a && b > c && b > d) {
        document.write(`the largest number is:${b} <br>`);
    } else if (c > a && c > b && c > d) {
        document.write(`the lagest number is:${c}  <br>`);
    } else {
        document.write(`the largest number is ${d} <br>`);
    }

    // smallest number
    if (a < b && a < c && a < d) {
        document.write(`the smallest number is: ${a} <br>`);
    } else if (b < a && b < c && b < d) {
        document.write(`the smallest number is:${b} <br>`);
    } else if (c < a && c < b && c < d) {
        document.write(`the smallest number is:${c} <br> `);
    } else {
        document.write(`the smallest number is ${d} <br>`);
    }

    document.write(`<hr>`);
}

// question 2

let x, i, k = 0;
let reverse = 0;
let originalNum = x
let reverseNum=0;
function checknum() {
    x = parseInt(document.getElementById("number").value);
    // even number
    if ((x % 2) === 0) {
        document.write(`even number: yes <br> <br>`);
    } else {
        document.write(`even number: no <br> <br>`)
    }
    // odd number
    if ((x % 2) === 0) {
        document.write(`odd number: no <br> <br>`)
    } else {
        document.write(`odd number: yes <br> <br>`)
    }

    // prime number
    for (i = 1; i <= x; i++) {
        if (x % i == 0) {
            k++;
        }
        if (k > 2) {
            break;
        }
    }

    if (k == 2) {
        document.write(`prime number: yes <br> <br>`)

    } else {
        document.write(`prime number: no <br> <br>`)
    }

    // reverse number
    while (x != 0) {
        reverse = (reverse * 10) + (x % 10);
        x = parseInt(x / 10);

    }
    document.write(`reverse number:${reverse} <br> <br>`)

    // palindrone number
    while(x!=0){
        reverseNum=(reverseNum*10)+(x %10);
        x=parseInt(x/10);
    }    

    if( originalNum == reverseNum){
        document.write(`palindrome number: yes`)
        
    }else{
        document.write(`palindrome number : no`)
    }
}



//changing 5 images under one img tag

let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = "images/1.jpg";
});


btn2.addEventListener('click', () => {
    img.src = "images/2.jpg";
});


btn3.addEventListener('click', () => {
    img.src = "images/3.jpg";
});

btn4.addEventListener('click', () => {
    img.src = "images/4.jpg";
});

btn5.addEventListener('click', () => {
    img.src = "images/5.jpg";
});



// blinking effect
setInterval(function () {
    let text = document.getElementById("text");

    text.innerHTML = "Hello my name is vishal";
    text.style.color = "red";

    text.style.display = (text.style.display == 'none' ? '' : 'none');


}, 1000);

