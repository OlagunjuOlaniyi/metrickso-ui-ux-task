import React from "react";
import "./Home.css";
import { Box, TextField } from "@material-ui/core";

import Countdown from "../../components/Countdown/Countdown";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
        <h1>SOMETHING AWESOME IS COMING SOON</h1>
        <p className="home__callOut-tx">
          Your all-in-one affiliate marketing tracking software{" "}
          <strong>track, automate</strong> and <strong>optimize</strong> your
          campaigns
        </p>

        {/* countdown container */}
        <Countdown />

        {/* form section */}
        <Form />
      </div>
    </motion.section>
  );
};

export const Form = () => {
  return (
    <Box component="form" autoComplete="off">
      <TextField
        className="input"
        id="fname"
        margin="normal"
        label="First Name."
        variant="standard"
      />
      <TextField
        className="input"
        id="lname"
        label="Last Name."
        variant="standard"
        margin="normal"
      />
    </Box>
  );
};

export default Home;
