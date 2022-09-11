import PropTypes, { InferProps } from 'prop-types';
import ReactQuill from 'react-quill';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import EditorToolbar, { formats } from './EditorToolbar';
import { AnyObject } from '../../types';

const RootStyle = styled(Box)(({ theme }: AnyObject) => ({
  borderRadius: theme.shape.borderRadius,
  border: `solid 2px ${theme.palette.grey[500_32]}`,
  '&:hover': {
    border: `solid 2px ${theme.palette.grey[100]}`,
  },
  '&:focus-within': {
    border: `solid 2px ${theme.palette.primary.main}`,
  },
  '& .ql-container.ql-snow': {
    borderColor: 'transparent',
    ...theme.typography.body1,
    fontFamily: theme.typography.fontFamily,
  },
  '& .ql-editor': {
    minHeight: 200,
    '&.ql-blank::before': {
      fontStyle: 'normal',
      color: theme.palette.text.disabled,
    },
    '& pre.ql-syntax': {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

const LabelStyle = styled(Typography)(({ theme }: AnyObject) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const EditorPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.node,
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

type EditorTypes = InferProps<typeof EditorPropTypes>;

function Editor({
  id = 'minimal-quill',
  label,
  error,
  value,
  onChange,
  simple = false,
  helperText,
  sx,
  ...other
}: EditorTypes) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div>
      {label && <LabelStyle>{label}</LabelStyle>}
      <RootStyle
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
          }),
          ...sx,
        }}
      >
        <EditorToolbar id={id} isSimple={simple} />
        <ReactQuill
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder='Write something awesome...'
          {...other}
        />
      </RootStyle>

      {helperText && helperText}
    </div>
  );
}

Editor.propTypes = EditorPropTypes;

export default Editor;
