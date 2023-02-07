import React, { useState, useContext, useEffect } from "react";
import { useStyles } from "./OpinionsStyles";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { opinionsContext } from "./OpinionsProvider";

const Opinions = () => {
  const classes = useStyles();
  const [messageState, setMessageState] = useState("");
  const {
    handleGetComments,
    commentsList,
    handleDeleteComment,
    handleAddComment,
  } = useContext(opinionsContext);

  useEffect(() => {
    handleGetComments();
  }, []);

  console.log(commentsList);
  const handleMessage = (e) => {
    setMessageState(e);
  };

  const handleSubmit = () => {
    const values = {
      message: messageState,
      date: new Date(),
    };
    handleAddComment(values);

    setMessageState("");
  };

  const handleDelete = (id) => {
    handleDeleteComment(id);
  };
  return (
    <div className={classes.container}>
      <Typography variant="h4">Comentarios</Typography>
      <Box className={classes.boxField}>
        <TextField
          label="Comentario"
          placeholder="Ej: Gran web"
          variant="filled"
          multiline
          value={messageState}
          onChange={(e) => handleMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={messageState.length === 0 ? true : false}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </Box>
      <Grid container spacing={2}>
        {commentsList.map((comment) => (
          <Grid item xs={12} md={3}>
            <Box className={classes.boxMessage}>
              <Typography>{comment.message}</Typography>
              <Box className={classes.boxDelete}>
                <IconButton onClick={() => handleDelete(comment.id)}>
                  <DeleteIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Opinions };
