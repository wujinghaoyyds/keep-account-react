import {useEffect, useState} from 'react';

export type RecordItem = {
    note: string,
    category: string,
    amount: string,
    tagId: number,
    date: string,
}

export const useRecords = () => {
    const nowDate = (time: number) => {return new Date(+new Date() + 8 * 3600 * 1000 + time).toISOString().slice(0, 10);};
    const day = 24 * 3600 * 1000;
    const testRecords = [
        {amount: '14.5', category: '-', date: nowDate(-14 * day), note: '', tagId: 3,},
        {amount: '10.5', category: '-', date: nowDate(-14 * day), note: '', tagId: 4,},
        {amount: '100', category: '-', date: nowDate(-14 * day), note: '此位置为备注', tagId: 8,},
        {amount: '620', category: '-', date: nowDate(-14 * day), note: '', tagId: 8,},
        {amount: '282.8', category: '-', date: nowDate(-14 * day), note: '此位置为备注', tagId: 4,},
        {amount: '24.5', category: '-', date: nowDate(-14 * day), note: '此位置为备注', tagId: 1,},
        {amount: '145.5', category: '-', date: nowDate(-14 * day), note: '', tagId: 1,},
        {amount: '10.5', category: '-', date: nowDate(-14 * day), note: '', tagId: 10,},
        {amount: '100', category: '-', date: nowDate(-14 * day), note: '此位置为备注', tagId: 12,},
        {amount: '605', category: '-', date: nowDate(-13 * day), note: '', tagId: 15,},
        {amount: '28.8', category: '-', date: nowDate(-13 * day), note: '', tagId: 12,},
        {amount: '45.5', category: '-', date: nowDate(-13 * day), note: '此位置为备注', tagId: 10,},
        {amount: '14.5', category: '-', date: nowDate(-13 * day), note: '此位置为备注', tagId: 0,},
        {amount: '10.5', category: '-', date: nowDate(-13 * day), note: '', tagId: 0,},
        {amount: '100', category: '-', date: nowDate(-13 * day), note: '', tagId: 8,},
        {amount: '60', category: '-', date: nowDate(-13 * day), note: '此位置为备注', tagId: 3,},
        {amount: '287.8', category: '-', date: nowDate(-12 * day), note: '此位置为备注', tagId: 1,},
        {amount: '4.765', category: '-', date: nowDate(-12 * day), note: '', tagId: 10,},
        {amount: '145.5', category: '-', date: nowDate(-12 * day), note: '', tagId: 0,},
        {amount: '105.5', category: '-', date: nowDate(-12 * day), note: '', tagId: 0,},
        {amount: '100', category: '-', date: nowDate(-12 * day), note: '', tagId: 2,},
        {amount: '670', category: '-', date: nowDate(-12 * day), note: '', tagId: 4,},
        {amount: '228.8', category: '-', date: nowDate(-12 * day), note: '此位置为备注', tagId: 6,},
        {amount: '4.25', category: '-', date: nowDate(-12 * day), note: '此位置为备注', tagId: 8,},
        {amount: '14.5', category: '-', date: nowDate(-11 * day), note: '此位置为备注', tagId: 0,},
        {amount: '10.5', category: '-', date: nowDate(-11 * day), note: '', tagId: 9,},
        {amount: '100', category: '-', date: nowDate(-11 * day), note: '此位置为备注', tagId: 11,},
        {amount: '60', category: '-', date: nowDate(-10 * day), note: '', tagId: 15,},
        {amount: '282.8', category: '-', date: nowDate(-10 * day), note: '', tagId: 14,},
        {amount: '4.25', category: '-', date: nowDate(-10 * day), note: '此位置为备注', tagId: 7,},
        {amount: '14.5', category: '-', date: nowDate(-10 * day), note: '', tagId: 6,},
        {amount: '10.5', category: '-', date: nowDate(-10 * day), note: '此位置为备注', tagId: 0,},
        {amount: '100', category: '-', date: nowDate(-10 * day), note: '', tagId: 1,},
        {amount: '670', category: '-', date: nowDate(-9 * day), note: '', tagId: 8,},
        {amount: '258.8', category: '-', date: nowDate(-9 * day), note: '此位置为备注', tagId: 7,},
        {amount: '42.5', category: '-', date: nowDate(-9* day), note: '', tagId: 1,},
        {amount: '14.5', category: '-', date: nowDate(-9 * day), note: '', tagId: 3,},
        {amount: '10.5', category: '-', date: nowDate(-9 * day), note: '此位置为备注', tagId: 0,},
        {amount: '100', category: '-', date: nowDate(-8 * day), note: '此位置为备注', tagId: 2,},
        {amount: '620', category: '-', date: nowDate(-8 * day), note: '', tagId: 8,},
        {amount: '28.8', category: '-', date: nowDate(-8 * day), note: '', tagId: 7,},
        {amount: '14.5', category: '-', date: nowDate(-8 * day), note: '', tagId: 0,},
//
        {amount: '14067.5', category: '+', date: nowDate(-3 * day), note: '', tagId: 100,},
        {amount: '1054.5', category: '+', date: nowDate(-2 * day), note: '此位置为备注', tagId: 102,},
        {amount: '1454.5', category: '+', date: nowDate(-1 * day), note: '', tagId: 103,},
        {amount: '1560.5', category: '+', date: nowDate(-6 * day), note: '此位置为备注', tagId: 104,},
        {amount: '144.5', category: '+', date: nowDate(0), note: '', tagId: 106,},
        {amount: '130.5', category: '+', date: nowDate(-2 * day), note: '此位置为备注', tagId: 106,},
        {amount: '124.5', category: '+', date: nowDate(-9 * day), note: '', tagId: 105,},
        {amount: '120.5', category: '+', date: nowDate(-8 * day), note: '此位置为备注', tagId: 102,},
        {amount: '154.5', category: '+', date: nowDate(-10 * day), note: '', tagId: 103,},
        {amount: '160.5', category: '+', date: nowDate(-11 * day), note: '此位置为备注', tagId: 104,},
        {amount: '174.5', category: '+', date: nowDate(-6 * day), note: '', tagId: 104,},
        {amount: '1032.5', category: '+', date: nowDate(-7 * day), note: '此位置为备注', tagId: 103,},

        {amount: '4.5', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 0,},
        {amount: '14.5', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 0,},
        {amount: '10.5', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 0,},
        {amount: '100', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 2,},
        {amount: '60', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 8,},
        {amount: '28.8', category: '-', date: nowDate(-7 * day), note: '此位置为备注', tagId: 7,},
        {amount: '74.5', category: '-', date: nowDate(-6 * day), note: '此位置为备注', tagId: 0,},
        {amount: '1000', category: '-', date: nowDate(-6 * day), note: '此位置为备注', tagId: 3,},
        {amount: '9.5', category: '-', date: nowDate(-6 * day), note: '此位置为备注', tagId: 0,},
        {amount: '22.9', category: '-', date: nowDate(-6 * day), note: '此位置为备注', tagId: 8,},
        {amount: '15.4', category: '-', date: nowDate(-6 * day), note: '此位置为备注', tagId: 1,},
        {amount: '13', category: '-', date: nowDate(-6 * day), note: '', tagId: 4,},
        {amount: '5', category: '-', date: nowDate(-5 * day), note: '此位置为备注', tagId: 8,},
        {amount: '11.5', category: '-', date: nowDate(-5 * day), note: '', tagId: 0,},
        {amount: '13,2', category: '-', date: nowDate(-5 * day), note: '此位置为备注', tagId: 0,},
        {amount: '169', category: '-', date: nowDate(-5 * day), note: '', tagId: 9,},
        {amount: '6.3', category: '-', date: nowDate(-4 * day), note: '此位置为备注', tagId: 0,},
        {amount: '12.5', category: '-', date: nowDate(-4 * day), note: '', tagId: 0,},
        {amount: '8.5', category: '-', date: nowDate(-4 * day), note: '此位置为备注', tagId: 0,},
        {amount: '4.5', category: '-', date: nowDate(-3 * day), note: '', tagId: 0,},
        {amount: '14.5', category: '-', date: nowDate(-3 * day), note: '此位置为备注', tagId: 0,},
        {amount: '10.5', category: '-', date: nowDate(-3 * day), note: '', tagId: 0,},
        {amount: '3', category: '-', date: nowDate(-3 * day), note: '', tagId: 1,},
        {amount: '12', category: '-', date: nowDate(-3 * day), note: '此位置为备注', tagId: 2,},
        {amount: '224', category: '-', date: nowDate(-3 * day), note: '', tagId: 9,},
        {amount: '24', category: '-', date: nowDate(-2 * day), note: '此位置为备注', tagId: 14,},
        {amount: '245', category: '-', date: nowDate(-2 * day), note: '', tagId: 12,},
        {amount: '32', category: '-', date: nowDate(-2 * day), note: '此位置为备注', tagId: 6,},
        {amount: '112', category: '-', date: nowDate(-2 * day), note: '', tagId: 3,},
        {amount: '160', category: '-', date: nowDate(-2 * day), note: '此位置为备注', tagId: 1,},
        {amount: '44.5', category: '-', date: nowDate(-2 * day), note: '此位置为备注', tagId: 12,},
        {amount: '414.5', category: '-', date: nowDate(-1 * day), note: '', tagId: 10,},
        {amount: '120.5', category: '-', date: nowDate(-1 * day), note: '', tagId: 7,},
        {amount: '150', category: '-', date: nowDate(-1 * day), note: '此位置为备注', tagId: 12,},
        {amount: '360', category: '-', date: nowDate(-1 * day), note: '', tagId: 15,},
        {amount: '728.8', category: '-', date: nowDate(-1 * day), note: '', tagId: 14,},
        {amount: '54.5', category: '-', date: nowDate(-1 * day), note: '此位置为备注', tagId: 3,},
        {amount: '314.5', category: '-', date: nowDate(0), note: '此位置为备注', tagId: 8,},
        {amount: '140.5', category: '-', date: nowDate(0), note: '', tagId: 3,},
        {amount: '100', category: '-', date: nowDate(0), note: '此位置为备注', tagId: 1,},
        {amount: '60', category: '-', date: nowDate(0), note: '', tagId: 8,},
        {amount: '228.8', category: '-', date: nowDate(0), note: '此位置为备注', tagId: 8,},
        {amount: '42.5', category: '-', date: nowDate(0), note: '此位置为备注', tagId: 0,},
    ];
    const [records, setRecords] = useState<RecordItem[]>(testRecords);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || 'testRecords'));
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
    return {records, addRecord};
};