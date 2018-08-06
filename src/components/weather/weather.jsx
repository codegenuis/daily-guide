import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
      latitude: '',
      longitude: '',
      icon: '',
      description: '',
    };
  }

  componentWillMount() {
    fetch('https://api.ipdata.co/?api-key=9f3e22a7f0037eebecc55989c82823c27cddca523bcd59eff04a95a1')
      .then(res => res.json())
      .then((location) => {
        // console.log(location.latitude);
        this.setState({ latitude: location.latitude, longitude: location.longitude });
        console.log(this.state.longitude);
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=9bc3219af03414a42ba6f7ae4b89889b`)
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            this.setState({
              temp: data.main.temp,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            });
          });
      });
  }

  render() {
    // const { weather } = this.state;
    return (
      <Card>
        <CardBody>
          <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="imag" />
          <p>{this.state.description}</p>
          <p>{this.state.temp}</p>
        </CardBody>
      </Card>
    );
  }
}

export default Weather;
