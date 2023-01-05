import styled from "styled-components";

export const StyledHeader = styled.header`
        background-color: ${({theme}) => theme.colors.header}; // OR use destucture {({ bg }) => bg} so we don't have to do props.bg
        padding: 40px 0;
        
        // h1 { // nesting  
        //     colot:red;
        // }

        // &:hover { // & means parent element
        //     background-color: green;
        // }
`;