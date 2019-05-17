import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from 'Atoms/ErrorMessage';
import Currencies from 'Molecules/Currencies';
import Header from 'Molecules/Header';
import Styled from './Index.styled.js';

class Index extends Component {
  static defaultProps = {

  };

  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
    currencies: PropTypes.arrayOf(PropTypes.object),
    err: PropTypes.number,
    getCurrencies: PropTypes.func,
    getCurrency: PropTypes.func,
  };

  timeout = null;

  componentDidMount() {
    this.props.getCurrencies();
  }

  getCurrency = ({ target }) => {
    const { value } = target;
    const { getCurrency } = this.props;
    if (this.timeout)
      clearTimeout(this.timeout);
    this.timeout = setTimeout(() => getCurrency(value), 300);
  }

  render() {
    const { currencies, err } = this.props;
    return (
      <Styled>
        <Header name="header" getCurrency={this.getCurrency} />
        <main>
        {(err && (
          <ErrorMessage err={err} />
        )) || (
          <Currencies items={currencies} />
        )}
        </main>
      </Styled>
    );
  }
}

export default Index;
