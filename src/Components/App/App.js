import React from "react";
import "./App.css";

// Import React Components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "name1",
          artist: "artist1",
          album: "album1",
          id: 1,
        },
        {
          name: "name2",
          artist: "artist2",
          album: "album2",
          id: 2,
        },
        {
          name: "name3",
          artist: "artist3",
          album: "album3",
          id: 3,
        },
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {
          name: "playlist name1",
          artist: "playlist artist1",
          album: "playlist album1",
          id: 4,
        },
        {
          name: "playlist name2",
          artist: "playlist artist2",
          album: "playlist album2",
          id: 5,
        },
        {
          name: "playlist name3",
          artist: "playlist artist3",
          album: "playlist album3",
          id: 6,
        },
      ],
    };
    // binds the method
    this.addTrack = this.addTrack.bind(this);
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

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
