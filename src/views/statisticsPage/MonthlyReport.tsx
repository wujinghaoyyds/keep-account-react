import ExhibitionNav from '../../components/ExhibitionNav';
import React, {useState} from 'react';
import {useDates} from '../../hooks/useDates';
import styled from 'styled-components';
import {DisplayContent, DisplayWrapper, IconWrapper} from '../../style/DisplayCss';
import {RecordItem, useRecords} from '../../hooks/useRecords';
import {useTags} from '../../hooks/useTags';
import dayjs from 'dayjs';
import {SumDisplay} from '../../components/SumDisplay';
import Icon from '../../components/Icon';

const RankMonth = styled.div`
  padding: 10px 30px 10px 10px;
  color: #333333;
  >h3{
    font-size: 18px;
    font-weight: bolder;
    padding:10px 10px;
  }
`;
const Item = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top:10px;

  > div {
    display: flex;
    align-items: center;

    > div {
      margin: 0 8px;

      &.tags {
        font-weight: bolder;
        font-size: 14px;
      }
    }
  }
`;
const MonthlyReport = () => {
    const {month, changeMonth, monthScope} = useDates();
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName, getIconName} = useTags();

    const currentRecords = records.filter(x => dayjs(x.date.slice(0, 7)).format('YYYY年MM月') === monthScope);
    const monthHash: { [tagKey: number]: RecordItem[] } = {};// {'tagId': [item, item], 'tagId': []}
    const displayRecords = currentRecords.filter(r => r.category === category);
    const amountArray = displayRecords.map(el => parseFloat(el.amount));
    const monthAmount = amountArray.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    displayRecords.map(r => {
        const key = r.tagId;
        if (!(key in monthHash)) {monthHash[key] = [];}
        return monthHash[key].push(r);
    });

    const array = Object.entries(monthHash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });
    const hash: { [tag: string]: number } = {};
    array.map(([tagId, records]) => {
        const key = tagId;
        if (!(key in hash)) {hash[key] = 0;}
        hash[key] = records.map(el => parseFloat(el.amount)).reduce((acc, cur) => acc + cur, 0);
        return hash;
    });
    const hashArray = Object.entries(hash).sort((a, b) => {
        if (a[1] === b[1]) return 0;
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        return 0;
    });

    const categoryOnChange = (x: '-' | '+') => {setCategory(x);};
    const onChangeDateLeft = (x: number) => {changeMonth(x);};
    const onChangeDateRight = (x: number) => {changeMonth(x);};
    const zzz = [];
    return (
        <DisplayWrapper>
            <ExhibitionNav categoryValue={category} dateValue={monthScope}
                           dateOnChangeLeft={() => onChangeDateLeft(month - 1)}
                           dateOnChangeRight={() => onChangeDateRight(month + 1)}
                           categoryOnChange={(x) => categoryOnChange(x)}/>
            <DisplayContent>
                <SumDisplay scopeTotalMoney={monthAmount} scopeTotalFrequency={amountArray.length}/>
                <RankMonth>
                    <h3>分类排行</h3>
                    {hashArray.map(([tagId, records]) => <Item key={tagId}>
                        <div>
                            <div className="rank">{zzz.push(tagId)}</div>
                            <IconWrapper className={category === '-' ? 'expenditure' : 'income'}><Icon
                                name={getIconName(parseFloat(tagId))}/></IconWrapper>
                            <div className="tags">{getName(parseFloat(tagId))}</div>
                        </div>
                        <span>￥{records.toFixed(2)}</span></Item>)}
                </RankMonth>
            </DisplayContent>
        </DisplayWrapper>
    );
};
export default MonthlyReport;