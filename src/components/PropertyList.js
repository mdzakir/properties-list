import React, { Component, Link, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchProperties } from "../actions";

class PropertyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardView: true
    }
  }

  componentDidMount(){
    this.props.fetchProperties();
  }

  renderProductsAsCards() {
    return _.map(this.props.properties, property => {
      return (
        <div key={property.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-hg-1-5th roof-card-item ember-view">
          <div className="roof-cards-spacing">
            <div className="card __760f2 ember-view">
              <Fragment>
                <div className="embed-responsive">
                  <img src={property.mainImageUrl ? property.mainImageUrl : 'https://via.placeholder.com/640x428'} alt="" />
                  <div className="overlay">
                    <Fragment>
                      <div className="price">
                        <div className="list-price __f734d ember-view ">
                          <div className="price-value tentative-adjust">
                            <span className="symbol-dollar">
                              ${property.financial ? property.financial.listPrice.toFixed(2) : 'TBD'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ember-view">
                        <div className="details">
                          Built in {property.physical ? property.physical.yearBuilt : '(Not Mentioned)'}
                        </div>
                      </div>
                    </Fragment>
                  </div>
                  <a target="_blank" href={`/property/${property.id}`} className="link-to-details ember-view" >
                    View
                  </a>
                  {/*<Link to={ property.id } >
                    View Details
                  </Link>*/}
                </div>
                <div className="property-stats">
                  <div className="property-stats-item current-rent">
                    <h6>Current Rent</h6>
                    <span>
                      <span className="symbol-dollar">$</span>{property.financial ? property.financial.monthlyRent.toFixed(2) : 'TBD'}
                    </span>
                  </div>
                  <div className="property-stats-item cap-rate">
                    <h6>Gross Yield</h6>
                    <span>
                      {property.financial ? ( ( property.financial.monthlyRent * 12 ) / property.financial.listPrice ).toFixed(2) : '-'} <span className="symbol-percent">%</span>
                    </span>
                  </div>
                  <div className="property-stats-item total-return">
                    <h6>Total Return</h6>
                    <span className="nowrap ">
                                  <span className="symbol-dollar">$</span>22,131<small>/5 Yr</small>
                                </span>
                  </div>
                  <div className="property-stats-item nh">
                    <h6>Neighborhood</h6>
                    <span className="stars">
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>

                <div className="property-address     ">
                  <span data-test-street-address="" className="street">{property.address ? property.address.address1 : ''}</span><br />
                  <span data-test-city-state-zip="" className="csz">{property.address ? property.address.city : ''},&nbsp;
                    {property.address ? property.address.state : ''} {property.address ? property.address.zip : ''}</span>
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      );
    });
  }

  renderProductsAsList() {
    return _.map(this.props.properties, property => {
      return (
        <tr key={property.id} id="ember{property.id}" className="__2ef67 ember-view" >

          <td className="image-column roof-category-coding-row">
            <div className="roof-category-coding-cell offer ">
            </div>
            <div id="ember3033" className="roof-photo-primary-small __be9c7 ember-view">
              <div className="roof-photo">
                <a title="See Details"
                   target="_blank" href={`/property/${property.id}`} id="ember3034"
                   className="ember-view">
                  <img src={property.mainImageUrl ? property.mainImageUrl : 'https://via.placeholder.com/640x428'}
                  alt=""
                  className="profile-icon profile-icon-small" />
                </a>
              </div>
            </div>
          </td>
          <td className="roof-pull-left cell text-left">
            <a title="View Roof Details"
               target="_blank" href={`/property/${property.id}`} id="ember3035"
               className="with-hover ember-view"> {property.address.address1}
              <div className="city-state-zip">
                {property.address.city}, {property.address.state} {property.address.zip}
              </div>
            </a>
            <div id="ember3036" className="__55d2d ember-view">
            </div>
          </td>
          <td >
            <span className="symbol-dollar">$</span>{property.financial ? property.financial.listPrice: 'TBD'}
            <br />
          </td>
          <td>
            <span className="symbol-dollar">$</span>{property.financial ? property.financial.monthlyRent.toFixed(2) : 'TBD'}
            <span className="hidden-print">
    </span>
          </td>
          <td>{property.financial ? ( ( property.financial.monthlyRent * 12 ) / property.financial.listPrice ).toFixed(2) : '-'} <span className="symbol-percent">%</span></td>
          <td>8.7<span className="symbol-percent">%</span></td>
          <td><span className="symbol-dollar">$</span>22,131</td>
          <td>15.9<span className="symbol-percent">%</span></td>
          <td className="cell">{property.physical ? property.physical.yearBuilt : '(Not Mentioned)'}</td>
          <td><span id="ember3041" className="__e3a38 ember-view">
          </span></td>
          <td className="action-column text-center">
            <span id="ember3050" className="ember-view">
              <a href="#" title="Click to save this property." className="roof-action-save">
                <span className="hidden-xs hidden-sm">

                </span>
                <i className="fal fa-heart">
                </i>
              </a>
            </span>
          </td>
          <td className="action-column text-center roof-details-link">
            <a title="View Roof Details"
               target="_blank" href={`/property/${property.id}`} id="ember3061"
               className="btn btn-fixed-size roof-action-view btn-secondary  ember-view"> See Details
            </a>
          </td>
        </tr>
      );
    });
  }

  handleToggleView = (bool) => {
    this.setState({
      cardView: bool
    })
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="toggle-card-list ">
            <div className="btn-group">
              <button className={`btn ${this.state.cardView ? 'btn-default': ''}`}
                      onClick={this.handleToggleView.bind(this, true)}>
                <i data-test-card-view-icon="" className="fas fa-th-large fa-lg active">
                </i><br />
                <small>Cards</small>
              </button>
              <button className={`btn ${this.state.cardView ? '': 'btn-default'}`}
                      onClick={this.handleToggleView.bind(this, false)}>
                <i data-test-list-view-icon="" className="far fa-bars fa-lg ">
                </i><br />
                <small>List</small>
              </button>
            </div>
          </div>
          <div className="row property-items">
            <div className="col-xs-12">
              <div className="ember-view">
                {this.state.cardView && <div className="roof-cards-list ember-view">
                  <div className="row roof-cards-container">
                    {this.renderProductsAsCards()}
                  </div>
                </div> }
                {!this.state.cardView &&
                <div id="ember2957" className="market-properties-list __c6eeb ember-view">
                  <div className="table-responsive">
                    <table className="table table-primary">
                      <thead>
                      <tr>
                        <th className="image-column"></th>
                        <th className="address head text-left">Address</th>
                        <th>
                         <span className="sortable" data-ember-action="" data-ember-action-2958="2958">
                         Price
                         </span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-2959="2959">
         <span className="roof-field-name-rent-type">Current</span><br />Rent
         </span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-2960="2960">
         Gross<br />Yield
         </span>
                          <span id="ember2969" className="__12e8f ember-view"><span tabIndex="0" role="button"
                                                                                    id="ember2978"
                                                                                    className="rs-popover-link ember-view">
         <i className="fal fa-info-circle cursor-pointer gray-60"></i>
         </span></span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-2996="2996">
         Cap<br />Rate
         </span>
                          <span id="ember2997" className="__12e8f ember-view"><span tabIndex="0" role="button"
                                                                                    id="ember2998"
                                                                                    className="rs-popover-link ember-view">
         <i className="fal fa-info-circle cursor-pointer gray-60"></i>
         </span></span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-3000="3000">
         5Y Total<br />Return
         </span>
                          <span id="ember3001" className="__12e8f ember-view"><span tabIndex="0" role="button"
                                                                                    id="ember3002"
                                                                                    className="rs-popover-link ember-view">
         <i className="fal fa-info-circle cursor-pointer gray-60"></i>
         </span></span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-3004="3004">
         Annualized<br />Return
         </span>
                          <span id="ember3005" className="__12e8f ember-view"><span tabIndex="0" role="button"
                                                                                    id="ember3006"
                                                                                    className="rs-popover-link ember-view">
         <i className="fal fa-info-circle cursor-pointer gray-60"></i>
         </span></span>
                        </th>
                        <th>
         <span className="sortable" data-ember-action="" data-ember-action-3008="3008">
         Year<br />Built
         </span>
                        </th>
                        <th className="featured"></th>
                        <th className="action-column"></th>
                        <th className="action-column  text-center">
                        </th>
                      </tr>
                      </thead>
                      <tbody id="ember3009" className="ember-view">

                      {this.renderProductsAsList()}

                      </tbody>
                    </table>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties
});

export default connect(mapStateToProps, { fetchProperties })(PropertyList);