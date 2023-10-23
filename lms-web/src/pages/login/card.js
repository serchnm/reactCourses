import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

class Card extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {

      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            
              <Input 

                placeholder="Username"
              />,
            
          </Form.Item>
          <Form.Item>
          
              <Input
              
                
                type="password"
                placeholder="Password"
              />,
            
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
  export default Card;