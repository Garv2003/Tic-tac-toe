import { useState } from "react";

const App = () => {
  const [playerTurn, setPlayerTurn] = useState("x");
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const span = document.querySelectorAll("span");
  const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const blur = document.querySelector(".blur");
  const [winBox, setWinBox] = useState([]);

  function checkWinner(a, b, c) {
    a--;
    b--;
    c--;
    if (
      value[a] === value[b] &&
      value[b] === value[c] &&
      value[a] === value[c] &&
      (value[a] === "x" || value[a] === "o") &&
      !isGameOver
    ) {
      setWinBox([a, b, c]);
      span[a].parentNode.className += " activeBox";
      span[b].parentNode.className += " activeBox";
      span[c].parentNode.className += " activeBox";
      gameOver();
    }
    return;
  }

  function play(y) {
    if (!isGameOver && value[y] === "") {
      value[y] = playerTurn;
      setPlayerTurn((prev) => (prev === "x" ? "o" : "x"));
      setMoves((prev) => prev + 1);
    }

    checkWinner(1, 2, 3);
    checkWinner(4, 5, 6);
    checkWinner(7, 8, 9);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(3, 6, 9);
    checkWinner(1, 5, 9);
    checkWinner(3, 5, 7);

    if (moves === 8 && !isGameOver) {
      gameOver();
    }
  }

  function playAgain() {
    const boxes = document.querySelectorAll(".activeBox");
    boxes.forEach((box) => {
      box.classList.remove("activeBox");
    });
    resetGame();
    setIsGameOver(false);
  }

  function resetGame() {
    setValue(["", "", "", "", "", "", "", "", ""]);
    setPlayerTurn("x");
    setMoves(0);
    blur.style.display = "none";
  }

  function gameOver() {
    setIsGameOver(true);
    blur.style.display = "block";
    showGameOverAlert();
  }

  const showGameOverAlert = () => {
    const gameOverAlertElement = (
      <div className="alert">
        <b>GAME OVER</b>
        {moves === 9 && winBox.length === 0 ? (
          <b>DRAW</b>
        ) : (
          <b>PLAYER {playerTurn === "x" ? "O" : "X"} WON</b>
        )}
        <button onClick={playAgain}>Play Again</button>
      </div>
    );
    return isGameOver ? gameOverAlertElement : <></>;
  };

  return (
    <>
      {showGameOverAlert()}
      <div id="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>XO Game</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "20px",
              gap: "20px",
            }}
          >
            <h4>Player {playerTurn.toUpperCase()} Turn</h4>
            <button
              className="reset"
              onClick={() => {
                resetGame();
              }}
            >
              Reset Game
            </button>
          </div>
        </div>
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
      </div>
      <div className="blur"></div>
    </>
  );
};

export default App;
