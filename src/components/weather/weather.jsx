import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Card>
        <CardBody>
          <p>Weather</p>
        </CardBody>
      </Card>
    );
  }
}

export default Weather;
