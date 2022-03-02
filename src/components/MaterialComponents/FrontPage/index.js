import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FrontPageLayout from "./FrontPageLayout";
import styled from "styled-components";

const styles = (theme) => ({
  background: {
    backgroundImage: (props) => `url(${props.imagen})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  h2: {
    marginBottom: theme.spacing(2),
    fontSize: 40,
    [theme.breakpoints.up("sm")]: {
      fontSize: 62,
    },
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
});

const Container = styled.div`
  width: 150px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffff;
  border-radius: 20px;
  color: black;
  /* text-align: center; */
  padding: 0 30px;

  h4 {
    font-size: 12px;
    margin: 0;
  }

  p {
    font-size: 10px;
    margin: 0;
  }

  button {
    font-size: 10px;
    padding: 6px;
    cursor: pointer;
    border-radius: 500px;
    background-color: #4f94e2;
    outline: none;
    border: 0px;
  }
`;

function FrontPage(props) {
  const { classes, openModal } = props;

  return (
    <FrontPageLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" /> */}
      <Typography color='inherit' align='center' variant='h2' marked='center' className={classes.h2}>
        Servicios Integrales de Salud del Magdalena
      </Typography>
      <Typography color='inherit' align='center' variant='h5' className={classes.h5}>
        Su salud en buenas manos.
      </Typography>
      <Container>
        <h4>Citas Medicas</h4>
        <p>Agenda tus citas de medicina general y otras especialidades.</p>
        <button onClick={openModal}>Agendar Cita</button>
      </Container>
    </FrontPageLayout>
  );
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default withStyles(styles)(FrontPage);
