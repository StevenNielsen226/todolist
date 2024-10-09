// eslint-disable-next-line react/prop-types
const ChecklistItem = ({ label, text }) => {
  return (
    <div>
      <label htmlFor={label}>{text}</label>
      <input type="checkbox" name="getUp" />
    </div>
  );
};
// ChecklistItem.propTypes = { label: String, text: String };

export default ChecklistItem;
