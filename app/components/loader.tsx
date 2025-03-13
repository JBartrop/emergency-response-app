'use client'
import React, { useEffect, useState } from 'react'



const Loader : React.FC = () => {

    const [Loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      })


    return(
        <section className="">
            {Loading ? 
               ( <div className="Loader overflow-hidden flex z-100  h-screen w-full fixed items-center justify-center text-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <div>
                        <h1 className="text-4xl font-bold">Welcome to Emergency App</h1>
                        <div className="spin flex h-32 items-center justify-center ">
                            <div className="spinner h-28 w-28 rounded-full z-10 animate-spin"></div>
                        </div>
                    </div>
                </div>
                 ) : <></>
            }
        </section>
    )
}

export default Loader;