import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import Editor from '../editor';
import { Any, AnyObject } from '../../types';

const FormEditorPropTypes = {
  name: PropTypes.string.isRequired
};

type FormEditorTypes = InferProps<typeof FormEditorPropTypes> | AnyObject;

function FormEditor({ name, ...other }: FormEditorTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: Any) => (
        <Editor
          id={name}
          value={field.value}
          onChange={field.onChange}
          error={!!error}
          helperText={
            <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
              {error?.message}
            </FormHelperText>
          }
          {...other}
        />
      )}
    />
  );
}

FormEditor.propTypes = FormEditorPropTypes;

export { FormEditor };
