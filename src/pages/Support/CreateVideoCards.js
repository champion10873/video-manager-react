import CreateVideoCard from "../../components/CreateVideoCard";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DefaultButton from "../../components/DefaultButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid black",
  // borderRadius: "20px",
  boxShadow: 24,
};

const CardList = [
  {
    iconName: "video",
    description: "Grave o vídeo utilizando a câmera do computador",
    btnName: "Gravar Vídeo",
  },
  {
    iconName: "upload",
    description: "Carregue um vídeo dos seus arquivos",
    btnName: "Carregar Vídeo",
  },
  {
    iconName: "screen",
    description: "Grave a tela do seu computador",
    btnName: "Gravar Tela",
  },
];

const CreateVideoCards = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex gap-8">
      {CardList.map((item) => (
        <div
          className="hover:animate-[scale_0.2s_linear] hover:scale-105 cursor-pointer"
          onClick={handleOpen}
        >
          <CreateVideoCard
            iconName={item.iconName}
            btnName={item.btnName}
            description={item.description}
          />
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-white">
          <div className="flex justify-center text-center">
            <img src="./video_image.jpg" alt="video_image" width="100%" />
            <div className="absolute top-1/2 scale-[3]" onClick={handleClose}>
              <DefaultButton color="transparent" btnName="Close" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateVideoCards;
