import UnicornsModule from './unicorns/index';
import { UnicornProvider } from './context/UnicornContext';
// import ObjectsModule from './layouts/objetos';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <UnicornProvider>
        <UnicornsModule />
      </UnicornProvider>
      {/* <ObjectsModule /> */}
    </Fragment>
  );
}

export default App;