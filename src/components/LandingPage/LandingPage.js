import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';


import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    console.log("we in this thang",this.props.store.getMenu);

    return (
      
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                

        {this.props.store.getMenu.map((menu) => {
          return (
            <>
            <div>{menu.name}</div>
            <div>{menu.price}</div>
            </>
            )
        })}
              </Grid>
            </Grid>
          </div>
          
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(LandingPage);
