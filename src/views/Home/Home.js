import React from "react";
import { useStyles } from "./HomeStyles";
import { Typography, Button, Box } from "@material-ui/core";
import { Images } from "../assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Box className={classes.boxTexts}>
        <Typography className={classes.title} variant="h4">
          Bienvenidos a sistemas operativos
        </Typography>
      </Box>

      <Typography className={classes.subtitle} variant="h5">
        Grupo 1
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => navigate("/menu")}
      >
        Empezar
      </Button>

      <img src={Images.imageHome} alt="dsad" className={classes.image} />
    </div>
  );
};

export { Home };
