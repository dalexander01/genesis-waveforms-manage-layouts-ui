import React from 'react';
import AddItemComponent from '../Components/AddItemComponent';
import ErrorState from './ErrorState';

interface AddItemContainerProps {
  onAddButtonClicked: (addItemText: string) => void;
  errorState: ErrorState;
}

interface AddItemContainerState {
  addItemText: string;
}
class AddItemContainer extends React.Component<AddItemContainerProps, AddItemContainerState> {
  constructor(props: AddItemContainerProps) {
    super(props);
    this.state = { addItemText: '' };
    this.handleAddItemTextChange = this.handleAddItemTextChange.bind(this);
    this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
  }

  handleAddButtonClicked() {
    this.props.onAddButtonClicked(this.state.addItemText);
    this.setState({ addItemText: '' });
  }

  handleAddItemTextChange(e: any) {
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

export default AddItemContainer;
