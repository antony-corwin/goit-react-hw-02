import React, { Fragment } from 'react';

const Publication = ({ id, title, text }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{text}</p>
    </Fragment>
  );
};

export default Publication;
