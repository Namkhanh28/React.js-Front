import React, { Component } from 'react'

interface PropsType {
    content: string;
}

interface StateType {
    content: string;
}

export default class Header extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            content: "Header Component"
        };
    }

    render() {
        return (
            <div>{this.state.content}</div>
        );
    }
}
