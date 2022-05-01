import { styled } from "@mui/material";

export const useMessagesStyles = () => {
  const ContainerMessagesMUI = styled("div")(({ theme }) => ({
    padding: "15px",
    color: "white",
    overflowY: "auto",
    height: "83vh",
    borderRadius: "20px 4px 4px 20px",
    boxShadow: "0px 0px 2px wheat",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '80px',
    
    //  фон самого скроллбара
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    // пустое пространство под индикатором прокрутки
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#247881",
      borderRadius: "0px 10px 10px 0px",
    },
    // индикатор прокрутки, перетаскиваемый элемент.
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ff0036",
      borderRadius: "0px 10px 10px 0px",
    },
  }));

  const ContainerMessageMUI = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "10px 0px",
  }));

  const MessageuserDivideMUI = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  }));

  const MessagePhotoMUI = styled("div")(({ theme }) => ({
    "& > img": {
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      margin: "0px 5px 0px 0px",
    },
  }));
  const MessageuserNameMUI = styled("div")(({ theme }) => ({
    color: "#ff0036",
  }));
  const MessageNewMessageMUI = styled("div")(({ theme }) => ({
    maxWidth: "387px",
    color: theme.palette.text.primary,
    wordBreak: "break-word",
  }));


  // 	[theme.breakpoints.down(1025)]: {
  // 		marginBottom: '32px'
  // 	}
 

  return {
    ContainerMessagesMUI,
    ContainerMessageMUI,
    MessageuserDivideMUI,
    MessagePhotoMUI,
    MessageuserNameMUI,
    MessageNewMessageMUI,
   
  };
};
