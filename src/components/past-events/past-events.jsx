import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';


class PastEvents extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Card>
        <CardBody>
          <p>Past-events</p>
        </CardBody>
      </Card>
    );
  }
}

export default PastEvents;
