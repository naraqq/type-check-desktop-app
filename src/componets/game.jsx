import React from 'react';
import { useEffect } from 'react';


function Game(props) {
    useEffect(() => {
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
              console.log('Space pressed');
            }
          })
    }, [])

    const text = props.data[0].text
    const splitted = text.split(" ")
    return ( 
        <div className='w-screen h-screen flex justify-center items-center p-10 bg-gray-600 flex'>
            <div className='w-10/12 h-[100px] flex flex-wrap gap-2 items-center justify-center p-4'>
            {
                splitted.map(e => 
                    <span className="placeholder " key={e} data-placeholder={`${e}`}>
                        <input type="text" className=''/>
                    </span>)
            }
            </div>
        </div>
     );
}

export default Game;