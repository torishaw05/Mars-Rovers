import React, { Component } from 'react';


export default class GetImageButton extends Component {
  render() {
    return (
      <div className='button'>
      <form onSubmit={this.props.fetchRoverImage}>
      <button type='submit'>Search For Rover Images</button>
      </form>
      </div>

    );
  }
}
