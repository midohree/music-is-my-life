import PropTypes from 'prop-types';
import styled from 'styled-components';

function Radio({
  onChange,
}) {
  return (
    <Wrapper>
      <div>
        <label>
          <input type='checkbox' value='ascRelease' name='ascRelease' onChange={onChange} />
          발매일자 오름차순
        </label>
        <label>
          <input type='checkbox' value='descRelease' name='descRelease' onChange={onChange}/>
          발매일자 내림차순
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' value='ascName' name='ascName' onChange={onChange}/>
          가수이름 오른차순
        </label>
        <label>
          <input type='checkbox' value='ascRelease' name='ascRelease' />
          가수이름 내림차순
        </label>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  font-size: 14px;

  input {
    margin-right: 3px;
  }

  label {
    margin-right: 10px;
  }
`;

export default Radio;

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
};
