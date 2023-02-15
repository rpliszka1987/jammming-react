const redirectUri = "http://localhost:3000/";
let accessTocken;

const Spotify = {
  getAccessTocken() {
    if (accessToken) {
      return accessTocken;
    }

    // check for an access tocken match
    // This gets the current url of our page
    const accessTockenMatch =
      window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    // Checks if valuesd exist in url
    if (accessTockenMatch && expiresInMatch) {
      accessTocken = accessTockenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab new access tocken when it expires
      window.setTimeout(() => (accessTocken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      // redirect to url
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
};

export default Spotify;
