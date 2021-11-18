import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';

const ExhibitionNavWrapper = styled.nav`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 10px;

  > div {
    display: flex;
    align-content: center;

    > span {
      font-size: 16px;
      color: #999999;
      text-align: center;
    }

    .icon {
      fill: #333333;
    }
  }

  > ul {
    display: flex;
    align-items: center;
    color: #333;

    > li {
      padding: 2px 8px;
      border-radius: 20px;
      margin-right: 10px;

      &.expenditureSelected {
        background: #1678FF;
        color: #ffffff;
        font-weight: bold;
      }

      &.incomeSelected {
        background: #FD6112;
        color: #ffffff;
        font-weight: bold;
      }
    }
  }
`;
type Props = {
    dateValue: string
    categoryValue: '-' | '+'
    dateOnChangeLeft: () => void
    dateOnChangeRight: () => void
    categoryOnChange: (x: '-' | '+') => void
}
const ExhibitionNav: React.FunctionComponent<Props> = (props) => {
    return (
        <ExhibitionNavWrapper>
            <div>
                <Icon name="left" onClick={() => props.dateOnChangeLeft()}/>
                <span>{props.dateValue}</span>
                <Icon name="right" onClick={() => props.dateOnChangeRight()}/>
            </div>
            <ul>
                <li className={props.categoryValue === '-' ? 'expenditureSelected' : ''}
                    onClick={() => {props.categoryOnChange('-');}}
                ><span className="expenditure">支出</span></li>
                <li className={props.categoryValue === '+' ? 'incomeSelected' : ''}
                    onClick={() => {props.categoryOnChange('+');}}
                ><span className="income">收入</span></li>
            </ul>
        </ExhibitionNavWrapper>
    );
};
export default ExhibitionNav;