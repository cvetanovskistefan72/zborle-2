import React from 'react'

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const InstructionsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-sm mx-auto my-6">
            {/* Modal content */}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-xl font-semibold">Modal Header</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/* Modal body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-gray-600 text-lg leading-relaxed">
                  Modal Content
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </div>
      ) : null}
    </>
  );
};

export default InstructionsModal;
