import { makeStyles } from "@mui/styles";

export const usePageStyles = makeStyles((theme) => ({
  container: {
    padding: "5px 15px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    color: theme.palette.text.school,
    borderRadius: "10px",

    "& > h1": {
      fontFamily: "Times New Roman",
      fontSize: "40px",
      fontWeight: "normal",
      margin: "15px 0px 10px 0px",
      textAlign: "center",
    },
    "& > p": {
      textAlign: "justify",
      fontSize: "17px",
      margin: "0px 0px 10px 0px",
    },
  },

  blockCode: {
    color: theme.palette.text.primary,
    background: theme.palette.background.blockCode,
    padding: "1px 0px",
    borderLeft: theme.palette.borderLeft,
    margin: "5px 0px",

    "& > ol": {
      counterReset: "myCounter",
      padding: "0px",
      margin: "5px 0px",

      "& > li": {
        listStyle: "none",

        "&:before": {
          counterIncrement: "myCounter",
          content: "counter(myCounter)",
          color: theme.palette.text.ol,
          fontFamily: "Times New Roman",
          display: "inline-block",
          textAlign: "center",
          marginRight: "10px",
          lineHeight: "30px",
          width: "30px",
          height: "30px",
          borderRight: theme.palette.borderRight,
        },
      },
    },
  },
  tegMaim: {
    color: theme.palette.text.tegMain,
  },
  tegSupport: {
    color: theme.palette.text.tegSupport,
  },

  blockTask: {
    height: "150px",
    border: theme.palette.borderRight,
    marginTop: '15px',
    padding: '20px',
    
    "& > h1": {
        fontFamily: "Times New Roman",
        fontSize: "40px",
        fontWeight: "normal",
        margin: "0px 0px 10px 0px",
        textAlign: "center",
      },
      "& > p": {
        textAlign: "justify",
        fontSize: "17px",
        margin: "0px 0px 10px 0px",
      },
  },
  footer: {
    height: "50px",
    width: "100%",
    borderTop: theme.palette.borderRight,
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",

    fontSize: "70px",
    lineHeight: "0px",
    "& > a": {
        color: theme.palette.text.primary,
      },
  },
  footerArrow: {
    paddingTop: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "#FFD93D",
    },
  },
}));
