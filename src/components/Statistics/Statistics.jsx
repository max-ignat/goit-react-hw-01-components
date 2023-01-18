import PropTypes from 'prop-types';
import { Component } from 'react';
import React from 'react';
import { Item, Section, SpanEl, StatsList, Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      <LoginForm/>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <SpanEl>{label}</SpanEl>
            <SpanEl>{percentage}%</SpanEl>
          </Item>
        ))}
      </StatsList>
    </Section>
  );
}

class LoginForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
