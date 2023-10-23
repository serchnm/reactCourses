// Import reacy and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const buttonText = { text: 'Click Me!' };
    const labelText = 'Enter Name:'
    return (
        <div>
            <label className="label" for="name">{ labelText }</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor:'blue', color:'white'}}>
                { buttonText.text }
            </button>
        </div>
        );
}

ReactDOM.render( <App />, document.querySelector('#root'));
