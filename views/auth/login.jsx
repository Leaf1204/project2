const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div class="auth-container">
        <div class="login">
          <p>Login</p>
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <input type="submit" value="login"/>
        </form>
        </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
