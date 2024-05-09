import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Message sent successfully!');
    form.resetFields(); // Reset form after submission for future use
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Submission failed! Please check the form.');
  };

  return (
    <Form
      form={form}
      name="contact_form"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' }
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        name="subject"
        label="Subject"
        rules={[{ required: true, message: 'Please input the subject of your message!' }]}
      >
        <Input placeholder="Enter the subject" />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <TextArea rows={4} placeholder="Enter your message" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<MailOutlined />}>
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
