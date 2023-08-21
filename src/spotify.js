/*
Step 1. Click Login Button
Step 2. Redirect to Spotify Login Page
Step 3. Redirect to Home Page once logged in
*/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://israelspotify.com/";
const clientId = "8c54ab3e5dae46c7b0ae5e50fee42f9e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
