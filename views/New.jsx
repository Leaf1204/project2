const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Daily Goal</h1>
          <form action="/app/goal" method="POST">
          I want to complete <input type="text" name="goal" /> tasks today <br></br>
          <input type="submit" name="" value="Create goal"/>
          </form>
        </div>
        );
  }
}

module.exports = New;