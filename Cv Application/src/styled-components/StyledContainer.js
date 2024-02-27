import styled from "styled-components";

const StyledContainer = styled.div`
    display : flex;
    //background-color: red;
    flex-direction: ${props => props.direction};
    justify-content: center;
    align-items: center;
    /*border: 3px solid green;*/
    width: 100vw;


`;
StyledContainer.defaultProps = {
    direction: "column"
}
export default StyledContainer;