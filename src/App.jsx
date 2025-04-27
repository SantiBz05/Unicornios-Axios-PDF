import UnicornsModule from './unicorns/index';
import { UnicornProvider } from './context/UnicornContext';
import ProductsModule from './products/index';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <UnicornProvider>
        <UnicornsModule />
      </UnicornProvider>
      <ProductsModule />
    </Fragment>
  );
}

export default App;