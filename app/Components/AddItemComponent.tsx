import React from 'react';
import { TextField, FlatButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ErrorState from '../containers/ErrorState';

interface AddItemComponentProps {
  onAddItemTextChange: (e: any) => void;
  addItemText: string;
  onAddButtonClicked: () => void;
  errorState: ErrorState;
  onKeyDown: (e: any) => void;
};

const AddItemComponent: React.StatelessComponent<AddItemComponentProps> = ({ onAddItemTextChange,
  addItemText, onAddButtonClicked, errorState, onKeyDown }) => (
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
      onKeyDown={onKeyDown}
    />
    <FlatButton
      onClick={onAddButtonClicked}
      icon={<ContentAdd />}
      style={{ marginTop: 25, minWidth: 50 }}
      primary
    />
  </div>
);

export default AddItemComponent;
