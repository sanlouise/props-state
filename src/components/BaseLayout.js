import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class BaseLayout extends Component {
  render () {
    return (
      <div className=''>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default BaseLayout;
