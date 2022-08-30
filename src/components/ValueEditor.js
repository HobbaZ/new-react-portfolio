import React, {useState} from 'react';

import { Container } from 'react-bootstrap';

function ValueEditor(props) {

    const [materialColour, setMaterialColour] = useState(0);

    const [iconSaturation, setIconSaturation] = useState(0);

      return (
        <>
        <Container id='valueEditor'>

          <form className="form">
            
            <label>Icon Saturation</label><br></br>
            <input className='slider'
              defaultValue={0}
              min={0}
              max={1}
              value={props.iconSaturationValue}
              type="range"
            />
        
        </form>


        </Container>
        </>
      )
}

export default ValueEditor