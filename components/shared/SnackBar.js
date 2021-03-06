import React, { PureComponent } from 'react';
import './less/snackbar.less'

export class Snackbar extends PureComponent {
  state = {
    isActive: false,
  }

  openSnackBar = () => {
    // this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 10000);
      // }, this.props.duration ? this.props.duration : 3000);
    });
  }

  close = () => {
    this.setState({ isActive: false });
  }

  render() {
    return (
      <div className="snackbar_wrapper"> 
        <div className={ this.state.isActive ? `snackbar show ${this.props.type} ${this.props.position}` : `snackbar hide ${this.props.type}` }>
          <div className="message">
              { this.props.message }
          </div>

          {
              this.props.showClose ? 
              <button onClick={() => this.close()} className="close">Close</button> : null
          }                
        </div>
      </div>
    )
  }
}