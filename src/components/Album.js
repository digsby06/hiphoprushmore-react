import React from 'react';

const certificationMap = {
  'G': 'Gold',
  'S': 'Silver',
  'P': 'Platinum'
};

export default class Album extends React.Component {
  render() {
    return (
      <li className="album">
        <span className={`symbol symbol-${this.props.certification}`} title={typeMap[this.props.certification]}>{this.props.certification}</span>
        <span className="year">{this.props.year}</span>
        <span className="city"> {this.props.album}</span>
      </li>
    );
  }
}
