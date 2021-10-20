const input = document.querySelectorAll(".angleInput")
const triangleBtn = document.querySelector("#isTriangleBtn")

const outputDiv = document.querySelector("#output")



function sumOfAngle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return (sum)
}


function isTriangle() {
    if(input[0].value <0 || input[1].value <0 || input[2].value <0 ){
       outputDiv.innerText = " Value Of the Angle Cannot be Negative "
    }else{
    const sum = sumOfAngle(
      Number(input[0].value),
      Number(input[1].value),
      Number(input[2].value)
    );
    if (sum === 180) {
      console.log("Yay, the angles form a triangle!");
      outputDiv.innerText = "Yay, the angles form a triangle!";
    } else {
      console.log("Oh Oh! The angle doesn't form a triangle");
      outputDiv.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
  }
  }


triangleBtn.addEventListener("click", isTriangle)