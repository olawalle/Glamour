import React, { Component } from 'react'

export default class CustomImageUploader extends Component {

  state = {
    customUploader: {
        cursor: 'pointer',
        position: 'relative',
        top: '0',
        zIndex: '40',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        cursor: 'pointer'
    },
    customUploaderChildren: {
        height: '100%',
        width: 'auto',
        position: 'relative',
        top: '0',
        zIndex: '20'
    },
    input: {
      cursor: "pointer",
      width: '100%',
      height: '100%' ,
      position: 'relative',
      top: '0',
      zIndex: '30',
      opacity: '0',
    }
  }

  dropdown = (e) => {
    let file = e.target.files[0]
    this.props.getImageFile ? this.props.getImageFile(file) : null
    this.getBase64(file)
  }

  getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () => {
      this.props.getImageString ? this.props.getImageString(reader.result) : null
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  componentDidMount() {
    this.setState(
      {
        customUploaderChildren: {
        height: '100%',
        position: 'relative',
        top: `-${this.refs.componentChildren.clientHeight}px`,
        zIndex: '20'
      },
      input: {
        width: '100%',
        height: `${this.refs.componentChildren.clientHeight}px`,
        position: 'relative',
        top: '0',
        zIndex: '30',
        opacity: '0',
      },
      customUploader: {
          position: 'relative',
          top: '0',
          zIndex: '40',
          overflow: 'hidden',
          width: `${this.refs.componentChildren.clientWidth}px`,
          maxHeight: `${this.refs.componentChildren.clientHeight}px`,
          cursor: 'pointer'
      }
    })
  }

  render() {
    return (
      <div style={this.state.customUploader} ref="imageUploader">
        <input type="file" style={this.state.input} title="Click to upload image" onDrop={() => this.dropdown(event)} onChange={() => this.dropdown(event)} id="test" multiple />
        <div style={this.state.customUploaderChildren} ref="componentChildren">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
