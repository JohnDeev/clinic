import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="3965383180201439">
        <Page href="https://www.facebook.com/Cymaniatico/" tabs="timeline"/>
      </FacebookProvider>    
    );
  }
}