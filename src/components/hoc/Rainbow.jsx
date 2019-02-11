import React from 'react';

const Rainbox = WrappedComponent => {
  const colours = ['red', 'orange', 'pink', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text';

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default Rainbox;