import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { Home } from "./pages/Home";
import { Route } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      {/* renders the home component on either cases */}
    </div>
  );
}

export default App;
