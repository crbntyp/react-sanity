import React from 'react';

import {
  About,
  Footer,
  Header,
} from './containers';

import { Navigation } from './components/';

const App = () => {
  return (
    <section>
      <Navigation />
      <About />
      <Header />
      <Footer />
    </section>
  );
}

export default App;