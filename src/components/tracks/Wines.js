import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wines extends Component {
  render() {
    const { wines } = this.props;
    return (
      <div>
        {wines === undefined || wines.length === 0 ? <h2>loading.......</h2> : <React.Fragment>
          <h3 className="text-center mb-4">Wines For You </h3>
          <div className="row">
            {wines.map(wine => (
              <div className="col-md-6" key={wine.id}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3"><img src={wine.image_url} alt={wine.name} width="100%" height="300px" />
                      </div>
                      <div className="col-sm-9">
                        <h5>Name : {wine.name}</h5>
                        <h5>Tagline : {wine.tagline}</h5>
                        <h5>Attentuation level : {wine.attenuation_level}</h5>
                        <h5>First Brewed : {wine.first_brewed}</h5>
                        <h5>ph : {wine.ph}</h5>
                        <h5>Contributed_by : {wine.contributed_by}</h5>
                        <Link to={`lyrics/track/${wine.id}`}
                          className="btn btn-dark btn-block">
                          <i className="fas fa-chevron-right" /> View more Details
                         </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>}
      </div>


    )
  }
}

export default Wines;
