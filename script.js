const playerImage = document.getElementById("player-img") 
const computerImage = document.getElementById("computer-img") 
const message = document.getElementById("msg")
const endMessage = document.getElementById("end-msg")
const rockMenuImage = document.getElementById("rock-img") 
const paperMenuImage = document.getElementById("paper-img") 
const scissorsMenuImage = document.getElementById("scissors-img")
const parentElement = document.getElementById("menu")
const choice = [rockMenuImage, paperMenuImage, scissorsMenuImage]

parentElement.addEventListener("click", function () {
    let receiver = event.target
    if (receiver.tagName === "IMG") {
        playerImage.src = receiver.src
    }

    const pcchoice = choice[Math.floor(Math.random() * 3)]
    computerImage.src = pcchoice.src

    playGame()
})


function playGame() {
    if (playerImage.src === computerImage.src) {
        message.textContent = "Draw"
    } else if (playerImage.src.includes("rock") && computerImage.src.includes("paper") ||
        playerImage.src.includes("paper") && computerImage.src.includes("scissors") ||
        playerImage.src.includes("scissors") && computerImage.src.includes("rock")) {
        message.textContent = "Computer Win"
    } else {
        message.textContent = "Player Win"
    }

}


