import React, { Component } from 'react';
import { connect } from 'react-redux'

class MonsterListItem extends Component {
  render() {
    
    const { monsters, favorite, id } = this.props

    return (
      <li>
        {
          (id === '2') ? `${monsters[id]} <-- ${favorite}` : monsters[id]
        }
      </li>
    );
  }
}

function mapStateToProps({monsters, favorite}) {
  return {
    monsters,
    favorite
  }
}

export default connect(mapStateToProps)(MonsterListItem);