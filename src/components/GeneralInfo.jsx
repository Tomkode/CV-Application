/* eslint-disable react/prop-types */
import StyledHeader from "../styled-components/StyledHeader";
import StyledContainer from "../styled-components/StyledContainer";
import StyledInput from "../styled-components/StyledInput";

const GeneralInfo = ({ state, updateState }) => {
  return (
    <StyledContainer>
      <StyledHeader>General Information</StyledHeader>
      <StyledInput
        onChange={updateState}
        placeholder="Name"
        name="personalName"
        defaultValue={state.personalName}
      ></StyledInput>
      <StyledInput
        onChange={updateState}
        placeholder="E-mail"
        type="email"
        name="email"
      ></StyledInput>
      <StyledInput
        onChange={updateState}
        placeholder="Phone Number"
        name="phoneNumber"
      ></StyledInput>
    </StyledContainer>
  );
};
export default GeneralInfo;
