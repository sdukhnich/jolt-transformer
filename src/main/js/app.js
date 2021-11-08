"use strict";

import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainArea from "./container/MainArea";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {},
      response: {},
    };
  }

  componentDidMount() {
    client({
      method: "GET",
      path: "/api/jolt/example",
    }).done((exampleRequest) => {
      this.transform(exampleRequest.entity);
    });
  }

  transform = (request) => {
    client({
      method: "POST",
      path: "/api/jolt/transform",
      entity: request,
    }).done((response) => {
      this.setState({
        request: request,
        response: { data: response.entity },
      });
    });
  };

  transformString = (request) => {
    try {
      this.transform({
        data: JSON.parse(request.data),
        spec: JSON.parse(request.spec),
      });
    } catch (ex) {
      console.error("Error data: ", ex.message, ex);
      this.setState({
        response: { data: ex.message },
      });
    }
  };

//   handleOnValidate = () => {
//     console.log(this.state.request.data);
//     let currentData = this.state.request.data;
// //    this.setState({ request: { data: {}}});
//     this.setState({ request: { data: this.state.request.data}});
//     this.render();
//   }

  render() {
    return (
      <div>
        <Header />
        <MainArea
          request={this.state.request}
          response={this.state.response}
          onSubmit={this.transformString}
    //      handleOnValidate = {this.handleOnValidate}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
