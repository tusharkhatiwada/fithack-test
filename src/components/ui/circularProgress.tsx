import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  return (
    <>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        background
        styles={{
          path: { stroke: color },
          text: { fill: "#000000", fontSize: "20px", fontWeight: "medium" },
          background: { fill: color + "40" },
        }}
      />
    </>
  );
}
