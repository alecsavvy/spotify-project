import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Result from './Result';
import ReactScrollableList from 'react-scrollable-list'
// https://www.npmjs.com/package/react-scrollable-list
// https://github.com/fedosejev/checkboxes-in-react/blob/master/source/js/components/Application.js

const items = [
  'One',
  'Two',
  'Three',
];

class AllSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {
        results: this.props.results,
        metroResults: this.props.metroResults,
    }
}
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label.displayName}
      performances={label.performance}
      handleCheckboxChange={this.toggleCheckbox}
      key={label.id}
    />
  )

  createCheckboxes = () => (
    this.props.metroResults.map(this.createCheckbox)
  )

  createResult = content => (
    <Result
      content={content}
      key={content.id}
    />
  )
  
  createResults = () => (
    this.props.metroResults.map(this.createResult)
  )

  render() {
    let results = {
      city:{
          country: {
              displayName: '',
          },
          displayName: '',
          lat: '',
          lng: '',
      },
      metroArea:{
          id: '',
      }
  };

  if (this.props.results !== null) {
      results = this.props.results;
  }
    return (
      <div className="container">
          Selected artists will go here!
      </div>
    );
  }
}

export default AllSelected;