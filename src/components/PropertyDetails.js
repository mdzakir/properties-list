import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertyDetails } from "../actions";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPropertyDetails(id);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.property.resources.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.property.resources.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { property } = this.props;
    const slides = property.resources.photos.map((photo) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={photo.id}
        >
          <img src={photo.urlMedium} alt={photo.resourceType} />
          {/*<CarouselCaption captionText={photo.resourceType} captionHeader={photo.resourceType} />*/}
        </CarouselItem>
      );
    });
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>Property ID: {property.id}</div>
            <div className="slot header-area">
              <div id="ember2928" className="__ca551 ember-view">
                <span id="ember2937" className="ember-view">
                  <roof-address data-test-roof-address="">
                    <roof-address-multi-lines>
                      <roof-address-line>
                        <roof-address-street>{property.address? property.address.address1 : ''} </roof-address-street>
                        <roof-address-city-state>
                          {property.address? property.address.city : ''},&nbsp;
                          {property.address? property.address.state : ''}&nbsp;
                          {property.address? property.address.zip : ''}
                          </roof-address-city-state>
                      </roof-address-line>
                    </roof-address-multi-lines>
                  </roof-address>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators items={property.resources.photos} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.properties.properties);
  return {
    property: state.properties.properties[0]
  }
}

export default connect(mapStateToProps, {fetchPropertyDetails})(PropertyDetails);