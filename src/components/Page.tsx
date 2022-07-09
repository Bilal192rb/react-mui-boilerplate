import PropTypes, { InferProps } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { ForwardedRef, forwardRef } from 'react';
import { ANY } from '../types';

const PagePropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

type PageTypes = InferProps<typeof PagePropTypes>;

const Page = forwardRef(
  (
    { children, title = 'React MUI Boilerplate', meta, ...other }: PageTypes,
    ref: ForwardedRef<ANY>
  ) => (
    <>
      <Helmet>
        <title>{`${title} | React MUI Boilerplate`}</title>
        {meta}
      </Helmet>
      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

Page.propTypes = PagePropTypes;

export default Page;
