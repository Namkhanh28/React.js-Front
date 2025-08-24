import React, { Component } from 'react'

type InfoType = {
    email: string;
};

type FormState = {
    info: InfoType[];
};

export default class Btap1 extends Component<object, FormState> {
    constructor(props: object) {
        super(props);
        this.state = {
            info: [{
                email: "",
            }]
        };
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted")
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState((prevState: FormState) => ({
            info: prevState.info.map((item: InfoType) =>
                name === "email" ? { ...item, email: value } : item
            )
        }));
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h2>Nhập email</h2>
                    <label htmlFor="">Email</label>
                    <br />
                    <input
                        style={{ borderRadius: "5px" }}
                        type="email"
                        name="email"
                        value={this.state.info[0].email}
                        onChange={this.handleChange} />
                    <br />
                    <button style={{ borderRadius: "5px" }} type="submit">Submit</button>
                    <br />
                </form>
            </div>
        )
    }
}
