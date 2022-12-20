import { BtnWrap, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {Object.keys(options).map(option => (
        <Button key={nanoid()} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
