import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.searchPlayer(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
        <input type="text" className="form-control mr-sm-2" placeholder="Enter player name..." value={this.state.value} onChange={this.handleChange} />
        <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Submit" />
      </form>
    );
  }
}

export default NameForm;