import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size : ${props => props.size}px;
    color: ${props => props.color};
`;

StyledHeader.defaultProps = {
    size : 40,
    color: "white"
};
export default StyledHeader;