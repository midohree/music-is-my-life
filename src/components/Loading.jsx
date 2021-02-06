import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { theme } from './styles/theme';
import { fadeIn } from './styles/keyframes';

const Loading = ({ children }) => {
  return (
    <Wrapper>
      {children || <StyledLoader type='Circles' color={theme.salmon} width={55} height={55}/>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-align: center;
`;

const StyledLoader = styled(Loader)`
  animation: 0.6s ${fadeIn};
`;

export default Loading;

Loading.propTypes = {
  children: PropTypes.node,
};
