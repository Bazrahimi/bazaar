import decode from 'jwt-decode';

// Creating a class to manage authentication-related functionalities
class AuthService {
  // Method to get the user profile from JWT
  getUser() {
    // Decoding the token to user information
    return decode(this.getToken());
  }

  // Method to check if the user is logged in
  loggedIn() {
    // Retrieving the user token from localStorage
    const token = this.getToken();
    // Checking if the token exists and whether it has expired
    // If the token exists and is not expired, return true; otherwise, return false
    return !!token && !this.isTokenExpired(token);
  }

  // Method to retrieve user token from the localStorage
  getToken() {
    // Returning the token stored in localStorage with the key 'id_token'
    return localStorage.getItem('id_token');
  }

  // Method to log the user in
  login(idToken, userId) {
    // Saving the user token to localStorage
    // This is crucial for maintaining the user's logged-in state between page reloads.
    localStorage.setItem('id_token', idToken);
    // Redirecting user to seller dashboard
    window.location.assign(`/SellerDashboard/${userId}`);
  }

  // Method to check if a token has expired
  isTokenExpired(token) {
    try {
      // Decoding the token to get its expiration time
      const decoded = decode(token);
      // Checking if the current time is past the token's expiration time
      // If it is, the token has expired, and we return true; otherwise, we return false
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      // Logging the error if there's a problem decoding the token
      console.log('Expired check failed! Line 44: ', err);
      // Returning true as a default, to indicate that the token has expired
      return true;
    }
  }

  // Method to log the user out
  logout() {
    // Removing the user token from localStorage
    localStorage.removeItem('id_token');
    // Reloading the page to reset the application state
    window.location.reload();
  }
}

// Exporting an instance of AuthService so it can be imported and used in other parts of the application
export default new AuthService();
