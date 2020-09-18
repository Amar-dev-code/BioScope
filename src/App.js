import React from "react";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movie from "./Components/Movie";
import Test from "./Components/Test";
export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/BioScope" component={Landing} />
          <Route exact path="/Test/id" component={Test} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
