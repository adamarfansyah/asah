import { FormControl } from '@mui/material';

const InputRHF = ({ input, register, errors, classes }) => {
  return (
    <FormControl className={classes.inputContainer}>
      <label htmlFor={input?.name} className={classes.inputLabel}>
        {input?.label}
      </label>
      <input
        className={`${classes.input} ${errors[input?.name] && classes.inputError}`}
        {...register(input?.name, {
          required: input?.required,
          pattern: input?.pattern,
        })}
        type={input?.type}
      />
      {errors[input?.name] && <span className={classes.inputLabelError}>{errors[input?.name].message}</span>}
    </FormControl>
  );
};

export default InputRHF;
