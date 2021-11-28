import React, {useState} from 'react';
import NavigationBar from '../components/NavigationBar';
import styled from 'styled-components';
import WeeklyReport from './statisticsPage/WeeklyReport';
import MonthlyReport from './statisticsPage/MonthlyReport';
import {Layout} from '../style/CssWrapper';

const Header = styled.header`
  display: flex;
  font-size: 22px;

  > div {
    width: 50%;
    text-align: center;
    padding: 8px 0;
    border-bottom: 2px solid #F5F5F5;

    &.selected {
      border-bottom: 2px solid #1678FF;
      font-weight: bold;
      color: #333333;
    }
  }

`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  background: #F5F5F5;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function Statistics() {
    const [reportType, setReportType] = useState('week');
    let selectedReport;
    switch (reportType) {
        case 'week':
            selectedReport = <WeeklyReport/>;
            break;
        case 'month':
            selectedReport = <MonthlyReport/>;
            break;
    }
    return (
        <Layout>
            <Header>
                <div className={reportType === 'week' ? 'selected' : ''}
                     onClick={() => setReportType('week')}>周报
                </div>
                <div className={reportType === 'month' ? 'selected' : ''}
                     onClick={() => setReportType('month')}>月报
                </div>
            </Header>
            <Main>{selectedReport}</Main>
            <NavigationBar/>
        </Layout>
    );
}

export default Statistics;