import React from 'react';

import Link from 'next/link';

const MainHero = ({ data }: any) => {
  const { actions } = data;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-10 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          <span className="block xl:inline">{data.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {data.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {data.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <ul className={`w-full text-center text-sm`}>
            {actions.map((action: any, index: any) => (
              <li key={index} className={`py-2`}>
                <Link href={action.href} passHref>
                  <div className="w-full flex items-center justify-left px-4 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-2 md:text-lg md:px-4">
                    {action.text}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
