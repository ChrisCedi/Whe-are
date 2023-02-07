import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundImage: `linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)`,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
    letterSpacing: 1,
    transitionProperty: ` background `,
    transitionDuration: "1s",
    padding: theme.spacing(1),
    borderRadius: 10,
    "&:hover": {
      background: "#ABEBC6",
    },
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: 27,
      textAlign: "center",
    },
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 700,
    padding: theme.spacing(1),
    borderRadius: 10,
    marginBottom: theme.spacing(6),
    transitionProperty: ` background `,
    transitionDuration: "1s",
    "&:hover": {
      background: "#ABEBC6",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      textAlign: "center",
    },
  },
  button: {
    background: "#82E0AA",
    marginTop: theme.spacing(4),
    "&:hover": {
      background: "#D4EFDF",
    },
  },
  image: {
    width: 200,
    paddingTop: theme.spacing(2),
  },
}));

export { useStyles };
