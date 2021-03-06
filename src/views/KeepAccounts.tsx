import React, {useState} from 'react';
import CategorySection from './keepAccountsPage/CategorySection';
import NoteSection from './keepAccountsPage/NoteSection';
import NumberPadSection from './keepAccountsPage/NumberPadSection';
import TimeBarSection from './keepAccountsPage/TimeBarSection';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import TagsSection from './keepAccountsPage/TagsSection';
import {useRecords} from '../hooks/useRecords';
import {useDates} from '../hooks/useDates';
import {AmountWrapper, Layout} from '../style/CssWrapper';

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

function KeepAccounts() {
    const {localDate} = useDates();
    const defaultFormData = {
        amount: '0.00',
        category: '-' as ('-' | '+'),
        date: localDate,
        note: '',
        tagId: 0,
    };
    const [selected, setSelected] = useState(defaultFormData);
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});
    };
    const {addRecord} = useRecords();
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected({
                amount: '0.00',
                category: selected.category,
                date: localDate,
                note: '',
                tagId: selected.tagId,
            });
        }
    };
    const initialTagId = (category: ('-' | '+')) => {
        if (category === '+') {
            setSelected({
                amount: '0.00',
                category: '+',
                date: localDate,
                note: '',
                tagId: 100,
            });
        }
        if (category === '-') {
            setSelected({
                amount: '0.00',
                category: '-',
                date: localDate,
                note: '',
                tagId: 0,
            });
        }
    };
    return (
        <Layout>
            <Main>
                <CategorySection value={selected.category} onChange={(category) => initialTagId(category)}/>
                <AmountWrapper>
                    <output>{selected.amount}</output>
                    <span>元</span></AmountWrapper>
                <TagsSection categoryColor={selected.category} value={selected.tagId}
                             onChange={(tagId) => onChange({tagId})}/>
                <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
                <TimeBarSection value={selected.date} onChange={(date) => onChange({date})}/>

                <NumberPadSection categoryColor={selected.category} value={selected.amount}
                                  onChange={(amount) => onChange({amount})} onOk={submit}
                />
            </Main>
            <NavigationBar/>
        </Layout>
    );
}

export default KeepAccounts;