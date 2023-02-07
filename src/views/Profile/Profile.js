import { Typography, IconButton, Grid, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ProfileStyles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../Menu/MenuProvider";
import { Images } from "../assets";

const Profile = () => {
  const classes = useStyles();
  const { developer } = useParams();
  const { developerList } = useContext(MenuContext);

  const dataDev = developerList.find((item) => item.id === developer);

  return (
    <div>
      <section className={classes.section1} id="sec1">
        <Typography variant="h2" className={classes.name}>
          Hola, soy {dataDev.subname}
        </Typography>
        <Typography variant="h6">Apreta el botón y descubre</Typography>
        <img src={Images.devProfile} className={classes.imageSec1} />

        <IconButton
          className={classes.iconButton}
          onClick={() =>
            document.getElementById("sec2").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <ArrowDownwardIcon className={classes.button1} fontSize="large" />
        </IconButton>
      </section>

      <section id="sec2" className={classes.section2}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6} className={classes.gridProfile}>
            <img
              src={dataDev.profile}
              alt="asd"
              className={classes.imageProfile}
            />
          </Grid>

          <Grid item xs={12} md={6} className={classes.description}>
            <Typography variant="h4">Un poco sobre mí...</Typography>
            <Typography className={classes.textDescription}>
              {dataDev.description}
            </Typography>
            <Box className={classes.boxImage}>
              <img
                src={dataDev.musicalUrl}
                alt="destival"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography>{dataDev.musicalDescription}</Typography>
            <IconButton
              onClick={() =>
                document.getElementById("sec3").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <ArrowDownwardIcon className={classes.button1} fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </section>
      <section className={classes.section3} id="sec3">
        <Typography variant="h5" className={classes.titleSong}>
          Una de mis canciones favoritas, escuchala aquí
        </Typography>
        {dataDev.songUrl}
        <Typography className={classes.endDescription}>
          {dataDev.endDescription}
        </Typography>
        <IconButton
          onClick={() =>
            document.getElementById("sec1").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <ArrowUpwardIcon className={classes.button1} fontSize="large" />
        </IconButton>
      </section>
    </div>
  );
};

export { Profile };
