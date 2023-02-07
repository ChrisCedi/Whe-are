import React from "react";
import { useStyles } from "./MenuStyles";
import { Grid, Box, Button, Typography, Link } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuContext } from "./MenuProvider";
import { Images } from "../assets";

const Menu = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { developerList } = useContext(MenuContext);
  const { developer } = useParams();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box className={classes.gridItems}>
            <Typography variant="h4">Whe are</Typography>
            <Typography variant="h6">
              Este es un proyecto diseñado completamente en javascript con
              react, material ui y firebase. Explora nuestro menú y experimenta
              con nuestra página, descubre lo bueno de react. Si te interesa te
              dejamos la documentación de sus páginas oficiales.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.gridItemLogo}>
            <img
              className={classes.escudo}
              src="https://www.ingenieria.unam.mx/nuestra_facultad/images/institucionales/escudos/escudofi_negro.jpg"
              alt="logoFi"
            />
          </Box>
        </Grid>
        {developerList.map((developer) => (
          <Grid item xs={12} md={4}>
            <Box className={classes.gridItems}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6">Developer</Typography>
                  <Typography>{developer.name}</Typography>
                  <Typography>{developer.age}</Typography>
                  <Typography>{developer.ocupation}</Typography>
                  <Typography style={{ paddingBottom: 10 }}>
                    {developer.extra}
                  </Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() =>
                      navigate(`/profile/${developer.id}`, { developer })
                    }
                  >
                    Ver perfil
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    className={classes.profilePhoto}
                    src={developer.profile}
                    alt="chris"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Box className={classes.gridItems}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography variant="h5" style={{ paddingBottom: 2 }}>
                    Recursos utilizados
                  </Typography>
                  <Typography>
                    • React: framework principal de trabajo
                  </Typography>
                  <Typography>
                    • Context: aporta contexto global de los datos y funciones
                  </Typography>
                  <Typography>
                    • Firebase y Firestore: base de datos (crear y borrar
                    mensajes)
                  </Typography>
                  <Typography>• Material ui: intefaz más estilizada</Typography>
                  <Typography>• Css: estilos</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" justifyContent="flex-end">
                  <img
                    src={Images.recursos}
                    alt="op"
                    style={{ height: "100%", width: "100%", paddingTop: 30 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.gridItems}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography variant="h5">Regalanos un comentario</Typography>
                  <Typography
                    style={{
                      paddingRight: 30,
                      paddingTop: 20,
                      paddingBottom: 15,
                    }}
                  >
                    Tu opinión nos ayuda a mejorar, dinos que te parece, que
                    mejoras implementarias a nuestra web. Haz click en el botón
                    para realizar el comentario.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/opinions`)}
                  >
                    Comentar
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" justifyContent="flex-end">
                  <img
                    src={Images.opinionImage}
                    alt="op"
                    style={{ height: "100%", width: "80%", paddingTop: 30 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Herramientas ulizadas
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.gridLogos}>
            <Typography variant="h6">React</Typography>
            <img
              className={classes.logosFrameworks}
              src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
              alt="reactLogo"
            />
            <Button variant="contained" color="primary">
              <Link
                href="https://es.reactjs.org/"
                color="initial"
                className={classes.link}
              >
                Ir a React
              </Link>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className={classes.gridLogos}>
            <Typography variant="h6">Material ui</Typography>
            <img
              className={classes.logosFrameworks}
              src="https://v4.mui.com/static/logo.png"
              alt="material"
            />
            <Button variant="contained" color="primary">
              <Link
                href="https://v4.mui.com/es/"
                color="initial"
                className={classes.link}
              >
                Ir a Material
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.gridLogos}>
            <Typography variant="h6">Firebase</Typography>
            <img
              className={classes.logosFrameworks}
              src="https://avatars.githubusercontent.com/u/1335026?s=280&v=4"
              alt="material"
            />
            <Button variant="contained" color="primary">
              <Link
                href="https://firebase.google.com/?hl=es-419&gclid=Cj0KCQiA1ZGcBhCoARIsAGQ0kkr5C6rzL4S_LHv2pI1J-xtZtc-MGI_zGyHZAWN8ZpkhKk46eNQaHGQaAps-EALw_wcB&gclsrc=aw.ds"
                color="initial"
                className={classes.link}
              >
                Ir a Firebase
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export { Menu };
