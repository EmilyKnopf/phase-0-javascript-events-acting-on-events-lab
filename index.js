// Your code here
// grabs the dodger from the document 
// const dodger = document.getElementById("dodger");
// //
// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

//  function moveDodgerRight() {
//      const rightNumbers = dodger.style.left.replace("px", "")
//      const left = parseInt(rightNumbers, 10);

//      if (left > 0){
//      dodger.style.left = `${left + 1}px`
//      }
// }

// document.addEventListener("kedown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight()
//     }
// })


// const dodger = document.getElementById("dodger")

// // change color 
// dodger.style.backgroundColor = "#ff69b4"

// // move dodger up 

// dodger.style.bottom = "100px"

// // return to where it started

// dodger.style.bottom = "0px"

// // change left attribute 

// dodger.style.left = "0px"

// defining perameter (event) for the callback

document.addEventListener("keydown", function(event){
  console.log(event)
})
// move dodger to the left when arrow key is pressed

document.addEventListener("keydown", function (event){
  if (event.key === "ArrowLeft"){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left - 1}px`
  }
})

// update element position conditionally 

const dodger = document.getElementById("dodger")

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(leftNumbers, 10)

  if (left > 0) {
   dodger.style.left = `${left - 1}px`
  } 
 }
//  event listener 
document.addEventListener("keydown", function (e){
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})
// move dodger to the right 

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(rightNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1 }px`
  }
}

document.addEventListener("keydown", function (e){
  if (e.key === "ArrowRight"){
    moveDodgerRight()
  }
})