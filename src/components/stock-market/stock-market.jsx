import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class StockMarket extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
      articles: [],
    };
  }

  componentWillMount() {
    fetch('https://api.ipdata.co/?api-key=9f3e22a7f0037eebecc55989c82823c27cddca523bcd59eff04a95a1')
      .then(res => res.json())
      .then((location) => {
        this.setState({ country: location.country_code.toLowerCase() });
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=business&apiKey=125cae3691a140489efa2b69a8d31d88`)
          .then(res => res.json())
          .then((response) => {
            console.log(response);
            this.setState({ articles: response.articles });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardBody>
          {this.state.articles.map(x => <p>{x.title}</p>)}
        </CardBody>
      </Card>
    );
  }
}

export default StockMarket;
