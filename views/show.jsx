const React = require("react");
const Layout = require('./Layout');

class Show extends React.Component {
 render() {
     return (
         <Layout>
             <div>
                <h1>Stats</h1>
                <a href="/app"> Back To List </a>
                <ul>
                    {this.props.data?.map((line, index) => {
                      return <li>
                          {line.dateOf} - Completed {line.completedItems} of {line.totalItems}  task
                      </li>
                    })}
                </ul>
             </div>
         </Layout>
     )}
}
     
module.exports = Show;