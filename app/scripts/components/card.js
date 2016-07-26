import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="card">
        <span>{this.props.card}</span>
      </div>
    )
  }
});
