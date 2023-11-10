import { FormControl } from '@mui/material';
import PropTypes from 'prop-types';

const InputRHF = ({ input, register, errors, classes }) => (
  <FormControl className={classes?.inputContainer}>
    <label htmlFor={input?.name} className={classes?.inputLabel}>
      {input?.label}
    </label>
    <input
      className={`${classes?.input} ${errors[input?.name] && classes?.inputError}`}
      {...register(input?.name, {
        required: input?.required,
        pattern: { value: new RegExp(input?.pattern), message: input.messagePatern },
        minLength: {
          value: input.minLength,
          message: input.messageMin,
        },
      })}
      type={input?.type}
      defaultValue={input.value}
    />
    {errors[input?.name] && <span className={classes?.inputLabelError}>{errors[input?.name].message}</span>}
  </FormControl>
);
InputRHF.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.string,
    pattern: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    messagePatern: PropTypes.string,
    messageMin: PropTypes.string,
    minLength: PropTypes.number,
  }),
  register: PropTypes.func,
  errors: PropTypes.object,
  classes: PropTypes.object,
};

export default InputRHF;
