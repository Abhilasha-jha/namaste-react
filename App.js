/**
 *  <div id="parent">
 *      <div id="child">
 * 
 *          <h1>Hello i am react</h1>
 *      </div>
 *      
 *  </div>
 * 
 
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"Hello i am react")
    )
)

 const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); // object

root.render(parent)