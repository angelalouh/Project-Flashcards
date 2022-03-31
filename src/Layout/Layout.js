import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";

import Header from "./Header";
import Home from "./home/Home";
import Study from "./decks-study/Study";
import CreateDeckScreen from "./decks-new/CreateDeckScreen";
import DeckScreen from "./decks/DeckScreen";
import EditDeckScreen from "./decks-edit/EditDeckScreen";
import AddCardScreen from "./decks-cards/new/AddCardScreen";
import EditCardScreen from "./decks-cards/edit/EditCardScreen";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container card">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeckScreen />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCardScreen />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardScreen />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <DeckScreen />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
