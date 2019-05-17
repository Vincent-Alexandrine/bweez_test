import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Styled from './ErrorMessage.styled.js';

function ErrorMessage({ err }) {
  const [t] = useTranslation();
  return (
    <Styled>
      {t(`error.${err}`)}
    </Styled>
  );
}

ErrorMessage.propTypes = {
  err: PropTypes.number,
};

export default ErrorMessage;
