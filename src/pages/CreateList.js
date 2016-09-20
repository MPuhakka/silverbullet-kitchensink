import React from 'react';
import {connect} from 'react-redux';
import {Form, Grid, FormControl, ControlLabel, Button, Glyphicon, Row, Col, Well, FormGroup} from 'react-bootstrap';


import ModalShareList from './ModalShareList';
import TodoListItem from './TodoListItem';

class CreateList extends React.Component {


  constructor(props) {

    super(props);
    this.state = {
      itemTitle: ''
    };
  }

  saveDisabled() {
    if (this.state.listTitle) return false;
    return true;
  }

  handleSaveButton() {
    var data = {
      items: this.props.items,
      title: this.state.listTitle
    };
    console.log(data);
  }

  handleAddItemButton(name) {
    if (!!name) {
      //save
      this.setState({itemTitle: ''});
    }
  }

  handleItemRemoval(id) {
//    this.props.removeItem(id);
  }


  render() {
    var {items} = this.props;

    return (
      <div className="todo-create-list-container">
        <Grid>

          <h1>Create a new list</h1>

          <Form>
            <FormGroup>
              <Row>
                <Col xs={12}>
                  <ControlLabel>Title</ControlLabel>
                  <FormControl value={this.state.listTitle}
                               type="text"
                               placeholder="Enter title"
                               onChange={(e) => this.setState({listTitle: e.target.value})}/>
                </Col>
              </Row>

              <br />

              <Well>
                <ControlLabel>Items</ControlLabel>
                {items.map(item => {
                    return (
                      <TodoListItem key={item.id}
                                    removeFn={(e) => this.handleItemRemoval(item.id)}
                                    id={item.id}>{item.name}</TodoListItem>
                    );
                  }
                )}

                <Row className="todo-create-list-add-item-container">

                  <Col xs={11}>
                    <FormControl value={this.state.itemTitle}
                                 type="text"
                                 placeholder="Item title"
                                 onChange={(e) => this.setState({itemTitle: e.target.value})}/>
                  </Col>

                  <Col xs={1}>
                    <Button bsStyle="primary"
                            disabled={!this.state.itemTitle}
                            onClick={() => this.handleAddItemButton(this.state.itemTitle)}>
                      <Glyphicon glyph="plus"/>
                    </Button>
                  </Col>
                </Row>
              </Well>


              <Row>
                <Col xs={1}>
                  <Button bsStyle="success"
                          onClick={() => this.handleSaveButton()}
                          disabled={this.saveDisabled()}>

                    <Glyphicon glyph="save"/> Save</Button>
                </Col>
                <Col xs={1}>
                  <ModalShareList></ModalShareList>
                </Col>
              </Row>
            </FormGroup>
          </Form>

        </Grid>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.createList ? state.createList.items : [],
  };
}

export default connect(mapStateToProps, {

})(CreateList);
