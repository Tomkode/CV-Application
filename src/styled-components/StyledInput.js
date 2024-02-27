

import styled from "styled-components";

const StyledInput = styled.input`
    width: 15vw;
    height: 3.5vh;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 7.5px;
    &::placeholder {
        color : red;
        font-size: 2.5vh;
    }

`;

export default StyledInput;