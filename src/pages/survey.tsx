import React from 'react';

import { Widget } from '@typeform/embed-react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Header from '../components/Header';

const Survey = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div>
            <Header />
            <Widget id="GbTzHtrb" autoResize inlineOnMobile />
          </div>
        </div>
      </div>
      <About />
      <Analytics />
    </div>
  );
};

export default Survey;
