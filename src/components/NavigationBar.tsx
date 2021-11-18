import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #ffffff;
  line-height: 16px;
  border-top: 1px solid #333333;
  > ul {
    display:flex;
    > li{
      width: 50%;
      text-align:center;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2px 0;
        .icon {
          width: 25px;
          height: 25px;
          fill:#333333;
        }
        &.selected{
          color: #000fff;
          .icon{
            fill: #000fff;
          }
        }
      }
    }
  }
`;

const NavigationBar = () => {
    return (
        <NavWrapper>
            <ul>
                <li><NavLink to="/keepAccounts" activeClassName="selected">
                    <Icon name="write"/>
                    记一笔</NavLink></li>
                <li><NavLink to="/statistics" activeClassName="selected">
                    <Icon name="statistic"/>
                    统计</NavLink></li>
            </ul>
        </NavWrapper>
    );
};
export default NavigationBar;