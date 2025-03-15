import React from "react";


const Main = ({children}) => {
    
    return (
        <main className='flex flex-col items-center'>
            {children}
        </main>   
    )
}

export default Main;