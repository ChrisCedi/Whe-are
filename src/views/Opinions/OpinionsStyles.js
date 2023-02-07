import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: theme.spacing(4),
  },
  boxField: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  boxMessage: {
    backgroundColor: "white",
    minHeight: "100px",
    padding: theme.spacing(1),
  },
  boxDelete: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export { useStyles };
