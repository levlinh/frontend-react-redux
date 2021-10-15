import React from "react";
import { connect } from "react-redux";
import { signUpUser } from "../actions/auth";

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        status: {
          message: ""
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const {email, password} = this.state;
    this.props.dispatchSignupUser({email, password})
      .then(() => this.props.history.push("/"))
      .catch((errors) => this.setState({errors}));
  }

  renderError(){
    const errors = this.state.errors.status.message;
    let errorTag = <div></div>;
    if(errors.length > 0)
      errorTag = <div className="alert alert-success" role="alert"></div>
    
    return errorTag;
  }

  render(){
    const {email, password} = this.state;
    return(
      <div className="container">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderError()}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control" 
            type="password" 
            id="exampleInputPassword1" 
            placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signUpUser(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Signup);
