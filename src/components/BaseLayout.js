import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ParentComponent from './ParentComponent';

class BaseLayout extends Component {
  render () {
    return (
      <div className=''>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout;
