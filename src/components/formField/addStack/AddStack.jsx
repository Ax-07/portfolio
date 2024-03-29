import { useState } from "react";
import PropTypes from "prop-types";

export const AddStack = ({ stacks, setStacks }) => {
  const [stackToAdd, setStackToAdd] = useState("");

  const handleAddStack = (e) => {
    e.preventDefault();
    setStacks([...stacks, stackToAdd]);
    setStackToAdd("");
  };

  const handleDeleteStackById = (stackId) => {
    setStacks(stacks.filter((stack, index) => index !== stackId));
  };
  
  return (
    <div id="add-stacks">
      <label htmlFor="stacks">Stacks</label>
      <input
        type="text"
        id="stacks"
        name="stacks"
        placeholder="Ajouter une technologie"
        value={stackToAdd}
        onChange={(e) => setStackToAdd(e.target.value)}
      />
      <button onClick={handleAddStack}>Ajouter</button>

      <ul>
        {stacks?.map((stack, index) => (
          <li key={index} onClick={() => handleDeleteStackById(index)}>
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
};

AddStack.propTypes = {
  stacks: PropTypes.array,
  setStacks: PropTypes.func,
};
