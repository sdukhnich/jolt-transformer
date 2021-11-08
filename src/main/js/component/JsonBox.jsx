import { json } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class JsonBox extends React.Component {
  render() {
    let isSubmit = this.props.submit;

    return (
      <Card>
        <Card.Header className="p-2">
          <Container>
            <Row>
              <Col>{this.props.name}</Col>
              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  className="float-right"
                  type={isSubmit ? "submit" : "button"}
                  onClick={this.props.onClick}
                  disabled={this.props.onClick || isSubmit ? false : true}
                >
                  {this.props.action}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body className="p-0">
          <CodeMirror
            spellCheck="true"
            value={JSON.stringify(this.props.value, null, " ")}
            maxHeight="500px"
            extensions={[json()]}
            onChange={this.props.onChange}
            editable={this.props.editable}
            indentWithTab={true}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default JsonBox;
