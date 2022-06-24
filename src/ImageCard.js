import React from "react";
import Modal from "./modal";




function ImageCard({ item,modalFlag ,handleModal}) {
  

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={item.thumbnail.large}></img>
          <h3
            onClick={() => {
              handleModal(true);
            }}
          >
            Learn More
          </h3>
        </div>
        <div className="dots">
          <div className="circle" id="green-circle"></div>
          <div className="circle" id="yellow-circle"></div>
        </div>
        <div className="card-content">
          <h2 className="title">{item.title}</h2>
          <p>{item.content}</p>

          <div className="author-date">
            <span className="author-name">
              {item.author.name}-{item.author.role}
            </span>

            <div>{item.date}</div>

            {item.modalFlag}
          </div>
        </div>
      </div>

      {modalFlag && (
        <Modal
          closeModal={handleModal}
          item={item}
        />
      )}
    </>
  );
}

export default ImageCard;
