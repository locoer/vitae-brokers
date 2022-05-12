import React from 'react';

const Seccion = ({borde=false, full=false, children, className='', ...props}) => {
  return (
    <section className={`py-10 ${borde ? 'border-b' : ''} ${className}`} {...props}>
      <div className={`${full ? '' : 'container'} mx-auto px-1 md:px-10`}>
        {children}
      </div>
    </section>
  );
}

export default Seccion;