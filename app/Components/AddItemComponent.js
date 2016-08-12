import React from 'react';
import { TextField, FlatButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddItemComponent = ({ onAddItemTextChange, addItemText, onAddButtonClicked, errorState }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      autoFocus
      type="text"
      name="itemName"
      floatingLabelText="Add Item"
      onChange={onAddItemTextChange}
      value={addItemText}
      errorText={errorState.inError ? errorState.errorMessage : ''}
      style={{ width: '80%', border: 'medium' }}
    />
    <FlatButton
      onClick={onAddButtonClicked}
      icon={<ContentAdd />}
      style={{ marginTop: 25, minWidth: 50 }}
      primary
    />
  </div>
);

AddItemComponent.propTypes = {
  onAddButtonClicked: React.PropTypes.func.isRequired,
  onAddItemTextChange: React.PropTypes.func.isRequired,
  addItemText: React.PropTypes.string.isRequired,
  errorState: React.PropTypes.object.isRequired,
};

export default AddItemComponent;
