qq/q
import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
      let roverImage = this.props.images.map((image) => {
        return(
          <div key={image.id} className='card_image'>
          <img src={image.img_src}/>
          <h3> Mars Rover : {image.rover.name}< /h3>
          <h3> Earth Date : {image.earth_date} </h3>
          </div>
        )
      })
    
return (
  <div>
  {roverImage}
  </div>
)

}
}
Unhandled Rejection (TypeError): Cannot read property 'map' of undefined

