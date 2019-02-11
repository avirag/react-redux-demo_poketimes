import React from 'react';
import Rainbox from './hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nulla blanditiis qui explicabo repellat voluptatibus rem consequuntur nam expedita, beatae maxime quas doloribus laudantium cumque magnam eveniet non magni? At.</p>
    </div>
  )
}

export default Rainbox(About);
