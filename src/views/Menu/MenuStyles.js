import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(4),
  },
  gridItems: {
    background: "white",
    margin: theme.spacing(2),
    minHeight: 200,
    padding: theme.spacing(4),
  },
  gridItemLogo: {
    display: "flex",
    justifyContent: "center",
    background: "white",
    margin: theme.spacing(2),
    height: 200,
    padding: theme.spacing(4),
  },
  gridContainer: {
    background: "white",
    margin: theme.spacing(2),
    minHeight: 200,
  },
  escudo: {
    width: "50%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "62%",
    },
  },
  logosFrameworks: {
    width: "50%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "62%",
    },
  },
  gridLogos: {
    background: "white",
    margin: theme.spacing(2),
    minHeight: 200,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    color: "white",
  },
  profilePhoto: {
    width: "100%",
  },
}));

export { useStyles };
