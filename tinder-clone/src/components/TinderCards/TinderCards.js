import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
