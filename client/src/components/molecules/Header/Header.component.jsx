import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Styled from './Header.styled.js';

function Header({ getCurrency, ...props }) {
  const [t] = useTranslation();
  return (
    <Styled {...props}>
      <h1>{t('title')}</h1>
      <input type="search" onChange={getCurrency} />
    </Styled>
  );
}

Header.propTypes = {
  getCurrency: PropTypes.func,
};

export default Header;
