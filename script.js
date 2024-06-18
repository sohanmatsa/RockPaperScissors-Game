const playerImage = document.getElementById("player-img")
const computerImage = document.getElementById("computer-img")
const message = document.getElementById("msg")
const endMessage = document.getElementById("end-msg")
const rockMenuImage = document.getElementById("rock-img")
const paperMenuImage = document.getElementById("paper-img")
const scissorsMenuImage = document.getElementById("scissors-img")
const parentElement = document.getElementById("menu")
const choice = [rockMenuImage, paperMenuImage, scissorsMenuImage]

parentElement.addEventListener("click", function (image) {
    playerImage.src = "images/rock.png";
    computerImage.src = "images/rock.png";
    playerImage?.classList.add("leftshake-animation")
    computerImage?.classList.add("rightshake-animation")
    message.textContent = "Wait..."

    setTimeout(function () {
        playerImage?.classList.remove("leftshake-animation")
        computerImage?.classList.remove("rightshake-animation")

        const playerChoice = image.target;
        playerImage.src = playerChoice.src;

        const computerChoice = choice[Math.floor(Math.random() * 3)];
        computerImage.src = computerChoice.src;

        playGame()
        
    }, 2000)
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


