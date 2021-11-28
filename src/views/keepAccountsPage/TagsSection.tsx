import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  font-size: 12px;
  color: #666666;
  flex: 5;
  overflow: auto;
  margin: 0 16px;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  ::-webkit-scrollbar {
    display: none; 
  }

  > ol {
    display: flex;
    flex-wrap: wrap;
    padding: 4px 0;

    > li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      cursor:pointer;

      > div {
        width: 70%;
        height: 45px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          fill: #B4B6B3;
          width: 26px;
          height: 26px;
        }
      }

      > span {
        margin-top: 3px;
      }

      &.selectedIncome {
        color: #333333;

        > div {
          background: #FFEDE3;

          .icon {
            fill: #FF6400;
          }
        }
      }

      &.selectedExpenditure {
        color: #333333;

        > div {
          background: #E8F1FF;

          .icon {
            fill: #005DFF;
          }
        }
      }
    }
  }
`;

type Props = {
    value: number,
    categoryColor: string,
    onChange: (value: number) => void
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
        const {tagsList} = useTags();
        const selectedTagId = props.value;
        let selectedType;
        const selectedClassName = (tag: { id: number; icon: string; name: string }) => {
            if (props.categoryColor === '-') {
                if (selectedTagId === tag.id) {
                    selectedType = 'selectedExpenditure';
                } else {
                    selectedType = '';
                }
            } else if (props.categoryColor === '+') {
                if (selectedTagId === tag.id) {
                    selectedType = 'selectedIncome';
                } else {
                    selectedType = '';
                }
            } else {
                selectedType = '';
            }
            return selectedType;
        };
        let tagsTypeList;
        if (props.categoryColor === '-') {
            tagsTypeList = tagsList.filter((tag) => tag.id < 100);
        } else if (props.categoryColor === '+') {
            tagsTypeList = tagsList.filter((tag) => tag.id > 99);
        } else {
            tagsTypeList = tagsList.filter((tag) => tag.id < 1000);
        }
        return (
            <Wrapper>
                <ol>
                    {tagsTypeList.map(tag => <li key={tag.id}
                                                 onClick={() => props.onChange(tag.id)}
                                                 className={selectedClassName(tag)}
                    >
                        <div><Icon name={tag.icon}/></div>
                        <span> {tag.name}</span>
                    </li>)}
                </ol>
            </Wrapper>
        );
    }
;
export default TagsSection;