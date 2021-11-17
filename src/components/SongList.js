import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        SongList
      </div>
    )
  }
}

const mapStateToPropos = (state) => {
  // console.log(state); //logs the reducers state
  // return state;

  return { songs: state.songs };
  //this can be passed as props to SongList class
}

export default connect(mapStateToPropos)(SongList);
// function inside another function
