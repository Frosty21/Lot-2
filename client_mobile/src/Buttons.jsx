import React, {Component} from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className="gallery">
        <ul>
          <li><img src="http://placehold.it/360x240" alt="First gallery image" onClick={this.props.answerA}/></li>
          <li><img src="http://placehold.it/360x240" alt="Second gallery image" onClick={this.props.answerB}/></li>
          <li><img src="http://placehold.it/360x240" alt="Third gallery image" onClick={this.props.answerC}/></li>
          <li><img src="http://placehold.it/360x240" alt="Fourth gallery image" onClick={this.props.answerD}/></li>
        </ul>
      </div>
    )
  }
}