import React from "react";
import Card from "./Card";
import staffList from "./staffList";

const ArticleList = () => {
  const articles = staffList.slice(0, 3);

  return (
    <>
      <div className="section-title">Featured Articles</div>
      <div className="row">
        {articles.map((staff) => (
          <Card
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            position={staff.position}
            type="article"
          />
        ))}
      </div>
      <button className="section-button">See all tutorials</button>
    </>
  );
};

export default ArticleList;
