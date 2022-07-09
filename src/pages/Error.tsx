import Page from '../components/Page';
import { ANY } from '../types';

function Error({ code = '' }: ANY) {
  return (
    <Page title={`Error ${code}`}>
      <h2>Error {code}</h2>
    </Page>
  );
}

export default Error;
