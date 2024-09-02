import React from 'react';

export default function Buttons({ bIcon, bName, bText, bg, text }) {
  function handleEnter(e) {
    if (e === "Enter") {
      e.preventDefault();
    }
  }

  return (
    <>
      <button type="submit" className='btn ' style={{ backgroundColor: bg, color: text }} onKeyDown={handleEnter}>
        <img src={bIcon} alt={`${bName} icon`} /> {bText} {bName}
      </button>
    </>
  )
}
