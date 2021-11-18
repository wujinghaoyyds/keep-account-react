import styled from 'styled-components';

const ScreenWrapper = styled.div`
  @media (min-width: 501px) {
    > div {
      width: 320px;
      height: 568px;
      position: absolute; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid black;
    }
  }
  @media (max-width: 501px) {
    > div {
      height: 100vh;
      width: 100vw;
    }
  }
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export {ScreenWrapper,LayoutWrapper, MainWrapper};