import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  inputMessage: {
    padding: '9px 15px',
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    width: '300px',
    color: 'mediumpurple',
    fontWeight: 'bold',
  },
}));

const InputMessage = ({ inputValue, onChangeMessage, onSendMessage }) => {
  const classes = useStyles();

  return (
    <textarea
      className={classes.inputMessage}
      value={inputValue}
      onChange={(e) => onChangeMessage(e.target.value)}
      onKeyDown={({ key }) => {
        if (key === 'Enter') {
          onSendMessage();
        }
      }}
    />
  );
};

InputMessage.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default InputMessage;
