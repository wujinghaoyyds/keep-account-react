import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px 20px 0;

  > label {
    > input {
      border: 1px solid #ccc;
      padding:2px;
      border-radius: 3px;
      box-shadow: inset 0 1px #F3F3F3, 0 1px #F3F3F3;
      background-color: #F3F3F3;
      color: #333333;
      font-size: 16px;
      cursor:pointer;
    }
  }
`;
type Props = {
    value: string,
    onChange: (value: string) => void
}
const TimeBarSection: React.FunctionComponent<Props> = (props) => {
    const nowDate = props.value;
    return (
        <Wrapper>
            <label>
                <input type="date" value={nowDate} onChange={(e) => props.onChange(e.target.value)}/>
            </label>
        </Wrapper>
    );
};
export default TimeBarSection;