import ChecklistItem from "./ChecklistItem";

const MainContent = () => {
  let toDoList = [
    { label: "Work", text: "Work" },
    { label: "Home", text: "Home" },
    { label: "Homework", text: "Homework" },
  ];
  let mappingToDoList = toDoList.map(({ label, text }) => (
    // eslint-disable-next-line react/jsx-key
    <ChecklistItem label={label} text={text} />
  ));
  return <>{mappingToDoList}</>;
};

export default MainContent;
