import React from 'react';
import set from 'lodash/set';

class formComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        formData: {
          searchTerm: ''
        },
        error: false,
      }
  }

  parseTextInput = (searchTerm) => {
    const regEx = /^\w+$/;
    return regEx.test(searchTerm);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit action', e);
  }

  handleOnChange = (field, e) => {
    if (this.parseTextInput(e.target.value) === true) {
      const stateData = Object.assign({}, this.state);
      set(stateData, `formData[${field}]`, e.target.value);
      set(stateData, 'error', false);
      this.setState({
        formData: stateData.formData,
        error: stateData.error,
      });
    } else if (this.parseTextInput(e.target.value) === false) {
      this.setState({
        formData: this.state.formData,
        error: true
      });
    }
  }

  render() {
    console.log('this state ===', this.state.error);
    const errorMessage = (<div className="error">Characters aren't allowed round these neck of the woods</div>);
    const hasError = (this.state.error === true ? errorMessage : null)

    return (
      <div>
        <h2>Hello</h2>
        <form onSubmit={this.handleSubmit} method="GET">
          <input type="text" name="searchTerm" onChange={this.handleOnChange.bind(null, 'searchTerm')} autoFocus/>
          <button type="submit">Submit</button>
        </form>
        { hasError }
      </div>
    )
  }
}

export default formComponent;
