import React from 'react';
const Paragraph = (props) => {
  return (
    <React.Fragment>
      <p className={props.className}>{props.title}</p>
    </React.Fragment>
  );
};
export default Paragraph;
