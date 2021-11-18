import {useState} from 'react';

const useTags = () => {
    const TagsMap = [
        {id: 0, icon: 'repast', name: '餐饮'},
        {id: 1, icon: 'fruits', name: '水果'},
        {id: 2, icon: 'costume', name: '服饰'},
        {id: 3, icon: 'housing', name: '住房'},
        {id: 4, icon: 'traffic', name: '交通'},
        {id: 5, icon: 'medicine', name: '医疗'},
        {id: 6, icon: 'study', name: '学习'},
        {id: 7, icon: 'game', name: '娱乐'},
        {id: 8, icon: 'groceries', name: '日用'},
        {id: 9, icon: 'shopping', name: '购物'},
        {id: 10, icon: 'tobaccoandwine', name: '烟酒'},
        {id: 11, icon: 'phone', name: '数码'},
        {id: 12, icon: 'exercise', name: '运动'},
        {id: 13, icon: 'social', name: '社交'},
        {id: 14, icon: 'journey', name: '旅行'},
        {id: 15, icon: 'loan', name: '借贷'},
        {id: 16, icon: 'other', name: '其他'},
        {id: 100, icon: 'salary', name: '工资'},
        {id: 101, icon: 'parttime', name: '兼职'},
        {id: 102, icon: 'investmentandfinance', name: '理财'},
        {id: 103, icon: 'bonussubsidy', name: '补贴'},
        {id: 104, icon: 'borrow', name: '借入'},
        {id: 105, icon: 'reimbursement', name: '报销'},
        {id: 106, icon: 'social', name: '社交'},
        {id: 107, icon: 'other', name: '其他'},
    ];
    const [tagsList] = useState<{ id: number; icon: string; name: string }[]>(TagsMap);
    const getName = (id: number) => {
        const tag = TagsMap.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    const getIconName = (id: number) => {
        const tag = TagsMap.filter(t => t.id === id)[0];
        return tag ? tag.icon : '';
    };
    return {tagsList, getName, getIconName};
};
export {useTags};