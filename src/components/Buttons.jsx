import React from 'react';

export default function Buttons({bIcon, bName, bText, bg, text}) {
  return (
      <>
            <button type="submit" className='btn ' style={{backgroundColor: bg, color:text }}>
                <img src={bIcon} alt={`${bName} icon`} /> {bText} {bName}
             </button>

      </>
  )
}
