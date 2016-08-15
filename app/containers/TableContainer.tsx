import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn,  Paper, RaisedButton, TextField, FontIcon, FlatButton, Divider}
  from 'material-ui';
import {green500, red500, blue500, grey500} from 'material-ui/styles/colors';
import AddItemContainer from './AddItemContainer';
import ErrorState from './ErrorState';

interface TableContainerState {
  items?: Array<string>;
  hoverRow?: number;
  editRow?: number;
  editText?: string;
  errorState?: ErrorState;
  editItemErrorState?: ErrorState;
}

class TableContainer extends React.Component<any, TableContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        'item1',
        'item2',
        'item3',
      ],
      hoverRow: null,
      editRow: null,
      editText: '',
      errorState: {
        inError: false,
        errorMessage: '',
      },
      editItemErrorState: {
        inError: false,
        errorMessage: '',
      },
    };
    this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
    this.getTableRow = this.getTableRow.bind(this);
    this.handleRowHover = this.handleRowHover.bind(this);
    this.handleRowHoverExit = this.handleRowHoverExit.bind(this);
    this.onItemTextChange = this.onItemTextChange.bind(this);
    this.handleOkClicked = this.handleOkClicked.bind(this);
    this.handleCancelClicked = this.handleCancelClicked.bind(this);
  }

  onItemTextChange(e: any) {
    this.setState({ editText: e.target.value });
  }

  getTableRow(i: number, item: string) {
    if (this.state.hoverRow !== i && this.state.editRow !== i) {
      return (
        <TableRow hoverable key={i} selectable={false}>
          <TableRowColumn>{item}</TableRowColumn>
          <TableRowColumn />
        </TableRow>
      );
    } else if (this.state.editRow === i) {
      return (
        <TableRow key={i} selectable={false}>
          <TableRowColumn>
            <TextField
              type="text"
              name="itemName"
              hintText={item}
              onChange={this.onItemTextChange}
              autoFocus
              floatingLabelText="Edit Item Name"
              errorText={this.state.editItemErrorState.inError ?
                this.state.editItemErrorState.errorMessage : ''}
              maxLength={20}
            />
          </TableRowColumn>
          <TableRowColumn>
            <div style={{ float: 'right' }}>
              <FlatButton
                icon={<FontIcon className="material-icons" color={green500}>done</FontIcon>}
                style={{ minWidth: 50, width: 50, margin: 5 }}
                title="Done"
                onClick={() => this.handleOkClicked(i)}
              />
              <FlatButton
                icon={<FontIcon className="material-icons" color={red500}>cancel</FontIcon>}
                style={{ minWidth: 50, width: 50, margin: 5 }}
                title="Cancel"
                onClick={this.handleCancelClicked}
              />
            </div>
          </TableRowColumn>
        </TableRow>
      );
    }
    return (
      <TableRow hoverable key={i} selectable={false}>
        <TableRowColumn>{item}</TableRowColumn>
        <TableRowColumn>
          <div style={{ float: 'right' }}>
            <FlatButton
              icon={<FontIcon className="material-icons" color={grey500}>create</FontIcon>}
              style={{ minWidth: 50, width: 50, margin: 5 }}
              onClick={() => this.handleEditClicked(i)}
              title="Edit"
            />
            <FlatButton
              icon={<FontIcon className="material-icons" color={red500}>delete_forever</FontIcon>}
              style={{ minWidth: 50, width: 50, margin: 5 }}
              onClick={() => this.handleDeleteClicked(i)}
              title="Delete"
            />
          </div>
        </TableRowColumn>
      </TableRow>
    );
  }

  handleOkClicked(index: number) {
    if (this.state.items.includes(this.state.editText)) {
      this.setState({
        editItemErrorState: {
          inError: true,
          errorMessage: 'An item with this name already exists.',
        },
      });
    } else if (this.state.editText.trim() === '') {
      this.setState({
        editItemErrorState: {
          inError: true,
          errorMessage: 'Item name cannot be blank',
        },
      });
    } else {
      const tempItems = this.state.items.slice();
      tempItems[index] = this.state.editText;
      this.setState({
        items: tempItems,
        editRow: null,
        editItemErrorState: {
          inError: false,
          errorMessage: '',
        },
      });
    }
  }

  handleCancelClicked() {
    this.setState({
      editRow: null,
      editText: '',
      errorState: {
        inError: false,
        errorMessage: '',
      },
      editItemErrorState: {
        inError: false,
        errorMessage: '',
      },
    });
  }

  handleDeleteClicked(index: number) {
    const newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }

  handleEditClicked(i: number) {
    this.setState({
      editRow: i,
      editText: '',
    });
  }

  handleAddButtonClicked(item: string) {
    if (this.state.items.includes(item)) {
      this.setState({
        errorState: {
          inError: true,
          errorMessage: 'An item with this name already exists. Item names must be unique',
        },
      });
    } else {
      const newItems = this.state.items.slice();
      newItems.push(item);
      this.setState({
        items: newItems,
        errorState: {
          inError: false,
          errorMessage: '',
        },
      });
    }
  }

  handleRowHover(i: number) {
    this.setState({ hoverRow: i });
  }
  handleRowHoverExit() {
    this.setState({
      hoverRow: null,
    });
  }
  render() {
    return (
      <div>
        <Paper style={{ padding: 10, width: 500 }}>
          <AddItemContainer
            onAddButtonClicked={this.handleAddButtonClicked}
            errorState={this.state.errorState}
          />
          <div style={{ paddingTop: 50 }}>
          <span style={{ color: blue500 }}>Items</span><Divider style={{ margin: 20 }} />
            <Table
              onRowHover={this.handleRowHover}
              onRowHoverExit={this.handleRowHoverExit}
              selectable={false}
            >
              <TableBody displayRowCheckbox={false} showRowHover>
                  {this.state.items.map((item, i) =>
                    this.getTableRow(i, item)
                  )}
              </TableBody>
            </Table>
          </div>
          <div style={{ textAlign: 'right' }}>
            <RaisedButton label="Save" primary style={{ margin: 10 }} />
            <RaisedButton label="Cancel" style={{ margin: 10 }} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default TableContainer;
