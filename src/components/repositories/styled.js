import Styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTab = Styled(Tab)`
        border-radius: 16px;
        border: 1px solid #ccc;
        padding: 16px;
        user-select: none;
        cursor: pointer;
        z-index: 99999;
        background-color: #fff;
        margin: 8px;

        &.focus{
            outline: none;
            
        }

        &.is-selected{
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabs = Styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = Styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0:
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTabPanel = Styled(TabPanel)`
    display: none;
    padding: 16px;
    // border: 1px solid #ccc;
    margin-top: -5px; 

        &.is-selected{
            display: block;
        }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = Styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
`;
