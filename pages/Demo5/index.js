//import liraries
import React, { Component } from "react";
import { Provider } from "mobx-react";
import HomeScreen from "../../screens/HomeScreen";
import Store from "../../Stores/Store";
const store = new Store();

// create a component
export class Demo5 extends Component {
  render() {
    return (
        <Provider store={store}>
          <HomeScreen />
        </Provider>
    );
  }
}
