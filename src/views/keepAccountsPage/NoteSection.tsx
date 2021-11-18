import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  padding: 12px 24px;

  > label {
    > input {
      width: 100%;
      background: none;
      border: none;
    }
  }
`;
type Props = {
    value: string;
    onChange: (value: string) => void
}

const NoteSection: React.FunctionComponent<Props> = (props) => {
    const note = props.value;
    return (
        <Wrapper>
            <label>
                <input type="text" placeholder="添加备注 . . ." value={note}
                       onChange={(e) => props.onChange(e.target.value)}
                />
            </label>
        </Wrapper>
    );
};

export default NoteSection;