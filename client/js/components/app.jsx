import React from 'react';

class formComponent extends React.Component {

  constructor(props) {
      super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit action', e);
  }

  handleOnChange = (field, e) => {
    console.log('peep');
    console.log('field ==', e.target.value);
  }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <form onSubmit={this.handleSubmit} method="GET">
          <input type="text" name="searchTerm" onChange={this.handleOnChange.bind(null, 'searchTerm  ')} autoFocus/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default formComponent;
