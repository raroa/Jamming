import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Spotify } from '../../util/Spotify';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [{name: 'Soul search', artist: 'Sting', album: 'Gotcha'}, {name: 'no worries', artist: 'no mercy', album: 'Gotcha 2'}, {name: '99 problems', artist: 'Jaz-Z', album: 'Gotcha 3'}],
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
        //let tracks = this.state.playlistTracks;
        //if(!track.id === this.state.playlistTracks.track.id) {
        //    tracks.push(track)
        //}
        //this.setState({playlistTracks: tracks});

        let tracks = this.state.playlistTracks;
        tracks.push(track);
    
        this.setState({playlistTracks: tracks});
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;

        tracks = tracks.filter((current) => {
            if (current.id !== track.id) {
                return true;
              } else {
                return false;
              }
        });

        this.setState({playlistTracks: tracks});
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    }

    savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
}

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({searchResults: searchResults});
          });
    }

    render() {
         return (
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

export default App;