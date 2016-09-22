import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

// BOOTSTRAP
import {ListGroupItem, Glyphicon} from 'react-bootstrap';


class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getPrettyDate(date) {
    if (!!date) return moment().format('DD.mm.YYYY - HH:mm');
    return null;
  }

  handleRemove(id) {
    !!this.props.removeFn ? this.props.removeFn() : console.warn('TodoListItem: Callback function has not been set');
  }

  render() {
    var { children } = this.props;
    console.log(this.props)

    var {children} = this.props;
    return (
      <ListGroupItem href={this.props.href} className="todo-list-item">
        <div className="todo-list-item-title">
          <span>{children}</span>
          <span>
            <Glyphicon className="time"
                       glyph="time"/> {this.getPrettyDate(this.props.date)}
                       </span>
        </div>
        <Glyphicon
          glyph="remove"
          className="todo-list-item-remove-item"
          onClick={() => this.handleRemove()}
        />
      </ListGroupItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.TodoListItem ? state.TodoListItem.items : [],
  };
}

export default connect(mapStateToProps, {})(TodoListItem);
