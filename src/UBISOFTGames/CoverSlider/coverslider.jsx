import React from 'react';
import Btn from '../Button';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
const coverSlider = (props) => {
  return (
    <React.Fragment>
      <div
        className='theme-slider-container'
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className='theme-slider-logo'>
          <img
            src={props.clogo}
            alt='ubi'
          />
        </div>
        <div className='theme-slider-content '>
          <div className='theme-slider-con-text'>
            <Heading
              className={'theme-slider-con-heading'}
              title={props.title}
            />
            <Paragraph
              className={'theme-slider-con-paragraph'}
              title={props.paragraph}
            />
          </div>
          <div className='theme-slider-con-btn'>
            <Btn
              className={props.classNamebtn}
              title={props.btn1}
            />
            <Btn
              className={props.classNamebtn}
              title={props.btn2}
            />
          </div>
          <div className='theme-slider-card-log'>
            <img
              src={props.cgamelogo}
              alt='Avart'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default coverSlider;
