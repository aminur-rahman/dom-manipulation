/* Task 1 */
var heading = document.getElementById("heading");
console.log(heading.innerText);


/* Task 2 using plain JavaScript */
function addText(){
    var task2div =document.getElementById("task2a");
    var paragraph =document.createElement('p');
    paragraph.innerText="Hello world";
    task2div.appendChild(paragraph);
}

/*Task 2 b
function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0];
    if(event.taeget.innerText=="Red"){
        body.style.backgroundColor='red';
    }
    if(event.taeget.innerText=="Green"){
        body.style.backgroundColor='green';
    }
}
/* Task 4 using jQuery */
