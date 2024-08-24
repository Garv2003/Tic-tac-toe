import { GridProps } from "../types";
import Box from "./Box";

const Grid = ({ value, play, winBox }: GridProps) => {
  return (
    <>
      <div className="block">
        <Box index={0} value={value} play={play} winBox={winBox} />
        <Box index={1} value={value} play={play} winBox={winBox} />
        <Box index={2} value={value} play={play} winBox={winBox} />
      </div>
      <div className="block">
        <Box index={3} value={value} play={play} winBox={winBox} />
        <Box index={4} value={value} play={play} winBox={winBox} />
        <Box index={5} value={value} play={play} winBox={winBox} />
      </div>
      <div className="block">
        <Box index={6} value={value} play={play} winBox={winBox} />
        <Box index={7} value={value} play={play} winBox={winBox} />
        <Box index={8} value={value} play={play} winBox={winBox} />
      </div>
    </>
  );
};

export default Grid;
