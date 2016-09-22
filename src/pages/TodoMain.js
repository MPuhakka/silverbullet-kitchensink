import React from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon, Row, Col, Grid, ListGroup } from 'react-bootstrap';
import TodoListItem from '../pages/TodoListItem';
import Actions from '../actions/Creators';

class TodoMain extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    lists: React.PropTypes.array,
  }

  static contextTypes = {
    router: React.PropTypes.object,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    Actions(dispatch).refreshLists();
  }

  navigateTo(e, url) {
    e.preventDefault();
    e.stopPropagation();
    this.context.router.push(url);
  }

  render() {
    const { lists } = this.props;
    var AddNewButton = (
      <Button
        href="/reactDemo/create-list"
        className="todo-button"
      >
        <Glyphicon glyph="plus" /> Add a new list
      </Button>
    );

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {
                lists && lists.map ?
                lists.map(list => this.renderTodoListItem(list)) :
                "You haven't got any lists, man"
              }
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}> { AddNewButton }</Col>
        </Row>
      </Grid>
    );
  }

  renderTodoListItem(list) {
    const listPath = '/reactDemo/list/';
    return (
      <TodoListItem
        key={list.id}
        href={listPath + list.id}
        onClick={e => this.navigateTo(e, listPath)}
      >
        {list.title}
      </TodoListItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.todo.lists,
  };
}

export default connect(mapStateToProps)(TodoMain);
