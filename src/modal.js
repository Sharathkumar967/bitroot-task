
import React from 'react';
import "./Modal.css";


const Modal = ({item,closeModal}) => {

  return (    
    <>
    <div className="modal-container">
        <button className='modal-btn' onClick={()=>{closeModal(false)}}>X</button>
      <div className="modal-img">
        <img src={item.thumbnail.large}></img>
      </div>

      <div className="modal-content">
        <h2 className="modal-title">{item.title}</h2>
        <p className='modal-para'>{item.content}</p>

        <div className="author-date">
          <span className="author-name">
            {item.author.name}-{item.author.role}
          </span>
          <div>{item.date}</div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Modal;

