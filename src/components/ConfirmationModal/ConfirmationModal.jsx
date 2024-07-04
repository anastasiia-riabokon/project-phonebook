import Modal from "react-modal";
import {customStyles} from "../../helpers/customStyleForModal";
import {AnimatePresence, motion} from "framer-motion";
import {modalVariants} from "../../helpers/paramsAnimationModal";

const ConfirmationModal = ({isOpenWindow, onClose, text, onConfirm}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <AnimatePresence>
      <Modal isOpen={isOpenWindow} onRequestClose={onClose} style={customStyles}>
        <motion.div
          className="modal-box"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-xl text-center mb-4">{text}</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-outline btn-sm" onClick={handleConfirm}>
              Yes
            </button>
            <button className="btn btn-outline btn-sm" onClick={onClose}>
              No
            </button>
          </div>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};
export default ConfirmationModal;
