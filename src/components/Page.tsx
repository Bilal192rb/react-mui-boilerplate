import { Box } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { ForwardedRef, forwardRef } from 'react';
import { Any } from '../types';

const PagePropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
  other: PropTypes.any,
};

type PageTypes = InferProps<typeof PagePropTypes>;

const Page = forwardRef(
  (
    { children, title = 'React MUI Boilerplate', meta, other }: PageTypes,
    ref: ForwardedRef<Any>
  ) => (
    <>
      <Helmet>
        <title>{`${title} | React MUI Boilerplate`}</title>
        {meta}
      </Helmet>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

Page.propTypes = PagePropTypes;

export default Page;
