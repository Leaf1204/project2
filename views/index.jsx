const React = require("react");
const Layout = require("./layout.jsx");

// todo : handle case when undefined tasks
class Index extends React.Component {
  render() {
    const today = Date.now;
    let message = <p>I have completed {this.props.completedTask} of {this.props.totalTask} task today</p>;
    if(this.props.completedTask >= this.props.goal){
      message = <p>Well done! You rock!</p>
    }
    if (this.props.goal == 0) {
      message = <p>Please set a daily goal.</p>
    }
    return (
      <Layout title="The Title!">
        <div class="flex-container">
        
            <div class="newTask-container">
            <h2>Welcome {this.props.userName}</h2>
            <h3>Add new task</h3>
            <form action="/app" method="POST">
                Task: <input type="text" name="task" /><br/>
                <input type="submit" name="" value="Create new task"/>
             </form>
             </div>
          <div class="list-conatiner"> 
    <h2>{this.props.today} task list</h2>
    <p>My goal for today is to complete: {this.props.goal} tasks.</p>
    {message}
    
            <div class="list-items">
               <ul>
                   {this.props.tasks?.map((task, index) => {
                    let itemClass = "not-done";
                    let doneButton = <form action={`/app/${task._id}?_method=PUT`} method="POST"><button class="button button-outline"><i class="fas fa-check"></i> done</button></form>
                    let removeButton = <div class="listButtons"><form action={`/app/${task._id}?_method=DELETE`} method="POST"><button class="button button-outline"><i class="fas fa-trash-alt"></i> remove</button></form></div>
                      if(task.status){
                       itemClass = "done";
                        doneButton = "";
                        removeButton = "";
                      }
                      return <li class={itemClass}>
                      {task.description} &nbsp;
                      {doneButton} &nbsp;&nbsp;
                      {removeButton}
                      </li>
                      })}
                </ul>
              </div>
          </div>
        </div>
          

        
      </Layout>
    );
  }
}

module.exports = Index;
