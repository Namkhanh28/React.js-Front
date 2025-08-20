import { Component } from 'react'
interface User {
  firstName: string;
  lastName: string;
}
export default class FormatName extends Component {
formatName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }
  render() {
    const user: User = {
      firstName: "Nguyen",
      lastName: "Khanh"
    };

    return (
      <div style={{backgroundColor: 'lightblue', padding: '20px'}}>
        <h2>Họ và tên: {this.formatName(user)}</h2>
      </div>
    )
  }
}
