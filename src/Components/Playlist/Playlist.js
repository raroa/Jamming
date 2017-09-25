import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';

 export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        let listName = e.target.value;
        this.props.onChangeName(listName);
    }

    render() {
         return (
            <div className="Playlist">
            <input value="New Playlist" onChange={this.handleNameChange}/>
            <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
            <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
          </div>
        )
    }
}