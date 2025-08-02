import React from "react";
import Card from "./Card";
import staffList from "./staffList";

const TutorialList = () => {
  const tutorials = staffList.slice(3);

  return (
    <>
      <div className="section-title">Featured Tutorials</div>
      <div className="row">
        {tutorials.map((staff) => (
          <Card
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            position={staff.position}
            type="tutorial"
          />
        ))}
      </div>
      <button className="section-button">See all tutorials</button>
    </>
  );
};

export default TutorialList;
