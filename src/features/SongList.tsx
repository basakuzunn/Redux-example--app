import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component<any, any> {
  renderList(): React.ReactNode {
    return this.props.songs.map((song: any) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render(): React.ReactNode {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
