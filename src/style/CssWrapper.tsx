import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  max-width: 420px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
`;
const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DisplayContent = styled.div`
  overflow: auto;
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
const AmountWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 14px 16px;

  > output {
    font-size: 40px;
    text-align: right;
    padding-right: 10px;
    color: #333333;
  }

  > span {
    font-size: 20px;
  }
`;
export {Layout, DisplayWrapper, DisplayContent, IconWrapper, AmountWrapper};