import { Box } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import { ForwardedRef, forwardRef } from 'react';
import { ANY } from '../types';

const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
  other: PropTypes.any,
};

type LayoutTypes = InferProps<typeof LayoutPropTypes>;

const Page = forwardRef(({ children, other }: LayoutTypes, ref: ForwardedRef<ANY>) => (
  <>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = LayoutPropTypes;

export default Page;
