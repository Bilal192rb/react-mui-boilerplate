import PropTypes, { InferProps } from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { varFade } from './variants';
import { AnyObject } from '../../types';

const TextAnimatePropTypes = {
  text: PropTypes.string.isRequired,
  typography: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ]),
  variants: PropTypes.object,
  sx: PropTypes.object,
};

type TextAnimateTypes = InferProps<typeof TextAnimatePropTypes> | AnyObject;

function TextAnimate({ text, typography, variants, sx, ...other }: TextAnimateTypes) {
  return (
    <Box
      component={motion.h1}
      sx={{
        typography: typography || 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter: string, index: number) => (
        <motion.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </motion.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = TextAnimatePropTypes;

export default TextAnimate;
