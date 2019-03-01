import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  render() {
    return <div>SongList</div>
  }
}

const mapStateToProps = ({ songs }) => ({ songs })

export default connect(mapStateToProps)(SongList)
