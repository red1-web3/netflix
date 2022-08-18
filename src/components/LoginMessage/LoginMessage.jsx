import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

function LoginMessage({ modalIsOpen, setIsOpen }) {
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="relative z-[999]">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={4000}
        >
          <div className="relative py-6 px-8 bg-zinc-900">
            <div className="text-lg font-medium text-gray-400 space-y-3">
              <h2 className="text-center text-xl">Error</h2>
              <p>Sorry, please make sure that you are signned in</p>

              <div className="flex justify-center gap-2 items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-zinc-800 px-8 py-1 rounded"
                >
                  Close
                </button>

                <button className="bg-primary/70 px-8 py-1 rounded">
                  <Link to="/signin">Signin</Link>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default LoginMessage;
