import React from "react";

export const Artists = () => {
  return (
    <div>
      
    </div>

  )
}

export default Artists;

const App = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.name} name={person.name} title={person.title} />
        );
      })}
    </div>
  );
};