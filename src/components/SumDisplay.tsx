import React from 'react';
import styled from 'styled-components';

const Sum = styled.div`
  > ol {
    display: flex;

    > li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 0;

      > span {
        color: #999999;
      }

      > div {
        color: #333333;
        font-size: 22px;
      }
    }
  }
`;
type Props = {
    scopeTotalMoney: string;
    scopeTotalFrequency: number
}
const SumDisplay: React.FunctionComponent<Props> = (props) => {
    return (
        <Sum>
            <ol>
                <li>
                    <span>总金额（元）</span>
                    <div>￥{props.scopeTotalMoney}</div>
                </li>
                <li>
                    <span>记账笔数</span>
                    <div>{props.scopeTotalFrequency}</div>
                </li>
            </ol>
        </Sum>
    );
};
export {SumDisplay};