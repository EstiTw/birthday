import React, { useState } from "react";
import data from "./data";

const List = ({ people }) => {
  return (
    <>
      {people.map(({ id, name, age, image }) => {
        return (
          <article key={id} className="person">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
