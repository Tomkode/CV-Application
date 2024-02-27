import { useState } from "react";
import "./App.css";
import StyledHeader from "./styled-components/StyledHeader";
import StyledContainer from "./styled-components/StyledContainer";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import newEducationId from "./components/Counters";
import StyledButton from "./styled-components/StyledButton";
//import Greeting from './Greeting';

function App() {
  //const [count, setCount] = useState(0)
  const [appState, updateState] = useState({
    personalName: "",
    email: "",
    phoneNumber: "",
    educations: [],
    //jobs: []
  });

  const handleState = (evt) => {
    let newState = { ...appState };
    let name = evt.currentTarget.name;
    let value = evt.currentTarget.value;
    let containerType = evt.currentTarget.className;
    let index = undefined;
    //grab the index of the education item from the classname
    if (containerType.includes("education")) {
      let classes = evt.currentTarget.className.split(" ");
      console.log(classes);
      for (let i in classes) {
        if (classes[i].includes("education")) index = classes[i].slice(9);
      }
      console.log(index, name, value);
      newState.educations[parseInt(index)][name] = value;
    } else newState[name] = value;
    console.log(newState);
    updateState(newState);
  };
  const handleAddButton = () => {
    let educationSegment = {
      schoolName: "",
      titleOfStudy: "",
      dateOfGraduation: "",
      id: newEducationId(),
    };
    let newState = { ...appState };
    newState.educations.push(educationSegment);
    updateState(newState);
  };
  const handleRemoveEducationButton = (index) => {
    let newState = { ...appState };
    console.log(index);
    newState.educations.splice(index, 1);
    console.log(newState);
    updateState(newState);
  };
  const handleDeleteAllEducationButton = () => {
    let newState = { ...appState };
    newState.educations = [];
    updateState(newState);
  };
  const getStateAsJSON = () => {
    return JSON.stringify(appState);
  };
  const downloadJSON = () => {
    // Check that every field is filled
    let inputFields = document.querySelectorAll("input");
    for (let inp in inputFields) {
      if (inputFields[inp].value == "") {
        alert("Missing fields!");
        return;
      }
    }
    // Create element with <a> tag
    const link = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([getStateAsJSON()], { type: "text/plain" });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = appState.personalName.split(" ")[0] + "JSON.json";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
  };
  return (
    <StyledContainer>
      <StyledHeader size={65} color={"gray"}>
        CV Application
      </StyledHeader>
      <GeneralInfo state={appState} updateState={handleState}></GeneralInfo>
      <EducationalExperience
        state={appState}
        updateState={handleState}
        addButtonClicked={handleAddButton}
        deleteAllButtonClicked={handleDeleteAllEducationButton}
        handleRemove={handleRemoveEducationButton}
      ></EducationalExperience>
      <StyledButton onClick={downloadJSON}>Export as a JSON file</StyledButton>
    </StyledContainer>
  );
}

export default App;
