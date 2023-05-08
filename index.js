console.log("Running Scripts")

fetch("http://localhost:3000/cookies")
.then(r => r.json())
.then(cookie => cardBuilder(cookie))

//functions
const cardBuilder = (cookie) => {
  console.log(cookie)
  cookie.forEach(cardInfo => {
      const cardContainer = document.getElementById("cookie-container")
    const cookieCard = document.createElement("div")
    const img = document.createElement("img")
    img.src = cardInfo.image
    const flavor = document.createElement("h3")
    flavor.innerText = cardInfo.flavor
    const p = document.createElement("p")
    p.textContent = cardInfo.description
    const selectArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const userRating = document.createElement("select");
    for(let i = 0; i < 10; i++) {
        let option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        userRating.appendChild(option);
    }
    userRating.value = cardInfo.rating;


    cookieCard.appendChild(flavor)
    cookieCard.appendChild(img)
    cookieCard.appendChild(p)
    cookieCard.appendChild(userRating)
    cardContainer.appendChild(cookieCard)
  })
}
//place cookies in the HTML using cardBuilder
//submit form, add into cardBuilder
//update rating
//favorite cookie
//save to local storage
//load from local storage