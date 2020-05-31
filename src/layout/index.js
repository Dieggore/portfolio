import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BaseCss } from '../styles/base';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <BaseCss />
    {children}
    <Footer/>
  </>  
);



Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
