import decode from 'jwt-decode';
// creating a class to manage authentication related functionalities 
class AuthService {

  // method to get the user profile from JWT
  getProfile() {
    // Decoding the token to user information
    return decode(this.getToken());
  }

  // Method to check if the user is logged in
  loggeIn() {
    // retrieving the user token from localStroage
    const token = this.getToke();
    // checking if toke exist and does not check if the token is expired
    return !!token;
  }

  // Method to retrieve user token from the localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // method to log the user in
  login(idToken, userId) {
    // saving the user toke to localstroage
    // this si crucial for maintaining the user's logged-in state between page reloads.
    localStorage.setItem('id_token', idToken);
    // redirecting user to seller dashboard
    window.location.assign(`/SellerDashboard/${userId}`);

    
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log('expired check failed! Line 24: ', err);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('auth-token');
    // You can add a callback for navigation here if needed
  }



}




export default new AuthService();