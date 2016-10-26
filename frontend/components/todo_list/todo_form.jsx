import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      title: "",
      body: "",
      done: false
    };

    console.log(this.state.title);

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const todo = Object.assign({}, this.state);

    this.props.createTodo({todo});
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    console.log(this.state.title);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               name="title"
               value={this.state.title}
               onChange={this.updateTitle}/>
             <br />
        <input type="text"
               name="body"
               onChange={this.updateBody}
               value={this.state.body}/>
               <br />
        <button>Create Todo!</button>
           </form>
    );
  }
}

export default TodoForm;
