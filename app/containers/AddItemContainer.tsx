import React from 'react';
import AddItemComponent from '../Components/AddItemComponent';

interface AddItemContainerProps {
  onAddButtonClicked: (addItemText: string) => void;
  errorState: any;
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
    this.setState({ addItemText: (event.target as HTMLInputElement).value });
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
