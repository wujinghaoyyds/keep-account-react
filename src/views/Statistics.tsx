import React, {useState} from 'react';
import NavigationBar from '../components/NavigationBar';
import styled from 'styled-components';
import WeeklyReport from './statisticsPage/WeeklyReport';
import MonthlyReport from './statisticsPage/MonthlyReport';
import {LayoutWrapper, MainWrapper, ScreenWrapper} from '../style/LayoutCss';

const ChartHeader = styled.header`
  > ol {
    display: flex;
    font-size: 22px;

    > li {
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
        <ScreenWrapper>
            <LayoutWrapper>
                <ChartHeader>
                    <ol>
                        <li className={reportType === 'week' ? 'selected' : ''}
                            onClick={() => setReportType('week')}>周报
                        </li>
                        <li className={reportType === 'month' ? 'selected' : ''}
                            onClick={() => setReportType('month')}>月报
                        </li>
                    </ol>
                </ChartHeader>
                <MainWrapper>
                    {selectedReport}
                </MainWrapper>
                <NavigationBar/>
            </LayoutWrapper>
        </ScreenWrapper>
    );
}

export default Statistics;