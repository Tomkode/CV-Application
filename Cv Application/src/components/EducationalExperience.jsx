/* eslint-disable react/prop-types */
import StyledContainer from "../styled-components/StyledContainer";
import StyledHeader from "../styled-components/StyledHeader";
import StyledButton from "../styled-components/StyledButton";
import EducationItem from "./EducationItem";

const EducationalExperience = ({
  addButtonClicked,
  state,
  handleRemove,
  updateState,
  deleteAllButtonClicked,
}) => {
  return (
    <StyledContainer>
      <StyledHeader>Educational Experience</StyledHeader>
      <StyledContainer direction="row">
        <StyledButton onClick={addButtonClicked}>Add</StyledButton>
        <StyledButton onClick={deleteAllButtonClicked}>Delete All</StyledButton>
      </StyledContainer>
      {state.educations.map((educationItem, index) => {
        return (
          <EducationItem
            key={educationItem.id}
            item={educationItem}
            index={index}
            handleRemove={handleRemove}
            handleState={updateState}
          ></EducationItem>
        );
      })}
    </StyledContainer>
  );
};

export default EducationalExperience;
