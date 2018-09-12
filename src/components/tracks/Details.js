import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';


class Details extends Component {
  state = {
    wine: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://api.punkapi.com/v2/beers/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ wine: res.data[0] })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { wine } = this.state;
    if (
      wine === undefined ||
      Object.keys(wine).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {wine.name} by{' '}
              <span className="text-secondary">{wine.contributed_by}</span>
            </h5>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4">
                  <img src={wine.image_url} width="100%" /></div>
                <div className="col-sm-8">
                  <h5 className="card-text"><strong>Description :</strong> {wine.description}</h5>
                  <h5 className="card-text">
                    <strong>Food Pairing:</strong><ul>
                      <li>{wine.food_pairing[0]}</li>
                      <li>{wine.food_pairing[1]}</li>
                      <li>{wine.food_pairing[2]}</li>
                    </ul></h5>
                  <h5 className="card-text"><strong>abv :</strong> {wine.abv}</h5>
                  <h5 className="card-text"><strong>ibu :</strong> {wine.ibu}</h5>
                  <h5 className="card-text"><strong>ebc :</strong> {wine.ebc}</h5>
                  <h5 className="card-text"><strong>srm :</strong> {wine.srm}</h5>
                  <h5 className="card-text"><strong>ph :</strong> {wine.ph}</h5>
                  <h5 className="card-text"><strong>Attentuation :</strong> {wine.attenuation_level}</h5>
                  <h5 className="card-text"><strong>First Brewed :</strong> {wine.first_brewed}</h5>
                  <h5 className="card-text"><strong>Tagline :</strong> {wine.tagline}</h5>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Details;
