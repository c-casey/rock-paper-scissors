function getComputerChoice() {
  let choice;

  switch (Math.floor(Math.random()*3) + 1) {
    case 1:
      choice = "rock";
      break;

    case 2:
      choice = "paper";
      break;

    default:
      choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = String(playerSelection).toLowerCase();
  let verdict;

  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        verdict = "You tie! Both of you chose rock.";
        break;
      case "paper":
        verdict = "You lose! Paper covers rock.";
        break;
      case "scissors":
        verdict = "You win! Rock smashes scissors.";
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        verdict = "You win! Paper covers rock.";
        break;
      case "paper":
        verdict = "You tie! Both of you chose paper.";
        break;
      case "scissors":
        verdict = "You lose! Scissors cut paper.";
    }
  } else if (playerSelection =="scissors") {
    switch (computerSelection) {
      case "rock":
        verdict = "You lose! Rock smashes scissors.";
        break;
      case "paper":
        verdict = "You win! Scissors cut paper.";
        break;
      case "scissors":
        verdict = "You tie! Both of you chose scissors.";
    }
  }
  return verdict;
}

function game() {
  let wins = 0;
  let losses = 0;

  const results = document.createElement("div");

  const div = document.createElement("div");
  div.textContent = "Wins: 0, Losses: 0";
  document.querySelector(".text-container").appendChild(div);

  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      verdict = playRound(e.srcElement.id.toString(), getComputerChoice());

      if (String(verdict).substring(4,5) == "w") wins++;
      else if (String(verdict).substring(4,5) == "l") losses++;

      div.textContent = `${verdict} Wins: ${wins}, Losses: ${losses}`;

      if (wins === 5) {
        results.textContent = "Congratulations, you've beaten the computer!";
        document.querySelector(".text-container").appendChild(results);
      } else if (losses === 5) {
        results.textContent = "Sorry, the computer beat you!";
        document.querySelector(".text-container").appendChild(results);
      };
    })
  }
}

game();
