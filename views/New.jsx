const React = require('react');
const Layout = require('./layout');

class New extends React.Component {
  render() {
    return (
      <Layout>
        <div class="goals">
            <h2>Daily Goal</h2>
          <form action="/app/goal" method="POST">
          I want to complete <input type="text" name="goal" placeholder="6"/> of tasks today <br></br>
          <input type="submit" name="" value="Create goal"/>
          </form>
        </div>
        </Layout>
        );
  }
}

module.exports = New;