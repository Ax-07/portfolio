import PropTypes from 'prop-types';

/**
 * 
 * @param {String} type
 * @description This function returns a different number of separation lines depending on the type parameter.
 * @example <SeparateLines type='simple' /> // returns one line
 *  <SeparateLines type='double' /> // returns two lines
 *  <SeparateLines type='triple' /> // returns three lines
 */
export const SeparateLines = ({ type }) => {
    switch (type) {
      case 'simple':
        return (
          <div className="separateLines">
            <hr className="separateLines__line" />
          </div>
        );
      case 'double':
        return (
          <div className="separateLines">
            <hr className="separateLines__line" />
            <hr className="separateLines__line" />
          </div>
        );
      case 'triple':
        return (
          <div className="separateLines">
            <hr className="separateLines__line" />
            <hr className="separateLines__line" />
            <hr className="separateLines__line" />
          </div>
        );
      default:
        return (
          <div className="separateLines">
            <hr className="separateLines__line" />
          </div>
        );
    }
  }
  
  SeparateLines.propTypes = {
    type: PropTypes.string.isRequired
  }