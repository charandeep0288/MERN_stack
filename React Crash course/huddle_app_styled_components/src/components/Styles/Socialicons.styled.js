import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }
    a { // using nesting concept -------
        border: 1px sloid #ff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }
`; 