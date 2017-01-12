// src/components/IndexPage.js
import React from 'react';
import EmceePreview from './EmceePreview';
import emcees from '../data/emcees';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="emcees-selector">
          {emcees.map(emceeData => <EmceePreview key={emceeData.id} {...emceeData} />)}
        </div>
      </div>
    );
  }
}
