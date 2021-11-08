import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import JsonBox from "../component/JsonBox";

class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      spec: {},
    };
  }

  handleDataChange = (value, viewUpdate) => {
    this.setState({ data: value });
  };

  handleSpecChange = (value, viewUpdate) => {
    this.setState({ spec: value });
  };

  handleSubmit = (event, props) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e, this.props)}>
        <Container className="pt-3 mt-5" fluid>
          <Row>
            <Col>
              <JsonBox
                name="JSON input"
                action="JSON Validate"
                value={this.props.request.data}
                onChange={this.handleDataChange}
              //  onClick={this.props.handleOnValidate}
              //onClick={() => {this.render()}}
              />
            </Col>
            <Col>
              <JsonBox
                name="JOLT Spec"
                action="JSON Validate"
                value={this.props.request.spec}
                onChange={this.handleSpecChange}
              />
            </Col>
            <Col>
              <JsonBox
                name="Result"
                action="Transform"
                value={this.props.response.data}
                editable={false}
                submit
              />
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default MainArea;
