import styled from 'styled-components';

const DisplayWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const DisplayContent = styled.div`
  flex: 5;
  overflow: auto;
  background: #F5F5F5;
  padding: 0 10px;

  > div {
    background: #FFFFFF;
    margin-top: 10px;
    border-radius: 10px;
  }
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.income {
    background: #FFEDE3;

    .icon {
      fill: #FF6400;
    }
  }

  &.expenditure {
    background: #E8F1FF;

    .icon {
      fill: #005DFF;
    }
  }
`;
export {DisplayWrapper, DisplayContent, IconWrapper};