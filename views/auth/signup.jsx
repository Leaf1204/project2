const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div class="auth-container">
        <div class="signUp">
          <p>No account? Create one.</p>
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>
        </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
