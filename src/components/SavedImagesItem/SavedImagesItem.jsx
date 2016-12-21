import React, { Component } from 'react';

export default class SavedImagesItem extends Component{

  handleDeleteClick(id, username) {
    this.props.deleteSaved(id);
    setTimeout(() => {this.props.getSavedImages(username)}, 300);
  }


  render(){
    return (
      <div className="saved-container">
        <div className="saved-image-container">
            <img src={this.props.roverurl} />
            <img src={this.props.bingurl} />
        </div>
        <div className="saved-vision-container">
          <p>{this.props.visiontext}</p>
        </div>
        <div onClick={() => this.handleDeleteClick(this.props.id, this.props.username)}><img className="DeleteButton" src={this.props.DeleteButton}/></div>

      </div>
    );
  }
}


