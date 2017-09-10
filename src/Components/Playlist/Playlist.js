import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
    }

    handleNameChange(e) {
        let listName = e.target.value;
        this.props.onChangeName(listName);
    }

    render() {
        (
            <div className="Playlist">
            <input value="New Playlist" onChange={this.handleNameChange}/>
            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
            <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
          </div>
        )
    }
}