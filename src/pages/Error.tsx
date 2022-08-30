import Page from '../components/Page';
import { Any } from '../types';

function Error({ code = '' }: Any) {
  return (
    <Page title={`Error ${code}`}>
      <h2>Error {code}</h2>
    </Page>
  );
}

export default Error;
