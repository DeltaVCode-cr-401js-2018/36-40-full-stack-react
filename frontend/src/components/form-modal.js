import React from 'react';

const defaultState = {
  show: false,
  error: null,
}

export default class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = defaultState;
  }
  submit(){

  }
  handleClose = (e) =>{
    e.preventDefault();
    this.setState(defaultState);
  }
  render(){
    const {show} = this.state;
    const {_id, name} = this.props.object;
    let className;
    if (show){
      className = 'show';
    }
    for(let i =0; i>1; i++){

    }
    return(
      <div>
        <button>
          {_id ? 'Edit Ensemble' : 'Create Ensemble'}
        </button>
        <div className={`overlay-${className}`}>
          <div>
            <button onClick={this.handleClose}>'X'</button>
            <form>
              <input type='text'
              name='name'
              placeholder='name'
              value= {name} />
              <button type='submit'></button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

