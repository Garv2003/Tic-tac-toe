import Button from "./Button";
import type { GameOverAlertProps } from "../types";

const GameOverAlert = ({
  isGameOver,
  moves,
  winBox,
  playerTurn,
  playAgain,
}: GameOverAlertProps) => {
  const gameOverAlertElement = (
    <div className="alert">
      <b>GAME OVER</b>
      {moves === 9 && winBox.length === 0 ? (
        <b>DRAW</b>
      ) : (
        <b>PLAYER {playerTurn === "x" ? "O" : "X"} WON</b>
      )}
      <Button className="btn" onClick={playAgain} text="Play Again" />
    </div>
  );
  return isGameOver ? gameOverAlertElement : <></>;
};

export default GameOverAlert;
