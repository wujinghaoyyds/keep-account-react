import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-size: 24px;
  display: flex;
  padding: 6px 0;
  border-top: 1px solid #E3E3E3;
  background: #F5F5F5;

  > .numberKeys {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    > button {
      border: none;
      width: 28%;
      height: 40px;
      color: #333333;
      margin: 4px 0;
      border-radius: 10px;
      background: #FFFFFF;
      cursor: pointer;

      &.zero {
        width: 44%;
      }

      &.dot {
        width: 44%;
      }
    }
  }

  > .functionKeys {
    width: 25%;
    display: flex;
    flex-direction: column;

    > button {
      border: none;
      width: 84%;
      border-radius: 10px;
      color: #333333;
      margin: 4px 0;
      background: #FFFFFF;
      cursor: pointer;

      &.delete {
        height: 40px;
      }

      &.expenditureColor {
        height: 136px;
        float: right;
        background: #85B6F9;
      }

      &.incomeColor {
        height: 136px;
        float: right;
        background: #FFAB84;
      }
    }
  }
`;

type Props = {
    value: string;
    categoryColor: string,
    onChange: (value: string) => void,
    onOk: () => void
}
const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    const [numberList] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const output = props.value;
    const setOutput = (value: string) => {props.onChange(value);};
    const inputFunction = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (output.length < 12) {
            if (text === null) {
                return;
            } else if (text === '.') {
                if (output === '0.00') {
                    setOutput('0.');
                } else if (output.indexOf('.') >= 0) {
                    setOutput(output);
                } else {
                    setOutput(output + '.');
                }
            } else {
                output === '0.00' ? setOutput(text) : setOutput(output + text);
            }
        } else {
            setOutput(output);
        }
    };
    const deleteFunction = () => {
        if (output === '0.00') {
            setOutput('0.00');
        } else if (output.length === 1) {
            setOutput('0.00');
        } else {
            setOutput(output.slice(0, -1));
        }
    };
    return (
        <Wrapper>
            <div className="numberKeys" onClick={inputFunction}>
                {numberList.map(x => <button key={x}>{x}</button>)}
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
            <div className="functionKeys">
                <button className="delete" onClick={deleteFunction}>删除</button>
                <button className={props.categoryColor === '-' ? 'expenditureColor' : 'incomeColor'}
                        onClick={() => props.onOk()}
                >OK
                </button>
            </div>
        </Wrapper>
    );
};

export default NumberPadSection;