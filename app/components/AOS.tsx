"use client"

import React, { ReactNode, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';


function AOS({children}: {children: ReactNode}) {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <>
        {children}
    </>
)
}

export default AOS