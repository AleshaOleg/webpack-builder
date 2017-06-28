import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Builder</div>
        <div>Oleh Aloshkin</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app')[0]);