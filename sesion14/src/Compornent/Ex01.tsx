import React, { Component } from 'react'
interface state {
    userName: string;
}
export default class Ex01 extends Component <object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            userName :"Nam Khanh"
        };
    }
  render() {
    return (
      <div>
        <p style={{fontSize: '30px'}}>Họ và tên: <b>{this.state.userName}</b></p>
      </div>
    )
  }
}
