/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import StyledContainer from "../styled-components/StyledContainer";
import StyledInput from "../styled-components/StyledInput";
import StyledButton from "../styled-components/StyledButton";

const EducationItem = ({ handleRemove, index, handleState, item }) => {
  const Focused = (evt) => {
    evt.currentTarget.type = "date";
  };
  const Blurred = (evt) => {
    evt.currentTarget.type = "text";
  };
  return (
    <StyledContainer>
      <StyledInput
        onChange={handleState}
        name="schoolName"
        type="text"
        placeholder="School Name"
        className={"education" + index}
        defaultValue={item.SchoolName}
      ></StyledInput>
      <StyledInput
        onChange={handleState}
        type="text"
        name="titleOfStudy"
        placeholder="Title Of Study"
        className={"education" + index}
        defaultValue={item.TitleOfStudy}
      ></StyledInput>
      <StyledInput
        onChange={handleState}
        onFocus={Focused}
        onBlur={Blurred}
        type="text"
        name="dateOfGraduation"
        placeholder="Date Of Graduation"
        className={"education" + index}
        defaultValue={item.DateOfGraduation}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          handleRemove(index);
        }}
      >
        {" "}
        X{" "}
      </StyledButton>
    </StyledContainer>
  );
};

EducationItem.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleState: PropTypes.func.isRequired,
};

export default EducationItem;
