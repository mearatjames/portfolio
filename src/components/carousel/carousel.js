import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Icon } from 'semantic-ui-react';
import './carousel.css'
 
export default class Carousel extends React.Component {

  render() {
   
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={3}
        style={{position: 'relative'}}
      >
        <Slider>
        {this.props.img.map((e, i) => (
          <Slide key={i} index={i}>
            <Image style={{objectFit: 'cover'}} src={e}></Image>
          </Slide>
        ))}
        </Slider>
        <ButtonBack className='carouselBtn btnBack'><Icon name='chevron left'/></ButtonBack>
        <div className='slides'>
          <Dot className='carouselBtn' slide={0}><Icon name='window minimize outline' /></Dot>
          <Dot className='carouselBtn' slide={1}><Icon name='window minimize outline' /></Dot>
          <Dot className='carouselBtn' slide={2}><Icon name='window minimize outline' /></Dot>
        </div>
        <ButtonNext className='carouselBtn btnNext'><Icon name='chevron right'/></ButtonNext>
      </CarouselProvider>
    );
  }
}