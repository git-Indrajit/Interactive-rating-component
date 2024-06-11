//DOM Variables

//submit Btn

let submitBtn = document.getElementById('submit-btn');

//Rating Component
let ratingComponent = document.getElementById('rating-component');

//thankyou container
let thankyouContainer = document.getElementById('thankyou-container');

// console.log(submitBtn);
// console.log(ratingComponent);
// console.log(thankyouContainer);

//Rating Button
let ratingBtns =document.querySelectorAll('.rating-btn');

//dynamic-number

let ratingScore =document.querySelector('.dynamic-number')


//Default Score

let defaultScore = 0;

//Event Listener


// submit Btn Event Listener
submitBtn.addEventListener('click', submitScore);

// rating btn Event Listener
ratingBtns.forEach((btn)=>{
    btn.addEventListener('click',ratingBtnClicked);
})

//functions

function submitScore(e){
    e.preventDefault();
    ratingComponent.style.display ="none";

    thankyouContainer.style.display ="block";

    ratingScore.textContent =defaultScore;
}

function ratingBtnClicked(e){
    if(e.target.classList.contains("rating-btn")){
        e.target.classList.toggle("active");
    }
    defaultScore =e.target.textContent;
}
