import React, {useState} from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Icon from 'components/Icon';
import ExhibitionNav from 'components/ExhibitionNav';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTags';
import {useDates} from 'hooks/useDates';
import {DisplayWrapper, DisplayContent, IconWrapper} from '../../style/DisplayCss';
import {SumDisplay} from '../../components/SumDisplay';

const ItemList = styled.div`
  padding: 12px;

  .date {
    color: #999999;
    padding: 0 0 4px 8px;
  }
`;
const Item = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    > p {
      display: flex;
      flex-direction: column;
      margin: 0 10px;

      > span {

        &.tags {
          color: #333;
          padding-bottom: 4px;
        }

        &.note {
          color: #AAAAAA;
          font-size: 10px;
        }
      }
    }
  }

  > span {
    font-size: 16px;

    &.expenditureAmount {
      color: #005DFF
    }

    &.incomeAmount {
      color: #FF6400;
    }

  }
`;
const WeeklyReport: React.FunctionComponent = () => {
    const {oneWeek, saturday, setSaturday, beginOfWeek, endOfWeek, weeklyScope} = useDates();
    const {records} = useRecords();
    const {getName, getIconName} = useTags();
    const [category, setCategory] = useState<'-' | '+'>('-');

    const currentRecords = records.filter(x => x.date <= endOfWeek && x.date >= beginOfWeek);
    const weekHash: { [dateKey: string]: RecordItem[] } = {};// {'2021-11-08': [item, item], '2021-11-11': [], '2021-11-21': [item, item, item]}
    const displayRecords = currentRecords.filter(r => r.category === category);
    const amountArray = displayRecords.map(el => parseFloat(el.amount));
    const weekAmount = amountArray.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    displayRecords.map(r => {
        const key = dayjs(r.date).format('YYYY年MM月DD日');
        if (!(key in weekHash)) {weekHash[key] = [];}
        return weekHash[key].push(r);
    });
    const weekArray = Object.entries(weekHash).sort((x, y) => {
        if (x[0] === y[0]) {
            return 0;
        } else if (x[0] > y[0]) {
            return -1;
        } else if (x[0] < y[0]) {
            return 1;
        } else {return 0;}
    });
    const categoryOnChange = (x: '-' | '+') => {setCategory(x);};
    const onChangeDateLeft = (x: number) => {setSaturday(x);};
    const onChangeDateRight = (x: number) => {setSaturday(x);};
    return (
        <DisplayWrapper>
            <ExhibitionNav categoryValue={category} dateValue={weeklyScope}
                           dateOnChangeLeft={() => onChangeDateLeft(saturday - oneWeek)}
                           dateOnChangeRight={() => onChangeDateRight(saturday + oneWeek)}
                           categoryOnChange={(x) => categoryOnChange(x)}/>
            <DisplayContent>
                <SumDisplay scopeTotalMoney={weekAmount} scopeTotalFrequency={amountArray.length}/>
                {weekArray.map(([date, records]) => <ItemList key={date}>
                    <div className="date">{date}</div>
                    {records.map(x =>
                        <Item key={records.indexOf(x)}>
                            <div>
                                <IconWrapper className={x.category === '-' ? 'expenditure' : 'income'}>
                                    <Icon name={getIconName(x.tagId)}/></IconWrapper>
                                <p className="tagsAndNote">
                                    <span className="tags">{getName(x.tagId)}</span>
                                    <span className="note">{x.note}</span>
                                </p>
                            </div>
                            <span className={x.category === '-' ? 'expenditureAmount' : 'incomeAmount'}>
                                   ￥{parseFloat(x.amount).toFixed(2)}
                                </span>
                        </Item>)}
                </ItemList>)}
            </DisplayContent>
        </DisplayWrapper>
    );
};
export default WeeklyReport;