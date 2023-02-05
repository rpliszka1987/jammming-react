import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Setting the state to searchResult array of objects.
    this.state = {
      searchResults: [
        {
          name: "name",
          artist: "artist",
          album: "album",
          id: "id",
        },
      ],
    };
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
            {/* Passing the state to the SearchResults component */}
            <SearchResults searchResults={this.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
