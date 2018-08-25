import React, { Component } from 'react';
import { connect } from 'react-redux'
import MonsterListItem from './MonsterListItem'

class MonsterList extends Component {
  render() {
    
    const { monsters } = this.props

    return (
      <div>
        <h3>Here is a list of spooky monsters:</h3>
        <ul>
        {
          Object.keys(monsters).map((key) => (
            <MonsterListItem key={key} id={key}/>
          ))
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({monsters}) {
  return {
    monsters
  }
}

export default connect(mapStateToProps)(MonsterList);