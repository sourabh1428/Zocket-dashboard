import React, { useState } from 'react';

import Form1 from './form1';
import Form2 from './form2';

function FormC() {
  const [componentsToRender, setComponentsToRender] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your components as an array
  const components = [
    <Form1 key="1"/>,<Form2 key="2"/>
  ];

  const renderNextComponent = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setComponentsToRender([...componentsToRender, components[currentIndex]]);
    }
  };

  return (
    <div>
      {componentsToRender}
      <button onClick={renderNextComponent}>Render Next Component</button>
    </div>
  );
}

export default FormC;
