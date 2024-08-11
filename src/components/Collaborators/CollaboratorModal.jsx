import React from 'react'
import ViewProfileCard from '../Profile/ViewProfileCard'

const CollaboratorModal = ({collab, id, handleShowProfileModal, activeModal}) => {
  return (
    <div className='relative'>
      <img onClick={() => handleShowProfileModal(id)} onMouseOver={() => handleShowProfileModal(id)} onMouseOut={() => handleShowProfileModal(null)} src={collab} alt="" />
      {
        activeModal === id && (
          <div className='absolute right-10 -top-28'>
            <ViewProfileCard collab={collab}/>
          </div>
        )
      }
    </div>
  )
}

export default CollaboratorModal