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
                    <svg
                        className="bell-icon"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        
                    >
                        <path
                          d="M14 20a2 2 0 1 1-4 0m7-6V9a5 5 0 1 0-10 0v5a3 3 0 0 1-2 2.82V18h14v-1.18a3 3 0 0 1-2-2.82z"
                          stroke="red"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                    </svg>
                        {/* <h1 className="text-4xl font-bold">Welcome to Emergency App</h1>
                        <div className="spin flex h-32 items-center justify-center ">
                            <div className="spinner h-28 w-28 rounded-full z-10 animate-spin"></div>
                        </div> */}
                    </div>
                </div>
                 ) : <></>
            }
        </section>
    )
}

export default Loader;