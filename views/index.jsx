const React = require("react");
const Layout = require("./layout.jsx");

// todo : handle case when undefined tasks
class Index extends React.Component {
  render() {
    const today = Date.now;
    return (
      <Layout title="The Title!">
        <h3>Create todays task list</h3>
        <div>  
           <ul>
          {this.props.tasks?.map((task, index) => {
            return <li>{task.description} <form action={`/app/${task._id}?_method=PUT`} method="POST"><button class="button">done</button></form></li>
          })}
          </ul>
         
            <h1>add new task</h1>
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
