var date = document.getElementById('currentDay')
const deck = document.querySelector(".container")
var today = moment().format("dddd, MMMM Do YYYY")
var hour = moment().format("ha")

var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

date.innerText = `${today}`
var j
for (var i = 0; i < workHours.length; i++){
    if(i<=3){
    
    deck.insertAdjacentHTML('beforeend', `
    <div class="task"> ${workHours[i]} AM
    <input type="text" class="textb"  id="color" placeholder="Add a task"/>
    <i class="fas fa-save"></i>
    <i class="fas fa-trash-alt"></i>    
    </div>
    `)} else {deck.insertAdjacentHTML('beforeend', `
    <div class="task"> ${workHours[i]} PM
    <input type="text" class="textb" id="color" placeholder="Add a task"/>
    <i class="fas fa-save"></i>
    <i class="fas fa-trash-alt"></i>     
    </div>
    `)}
} 
    
    for (var i = 0; i < workHours.length; i++){
        if(i < hour){
            
            i.style.backgroundColor = "grey"

        } else if (i = hour){
            $(".textb").css('backgroundColor', 'red');

        } else {
            $(".textb").css('backgroundColor', 'green');
        }
    }
