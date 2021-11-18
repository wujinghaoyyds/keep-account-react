import {useState} from 'react';
import dayjs from 'dayjs';

const useDates = () => {
    const localDate = new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0, 10);
    const date = new Date();
    const today = date.getDay();
    const oneWeek = 7 * 24 * 3600 * 1000;
    const [saturday, setSaturday] = useState(+new Date() + (8 + (6 - today) * 24) * 3600 * 1000);
    const beginOfWeek = new Date(saturday - 6 * 24 * 3600 * 1000).toISOString().slice(0, 10);
    const endOfWeek = new Date(saturday).toISOString().slice(0, 10);
    const weeklyScope = dayjs(beginOfWeek).format('MM月DD日') + '至' + dayjs(endOfWeek).format('MM月DD日');

    const [month, changeMonth] = useState(date.getMonth());
    const displayMonth = new Date().setMonth(month);
    const monthScope = dayjs(displayMonth).format('YYYY年MM月');

    return {
        localDate, today, oneWeek, saturday, setSaturday, beginOfWeek, endOfWeek, weeklyScope,
        month, changeMonth, monthScope
    };
};
export {useDates};
