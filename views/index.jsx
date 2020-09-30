const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    const today = Date.now;
    return (
      <Layout title="The Title!">
        <h3>Create todays task list</h3>
        <div>  
           <ul>
          {this.props.tasks.map((task, index) => {
            return <li>{task.description}</li>
          })}
          </ul>
            <h1>New To Do List</h1>
            <form action="/app" method="POST">
                Task: <input type="text" name="task" /><br/>
                <input type="submit" name="" value="Create new task"/>
             </form>
        </div>

      </Layout>
    );
  }
}

module.exports = Index;
