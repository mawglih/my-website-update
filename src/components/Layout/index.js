import React, { Fragment } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default({
  children,
}) => (
  <Fragment>
    <Navigation />
    {children}
    <Footer />
  </Fragment>
);
