import React from "react";
import "./App.css";

// Import React Components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: [],
    };
    // binds the method
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // Updates playlist name
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  addTrack(track) {
    // Gets the playlistTracks which are in the current state.
    let tracks = this.state.playlistTracks;
    // Checks if the track.id is in the current playlistTrack state.
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    // Pushes the track to the array
    tracks.push(track);
    // Updates the state
    this.setState({ playlistTracks: tracks });
  }

  // Remove track from playlist array
  removeTrack(track) {
    // Gets the playlist which are in the cuttent state.
    let tracks = this.state.playlistTracks;
    // This will filter all tracks and keep all tracks without the matching id
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    // Sets the state to new tracks
    this.setState({ playlistTracks: tracks });
  }

  // saves playlist
  savePlaylist() {
    // Saved spotify to an array using URI which is used by spotify to find songs.
    const trackUris = [this.state.playlistTracks.map((track) => track.uri)];

    // Calling the Spotify savePlaylist method to save the playlist.
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      // Reset the state of the playlist
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  // Search term for spotify
  search(term) {
    // Uses search from spotify
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
