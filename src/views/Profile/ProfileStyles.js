import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section1: {
    backgroundImage: `linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)`,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  section2: {
    backgroundImage:
      "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
    minHeight: "100vh",
  },
  section3: {
    backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  iconButton: {
    position: "absolute",
    bottom: 0,
  },
  button1: {
    fontSize: 60,
    color: "white",
  },
  name: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 50,
    },
  },
  imageSec1: {
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  titleSong: {
    fontWeight: 700,
    paddingBottom: theme.spacing(4),
  },
  gridProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
  },
  imageProfile: {
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(0),
    },
  },
  textDescription: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  boxImage: {
    height: "200px",
    width: "300px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  endDescription: {
    textAlign: "center",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
    },
  },
}));

export { useStyles };
