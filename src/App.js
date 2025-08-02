import React from "react";
import "./App.css";
import Header from "./Header";
import CardList from "./CardList";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Navbar";
import SignupBar from "./Signup";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header text="Staff List" />
      <CardList />
      <SignupBar />
      <Footer />
    </div>
  );
}

export default App;
