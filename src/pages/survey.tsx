import React from 'react';

import { Widget } from '@typeform/embed-react';

import Analytics from '../components/Analytics';
import Header from '../components/Header';

const Survey = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div>
            <Header />
            <Widget id="GbTzHtrb" height={500} />
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default Survey;
