import {useEffect, useState} from 'react';
import {useExamples} from './useExamples';


export type RecordItem = {
    note: string,
    category: string,
    amount: string,
    tagId: number,
    date: string,
}

export const useRecords = () => {
    const {testRecords} = useExamples();
    const [records, setRecords] = useState<RecordItem[]>(testRecords);

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);
    const addRecord = (record: RecordItem) => {
        if (record.amount === '0.00') {
            alert('请输入金额');
            return false;
        }
        setRecords([...records, record]);
        return true;
    };
    useEffect(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);

    return {records, addRecord};
};