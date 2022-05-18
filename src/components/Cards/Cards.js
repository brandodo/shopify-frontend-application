import { Card } from "./Card";
import "./Cards.scss";

export const Cards = ({ data }) => {
  const cards = data
    .sort((a, b) => {
      return b.created - a.created;
    })
    .map((card) => {
      return <Card key={card.id} data={card} />;
    });

  return <section className="cards">{cards}</section>;
};
