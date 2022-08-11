import React from 'react';
import { useEffect } from 'react';


function Game(props) {
    const text = props.data[0].text
    const splitted = text.split(" ")
    useEffect(() => {
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                console.log('Space pressed');
                checkIndex();
                // splitted.map(e)
            }
          })
    }, [])
    const checkIndex = () => {
        console.log("checking index!")
    }

    const letterCheck = (e) => {
        let check;
        let certainWord = e.target.placeholder
        let lettersJustClicked = e.target.value
        if (certainWord.includes(lettersJustClicked)) {
            check = true
        } else {
            check = false
        }
        console.log(check)
    }

    return ( 
        <div className='w-screen h-screen flex justify-center items-center p-10 bg-gray-600 flex'>
            <div className='w-10/12 h-[100px] flex flex-wrap gap-2 items-center justify-center p-4 text-[16px]'>
            {
                splitted.map((e, index) => 
                    <span className="placeholder text-[16px] relative" key={index} data-placeholder={`${e}`}>
                        <input type="text" placeholder={`${e}`} onChange={letterCheck} className=''/>
                    </span>)
            }
            </div>
        </div>
     );
}

export default Game;