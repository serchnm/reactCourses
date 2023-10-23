import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import { Link} from "react-router-dom";


export default class PersonList extends React.Component {

    state = {
        users: []
      }
    
      columns = [
            {
              title: 'Id',
              dataIndex: 'userId',
              
            },
            {
                title: "Name"
            },
            {
                title: "LastName"
            },
            {
                title: "Email"
            },
            {
                title: 'Status'
            },

      ]
      componentDidMount() {
        axios.get(`https://localhost:6001/api/User`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }

  renderTableData() {
    return this.state.users.map((user) => {
      // eslint-disable-next-line object-curly-newline
      
      const { userId, name, lastName, email, isActive } = user;

      return (
        // eslint-disable-next-line react/jsx-key
        <tr key={userId}>
          <td>{userId}</td>
          <td>{name}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{isActive === true ? 'Inactive' : 'Active'}</td>
        <td>  <Link to="/page2"><Button type="default">hello</Button> </Link></td>
        </tr>
      );
    });
  }

    
      render() {
        return (
            <div className="container">
                <Card type="flex" allign="middle" className="center" style={{width: 600, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Id</th>   
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                    </table>
                </Card>
            </div>
        )
      }
}

