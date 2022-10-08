import React from 'react'

function Modal({ onClose, currentPhoto }) {
  const {name, category, description, index} = currentPhoto;

  return (
    <div className='modalBackDrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt='currentcategory'/>
        <p>
          {description}
        </p>
        <button onClick={onClose} type='button'>
          Close the modal
        </button>
      </div>
    </div>
  )
}

export default Modal