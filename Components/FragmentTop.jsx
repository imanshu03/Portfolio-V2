import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../ObserverStore';

const FragmentTop = ({ children, className = '', tagName = '', ...props }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  if (tagName) {
    return React.createElement(
      tagName,
      {
        className: `${className} t-top-wrapper`,
        ref: ref,
        'data-func': 'show',
        'data-classname': 't-top-transition',
        ...props,
      },
      children,
    );
  }

  return (
    <div
      className={`${className} t-top-wrapper`}
      data-func="show"
      data-classname="t-top-transition"
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default FragmentTop;
