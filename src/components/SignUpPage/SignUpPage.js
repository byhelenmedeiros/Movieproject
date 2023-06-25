import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor
    console.log(formData);
  };

  return (
    <div>
      <h1>Crie a sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Criar conta
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
