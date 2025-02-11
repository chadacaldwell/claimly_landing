import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Header from '../components/Header';

const Message = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
          </div>
        </div>
      </div>
      <About />
      <Analytics />
    </div>
  );
};

export default Message;
