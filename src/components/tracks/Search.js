import React, { Component } from 'react';
import axios from 'axios';
import Wines from './Wines'

class Search extends Component {
  state = {
    beer_name: '',
    wines: ''
  };
  componentWillMount() {
    axios
      .get(
        `https://api.punkapi.com/v2/beers`)
      .then(res => {
        this.setState({
          wines: res.data
        })
      })
      .catch(err => console.log(err));
  }
  onChange = e => {
    var val = e.target.value;
    if (val === '' || val === "undefined") {
    } else {
      this.setState({ [e.target.name]: val });
      axios
        .get(
          `https://api.punkapi.com/v2/beers?${e.target.name}=${val}`)
        .then(res => {
          this.setState({
            wines: res.data
          }).then(this.setState({ beer_name: '' }))
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="card card-body mb-4 p-4">
          <h1 className="display-4 text-center">
            <i className="fas fa-wine-glass-alt" /> Search For Wines
              </h1>
          <h3 className="lead text-center">Best wines in here</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Wine title..."
              name="beer_name"
              value={this.state.beer_name}
              onChange={this.onChange}
            />
          </div>
        </div>
        <Wines wines={this.state.wines} />
      </React.Fragment>
    );
  }
}

export default Search;
