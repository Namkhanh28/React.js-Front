import React, { Component } from 'react';
interface state{
    fullname: string;
}
export default class Excercise01 extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullname: "Son Tùng M-TP"
        };
    }
    render() {
        return(
            <div>
                <p style={{fontSize: '30px'}}>Họ và tên: <b>{this.state.fullname}</b></p>
            </div>
        )
    }
}