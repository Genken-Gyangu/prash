'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Apestore = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-96 bg-black text-white">
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold pixel-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Buy on Apestore
        </motion.h1>
        <motion.p
          className="mt-2 text-md pixel-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
        </motion.p>
        <motion.a
          href="https://ape.store"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-black bg-secondary px-3 py-1 rounded-full pixel-font hover:bg-accent hover:text-secondary transition duration-300 bg-white border border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Visit Apestore
        </motion.a>
      </div>
    </section>
  );
};

export default Apestore;
