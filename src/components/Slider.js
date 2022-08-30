import { useState } from "react";

import ReactSlider from "react-slider";
const Slider = () => {



    const [currentValue, setCurrentValue] = useState(0);

  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      defaultValue={0}
      max={1}
      value={currentValue}
      onAfterChange={(value) => setCurrentValue(value)} 
    />
  );
};

export default Slider;