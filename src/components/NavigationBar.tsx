import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 50%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;

        &.selected {
          color: red;
        }
      }
    }
  }
`;

const NavigationBar = () => {
    return (
        <NavWrapper>
            <ul>
                <li><NavLink to="/keepAccounts" activeClassName="selected">keepAccounts</NavLink></li>
                <li><NavLink to="/statistics" activeClassName="selected">Statistics</NavLink></li>
            </ul>
        </NavWrapper>
    );
};
export default NavigationBar;