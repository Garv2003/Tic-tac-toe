import { useState } from "react";

const App = () => {
  const [playerTurn, setPlayerTurn] = useState("x");
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [span, setSpan] = useState(document.getElementsByTagName("span"));
  const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  var restartButton;
  restartButton =
    '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

  function play(y) {
    if (!isGameOver && value[y] === "") {
      setValue((prev) => {
        const newVal = [...prev];
        newVal[y] = playerTurn;
        return newVal;
      });
      setPlayerTurn((prev) => (prev === "x" ? "o" : "x"));
      setMoves((prev) => prev + 1);
    }
    // if (y.dataset.player == "none" && isGameOver == false) {
    //   y.innerHTML = playerTurn;
    //   y.dataset.player = playerTurn;
    //   setMoves(moves + 1);
    //   if (playerTurn == "x") {
    //     setPlayerTurn("o");
    //   } else if (playerTurn == "o") {
    //     setPlayerTurn("x");
    //   }
    // }

    /* Win Types */

    // checkWinner(1, 2, 3);
    // checkWinner(4, 5, 6);
    // checkWinner(7, 8, 9);
    // checkWinner(1, 4, 7);
    // checkWinner(2, 5, 8);
    // checkWinner(3, 6, 9);
    // checkWinner(1, 5, 9);
    // checkWinner(3, 5, 7);

    console.log(moves);
    if (moves === 8 && !isGameOver) {
      draw();
    }
  }

  function checkWinner(a, b, c) {
    a--;
    b--;
    c--;
    if (
      span[a].dataset.player === span[b].dataset.player &&
      span[b].dataset.player === span[c].dataset.player &&
      span[a].dataset.player === span[c].dataset.player &&
      (span[a].dataset.player === "x" || span[a].dataset.player === "o") &&
      isGameOver == false
    ) {
      span[a].parentNode.className += " activeBox";
      span[b].parentNode.className += " activeBox";
      span[c].parentNode.className += " activeBox";
      gameOver(a);
    }
  }

  function playAgain() {
    document
      .getElementsByClassName("alert")[0]
      .parentNode.removeChild(document.getElementsByClassName("alert")[0]);
    resetGame();
    window.isGameOver = false;
    for (var k = 0; k < span.length; k++) {
      span[k].parentNode.className = span[k].parentNode.className.replace(
        "activeBox",
        ""
      );
    }
  }

  function resetGame() {
    for (let i = 0; i < span.length; i++) {
      span[i].dataset.player = "none";
      span[i].parentNode.className = span[i].parentNode.className.replace(
        "activeBox",
        ""
      );
      span[i].innerHTML = "&nbsp;";
    }
    setPlayerTurn("x");
    blurdiv.style.display = "none";
  }

  function gameOver(a) {
    var gameOverAlertElement =
      "<b>GAME OVER </b><br><br> Player " +
      span[a].dataset.player.toUpperCase() +
      " Win !!! <br><br>" +
      restartButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    setIsGameOver(true);
    blurdiv.style.display = "block";
    setMoves(0);
  }

  function draw() {
    var drawAlertElement = "<b>DRAW!!!</b><br><br>" + restartButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = drawAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    blurdiv.style.display = "block";
    window.isGameOver = true;
    setMoves(0);
  }

  const blurdiv = document.querySelector(".blurdiv");
  // const reset = document.querySelector(".reset");
  // reset.addEventListener("click", resetGame);

  return (
    <>
      <div id="container">
        <h1>XO Game</h1>
        <div className="block">
          <div id="box1" className="box top left">
            <span data-player="none" onClick={() => play(0)}>
              {value[0]}
            </span>
          </div>
          <div id="box2" className="box top">
            <span data-player="none" onClick={() => play(1)}>
              {value[1]}
            </span>
          </div>
          <div id="box3" className="box top right">
            <span data-player="none" onClick={() => play(2)}>
              {value[2]}
            </span>
          </div>
        </div>
        <div className="block">
          <div id="box4" className="box left">
            <span data-player="none" onClick={() => play(3)}>
              {value[3]}
            </span>
          </div>
          <div id="box5" className="box">
            <span data-player="none" onClick={() => play(4)}>
              {value[4]}
            </span>
          </div>
          <div id="box6" className="box right">
            <span data-player="none" onClick={() => play(5)}>
              {value[5]}
            </span>
          </div>
        </div>
        <div className="block">
          <div id="box7" className="box bottom left">
            <span data-player="none" onClick={() => play(6)}>
              {value[6]}
            </span>
          </div>
          <div id="box8" className="box bottom">
            <span data-player="none" onClick={() => play(7)}>
              {value[7]}
            </span>
          </div>
          <div id="box9" className="box bottom right">
            <span data-player="none" onClick={() => play(8)}>
              {value[8]}
            </span>
          </div>
        </div>
        <button className="reset">Reset Game</button>
      </div>
      <div className="blurdiv"></div>
    </>
  );
};

export default App;
