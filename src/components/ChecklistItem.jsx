/* eslint-disable react/prop-types */
import FormGroup from "@mui/material/FormGroup";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
const ChecklistItem = ({
  editInputValue,
  handleDelete,
  handleEdit,
  htmlFor,
  type,
  id,
  name,
  text,
  completed,
  handleUserClick,
  isEditClicked,
  setIsEditClicked,
  setEditInputValue,
  editItemId,
  setEditItemId,
}) => {
  return (
    <FormGroup>
      {!isEditClicked && (
        <>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleUserClick(e)}
                checked={completed}
                type={type}
                id={`${id}`}
                name={name}
              />
            }
            label={text}
            htmlFor={htmlFor}
          />

          <Button
            variant="outlined"
            onClick={() => handleDelete(id)}
            id={`${id}`}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            onClick={() => {
              setIsEditClicked(!isEditClicked);
              setEditInputValue(text);
              setEditItemId(id);
            }}
            id={`${id}`}
          >
            Edit
          </Button>
        </>
      )}
      {isEditClicked && editItemId === id && (
        <>
          {" "}
          <TextField
            type="text"
            value={editInputValue}
            name="addToDo"
            onChange={(e) => setEditInputValue(e.target.value)}
            variant="filled"
          />
          <Button
            variant="outlined"
            onClick={() => {
              handleEdit(id);
              setIsEditClicked(!isEditClicked);
            }}
            id={`${id}`}
          >
            Update
          </Button>
        </>
      )}
    </FormGroup>
  );
};
export default ChecklistItem;
