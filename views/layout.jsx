const React = require("react");

class Layout extends React.Component {
  render() {
    // req.session.login = true;

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
          <script src="https://kit.fontawesome.com/e58b2de6fa.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
          <div class="topnav">
          <a class="active" href="/app">Home</a>
          <a href="/auth/login">Login</a>
          <a href="/auth/signup">Signup</a>
          <a href="/app/stats"> View Stats</a> 
          <a href="/app/goal"> Daily Goal</a> 
          <a class="logout" href="/auth/logout">Logout</a>
        </div>
            <h1>Dopamine Box</h1>
            <h5>An intrinsic component of the human condition that drives behavior is a sense of meaning in one’s actions.</h5>
          </header>
          <main>{this.props.children}</main>
          <hr/>
          <p>Copyright &copy; 2020 Dopamine Box All Rights Reserved</p>
        </body>
      </html>
    );
  }
}

module.exports = Layout;