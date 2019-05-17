import styled from 'styled-components';
import media from 'Styles/methods/media';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
    justify-content: space-around;
  `}
  [type="search"] {
    border-width: 0;
    padding: .5rem .5rem .5rem 1rem;
    background: #e6e6e6;
    border-radius: 2.5rem;
    transition: all .1s ease-out;
    border-style: solid;
    &:focus {
      outline: none;
      background: transparent;
      box-shadow: inset 3px -2px 4px #cccccc,
        inset 0px 1px 3px #cccccc,
        inset 3px 1px 4px #cccccc;
    }
  }
`;
