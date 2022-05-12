import { Sketch } from "./Sketch";
import "./Sketches.scss";
export const Sketches = ({ data }) => {
  const sketchCards = data
    .sort((a, b) => {
      return b.created - a.created;
    })
    .map((sketch) => {
      return <Sketch key={sketch.id} data={sketch} />;
    });

  return <section className="sketches">{sketchCards}</section>;
};
