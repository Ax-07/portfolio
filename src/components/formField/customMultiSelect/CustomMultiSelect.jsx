import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { icons } from "../../../utils/icons/icons";

/**
 * @description Le composant CustomMultiSelect est un composant React qui permet à l'utilisateur de sélectionner plusieurs options à partir d'une liste déroulante. Il offre également la possibilité d'ajouter de nouvelles options à la liste.
 *
 * @param {string} title - Le titre de la liste
 * @param {array} options - Les options de la liste
 * @param {array }selectedOption - Les options sélectionnées
 * @param {function} setSelectedOption - La fonction pour ajouter une option à la liste
 * @param {function} createOption - La fonction pour créer une nouvelle option
 *
 * @returns {JSX.Element} - Une liste déroulante personnalisée
 *
 */

export const CustomMultiSelect = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  createOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionToAdd, setOptionToAdd] = useState("");
  const ref = useRef(null);

  const filteredOptions = options
    ? options.filter((option) =>
        option.name.toLowerCase().includes(optionToAdd.toLowerCase())
      )
    : [];

  const addOptionToList = async () => {
    if (!options.some((option) => option.name === optionToAdd)) {
      try {
        const response = await createOption({ name: optionToAdd });
        console.log("response", response);
        if (response.error) {
          alert(response.error.data.message);
          return;
        }
        setOptionToAdd("");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert(`L'option "${optionToAdd}" existe déjà`);
    }
  };

  const selectOption = (option) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption && prevSelectedOption.includes(option)
        ? prevSelectedOption.filter((cat) => cat !== option)
        : [...(prevSelectedOption || []), option]
    ); // Si l'option est déjà sélectionnée, on la retire, sinon on l'ajoute
  };

  const cancelOption = (option) => {
    setSelectedOption(
      selectedOption ? selectedOption.filter((cat) => cat !== option) : []
    );
  };

  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div
      ref={ref}
      className={`customSelect ${isOpen ? "open" : ""}`}
      autoFocus
      tabIndex="0"
    >
      <div className="customSelect-container">
        <div className="customSelect__header">
          <div className="customSelect__selected--list">
            {selectedOption <= 0 && (
              <div className="customSelect__title">{title}s</div>
            )}
            {selectedOption &&
              selectedOption.length > 0 &&
              selectedOption.map((option, index) => (
                <SelectedOption
                  className="customSelect__selected--item"
                  key={index}
                  option={option}
                  cancelOption={cancelOption}
                />
              ))}
          </div>
          <span
            className={`customSelect__header--icon ${isOpen ? "open" : ""}  `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {icons.chevronUp}
          </span>
        </div>
        <div className={`customSelect__content ${isOpen ? "open" : ""}`}>
          <CustomSelectCreateOption
            title={title}
            optionToAdd={optionToAdd}
            setOptionToAdd={setOptionToAdd}
            addOptionToList={addOptionToList}
          />
          <div className="customSelect__list">
            {filteredOptions &&
              filteredOptions.length > 0 &&
              filteredOptions.map((option, index) => (
                <CustomSelectOption
                  key={index}
                  option={option}
                  selectedOption={selectedOption}
                  handleSelectOption={selectOption}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CustomMultiSelect.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.array,
  setSelectedOption: PropTypes.func,
  createOption: PropTypes.func,
};

const SelectedOption = ({ option, cancelOption }) => {
  return (
    <div
      className="customSelect__selected--option"
      onClick={() => cancelOption(option)}
    >
      <span>{option}</span>
      <span>✖️</span>
    </div>
  );
};
SelectedOption.propTypes = {
  option: PropTypes.string,
  cancelOption: PropTypes.func,
};

const CustomSelectOption = ({ option, selectedOption, handleSelectOption }) => {
  return (
    <div className="customSelect__option">
      <input
        type="checkbox"
        id={option.id}
        checked={selectedOption ? selectedOption.includes(option.name) : false}
        onChange={() => handleSelectOption(option.name)}
      />
      <label
        htmlFor={option.name}
        onClick={() => handleSelectOption(option.name)}
      >
        {option.name}
      </label>
    </div>
  );
};
CustomSelectOption.propTypes = {
  option: PropTypes.object,
  selectedOption: PropTypes.array,
  handleSelectOption: PropTypes.func,
};

const CustomSelectCreateOption = ({
  title,
  optionToAdd,
  setOptionToAdd,
  addOptionToList,
}) => {
  return (
    <div className="customSelect__createOption">
      <label htmlFor="option"></label>
      <input
        type="text"
        id="option"
        className="customSelect__createOption--input"
        name="option"
        placeholder={`Ajouter une ${title.toLowerCase()}`}
        value={optionToAdd}
        onChange={(e) => setOptionToAdd(e.target.value)}
      />
      <span
        className="customSelect__createOption--btnAdd"
        onClick={addOptionToList}
      >
        {icons.add}
      </span>
    </div>
  );
};
CustomSelectCreateOption.propTypes = {
  title: PropTypes.string,
  optionToAdd: PropTypes.string,
  setOptionToAdd: PropTypes.func,
  addOptionToList: PropTypes.func,
};

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
