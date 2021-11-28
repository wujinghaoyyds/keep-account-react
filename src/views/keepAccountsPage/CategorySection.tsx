import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

    > li {
      width: 50%;
      display: flex;
      justify-content: center;
      padding:8px 0;

      > span {
        cursor:pointer;
        &.expenditure {
          margin-left: 40%;
        }

        &.income {
          margin-right: 40%;
        }
      }

      &.expenditureSelected {
        color: #1678FF;
        font-weight: bold;
      }

      &.incomeSelected {
        color: #FD6112;
        font-weight: bold;
      }
    }
  }
`;

type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void,
}

const CategorySection: React.FunctionComponent<Props> = (props) => {
    const category = props.value;
    return (
        <Wrapper>
            <ul>
                <li className={category === '-' ? 'expenditureSelected' : ''}
                    onClick={() => {props.onChange('-');}}>
                    <span className="expenditure">支出</span></li>
                <li className={category === '+' ? 'incomeSelected' : ''}
                    onClick={() => {props.onChange('+');}}><span
                    className="income">收入</span></li>
            </ul>
        </Wrapper>
    );
};

export default CategorySection;