const playerImage = document.getElementById("player-img")
const computerImage = document.getElementById("computer-img")
const message = document.getElementById("msg")
const endMessage = document.getElementById("end-msg")
const rockMenuImage = document.getElementById("rock-img")
const paperMenuImage = document.getElementById("paper-img")
const scissorsMenuImage = document.getElementById("scissors-img")
const menu = document.getElementById("menu")
const choice = [rockMenuImage, paperMenuImage, scissorsMenuImage]
let playerPoints = 0
let computerPoints = 0
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")

rockMenuImage.addEventListener("click",gameChoice)
paperMenuImage.addEventListener("click",gameChoice)
scissorsMenuImage.addEventListener("click",gameChoice)

function gameChoice(image) {
    playerImage.src = "images/rock.png"
    computerImage.src = "images/rock.png"
    playerImage.classList.add("leftshake-animation")
    computerImage.classList.add("rightshake-animation")
    message.textContent = "Wait..."

    setTimeout(function () {
        playerImage.classList.remove("leftshake-animation")
        computerImage.classList.remove("rightshake-animation")

        const playerChoice = image.target
        playerImage.src = playerChoice.src

        const computerChoice = choice[Math.floor(Math.random() * 3)];
        computerImage.src = computerChoice.src

        playGame()
        
    }, 2000)
}


function playGame() {
    
    if (playerImage.src === computerImage.src) {
        message.textContent = "Draw"
    } else if (playerImage.src.includes("rock") && computerImage.src.includes("paper") ||
        playerImage.src.includes("paper") && computerImage.src.includes("scissors") ||
        playerImage.src.includes("scissors") && computerImage.src.includes("rock")) {
        message.textContent = "Computer Win 🤖"
        computerPoints++
    } else {
        message.textContent = "Player Win 😄"
        playerPoints++
    }

    playerScore.textContent = "Player : " + playerPoints
    computerScore.textContent = "Computer : " + computerPoints
    
    endGame()
}

function endGame() {
    if (playerPoints === 5 || computerPoints === 5){
        endMessage.hidden = false
        menu.style.display = "none"
    }
}


