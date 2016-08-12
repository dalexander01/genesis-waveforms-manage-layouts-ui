import React, { PropTypes } from 'react';
import AddItemComponent from '../Components/AddItemComponent';

class AddItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addItemText: '' };
    this.handleAddItemTextChange = this.handleAddItemTextChange.bind(this);
    this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
  }

  handleAddButtonClicked() {
    this.props.onAddButtonClicked(this.state.addItemText);
    this.setState({ addItemText: '' });
  }

  handleAddItemTextChange(e) {
    this.setState({ addItemText: e.target.value });
  }
  render() {
    return (
      <AddItemComponent
        onAddButtonClicked={this.handleAddButtonClicked}
        onAddItemTextChange={this.handleAddItemTextChange}
        addItemText={this.state.addItemText}
        errorState={this.props.errorState}
      />
    );
  }
}

AddItemContainer.propTypes = {
  onAddButtonClicked: PropTypes.func.isRequired,
  errorState: PropTypes.object.isRequired,
};

export default AddItemContainer;
