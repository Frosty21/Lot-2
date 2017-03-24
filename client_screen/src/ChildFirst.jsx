import React, {Component} from 'react';
import ChildLast from './ChildLast.jsx';

export default class ChildFirst extends Component {
  render() {
    return (
      <main className="child">
        {this.props.ChildFirstList.map((item) => {
          if(item.key === 'value') {
            return (
              <div>
                <button className="data-test" onClick={this.props.handleClick}>Test </button>
                <ChildLast key={item.id} content={item.whereis} />
                <h2>This is child first</h2>
              </div>

            )
          } else if (item.key === 'notvalue') {
            return (
              <ChildLast key={item.id} content={item.whereis}/>
            )
          }
        })}
      </main>
    )
  }
}