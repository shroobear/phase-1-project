console.log("Running Scripts")

fetch("http://localhost:3000/cookies")
.then(r => r.json())
.then(cookie => cardBuilder(cookie))

//functions
//Dom Manipulation
const cardBuilder = (dataArray) => {
  console.log(dataArray)
  dataArray.forEach(cardInfo => {
    const img = document.createElement("img")
    img.src = cardInfo.image
    const cardContainer = document.getElementById("cookie-container")

    cardContainer.appendChild(img)
  })
}
//place cookies in the HTML using cardBuilder
//submit form, add into cardBuilder
//update rating
//favorite cookie
//save to local storage
//load from local storage