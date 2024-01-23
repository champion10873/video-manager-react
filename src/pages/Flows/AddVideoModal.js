import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddVideo from "../Support/Content";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 8,
  pt: 4,
};

export default function AddVideoModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="mt-2 flex items-center">
        <div
          className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center hover:bg-[#11047A] hover:animate-[scale_0.2s_linear] hover:scale-105 cursor-pointer"
          onClick={handleOpen}
        >
          <AddCircleOutlineIcon />
        </div>
        <div className="text-black text-sm font-bold ml-3">Add video</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center text-center">
            <AddVideo />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
