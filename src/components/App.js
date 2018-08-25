import React, { Component } from 'react';
import MonsterList from './MonsterList'
import { setFavorite } from '../actions/favorite'
import { setMonsters } from '../actions/monsters'
import { connect } from 'react-redux'

const FAVORITE = 'this monster is my favorite'
const MONSTERS = ['swamp thing', 'dracula', 'frankenstein', 'the blob']

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    //Initializing the application data
    dispatch(setFavorite(FAVORITE))
    dispatch(setMonsters(MONSTERS))
  }
  render() {

    const { monsters } = this.props

    return (
      <div>
        <MonsterList />
        <div>
          I'm a div above MonsterList and I want access to the third monster without hoisting state! Wait, we have redux, so the third monster is: { monsters[2] }
        </div>
      </div>
    );
  }
}

function mapStateToProps({monsters}) {
  return {
    monsters
  }
}

export default connect(mapStateToProps)(App);
