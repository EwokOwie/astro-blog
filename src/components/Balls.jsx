import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Ball = () => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -30, 0, -15, 0, -5, 0] }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#ccc" />
    </svg>
  </motion.div>
);

const Balls = () => (
  <div>
    <Ball />
  </div>
);

export default Balls;
