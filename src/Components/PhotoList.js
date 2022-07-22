import { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Modal } from "./Modal";

function PhotoList() {
  const { photos, loading } = useGlobalContext();

  const [modalID, setModalID] = useState(-1);

  const handleModal = (id) => {
    setModalID(id);
  };

  return (
    <div className="gallery">
      {photos.length > 0 && photos !== null && loading === false ? (
        photos.map((photo) => (
          <div key={photo.id}>
            <button onClick={() => handleModal(photo.id)}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                title={photo.title}
              />
            </button>

            {modalID === photo.id ? (
              <Modal id={photo.id} className="modal">
                <div className="modal-content">
                  <img src={photo.url} alt={photo.title} />
                  <p>{photo.title}</p>
                </div>

                <div className="modal-close">
                  <button onClick={() => handleModal(-1)}>X</button>
                </div>

                <button
                  className="overlay"
                  onClick={() => handleModal(-1)}
                ></button>
              </Modal>
            ) : null}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default PhotoList;
