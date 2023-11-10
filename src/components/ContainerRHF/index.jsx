import PropTypes from 'prop-types';
import { FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControllerRHF = ({ input, classes, control, errors, render }) => {
  return (
    <FormControl variant="standard">
      <label htmlFor={input?.name} className={classes.inputLabel}>
        {input.label}
      </label>
      <Controller
        control={control}
        name={input?.name}
        rules={{ required: input?.required }}
        defaultValue={input?.defaultValue}
        render={render}
      />
      {errors[input?.name] && <span className={classes.inputLabelError}>{errors[input?.name].message}</span>}
    </FormControl>
  );
};

ControllerRHF.propTypes = {
  input: PropTypes.object,
  classes: PropTypes.object,
  errors: PropTypes.object,
  control: PropTypes.object,
  render: PropTypes.func,
};

export default ControllerRHF;
