import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [{name: '99 problems'}, {artist: 'Jaz-Z'}, {album: 'Gotcha'}],
            playlistName: 'The best songs',
            playlistTracks: [
                {name: 'probably me', artist: 'Sting', album: 'Fields of Gold', id: 1, uri: 69-1}, 
                {name: 'the hipe', artist: 'Lennon', album: 'Second album', id: 2, uri: 28-4}, 
                {name: 'Sailing', artist: 'Rod Stewart', album: 'Fields of Silver', id: 3, uri: 78-5}]
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        if(!track.id === this.state.playlistTracks) {
            tracks.push(track)
        }
        this.setState({playlistTracks: tracks})
    }

    removeTrack(track) {
        if(track.id === this.state.playlistTracks) {
            tracks.remove(track);
        }
        this.setState({playlistTracks: tracks});
    }

    updatePlaylistName(name) {
        setState({playlistName: name});
    }

    savePlaylist() {
        let trackURIs = this.playlistTracks.map(uriValue => uriValue.uri);
    }

    search(term) {
        console.log(term);
    }

    render() {
        (
            <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search} />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onChangeName={this.updatePlaylistName} onSave={this.savePlaylist} />
              </div>
            </div>
          </div>
        )
    }
}