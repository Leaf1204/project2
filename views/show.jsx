const React = require("react");
const Layout = require('./Layout');

class Show extends React.Component {
 render() {
     return (
         <Layout>
             <div class="stats">
                 <h2>Stats</h2>
                <ul>
                    {this.props.data?.map((line, index) => {
                      // t-rav magic date formating to avoid silly react puking when trying to extract the date value in the return statement. It gives some non-sense about needing an array?!
                      var today = `${line._id.dateOf.getFullYear()}-${line._id.dateOf.getMonth()+1}-${line._id.dateOf.getDate()}`;
                      return <li>
                          <b>{today}</b> - Completed {line.completedItems} of {line.totalItems}  task
                      </li>
                    })}
                </ul>
             </div>
         </Layout>
     )}
}
     
module.exports = Show;
