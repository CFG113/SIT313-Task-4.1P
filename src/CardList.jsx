import React from "react";
import ArticleList from "./ArticleList";
import TutorialList from "./TutorialList";
import "./Card.css";

const CardList = () => {
  return (
    <>
      <ArticleList />
      <TutorialList />
    </>
  );
};

export default CardList;
