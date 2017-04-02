import React, {Component} from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className="gallery">
        <ul>
          <li><img src={require('../img/A.png')} alt="First gallery image" onClick={this.props.answerA}/></li>
          <li><img src={require('../img/B.png')} alt="Second gallery image" onClick={this.props.answerB}/></li>
          <li><img src={require('../img/C.png')} alt="Third gallery image" onClick={this.props.answerC}/></li>
          <li><img src={require('../img/D.png')} alt="Fourth gallery image" onClick={this.props.answerD}/></li>
        </ul>
      </div>
    )
  }
}