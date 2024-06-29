'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-auto bg-black text-white py-10">
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold pixel-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          ROADMAP
        </motion.h1>
        <motion.div
          className="mt-6 text-md pixel-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="mb-4">Phase 1: Meme</p>
          <p className="mb-4">Phase 2: Vibe and HODL</p>
          <p className="mb-4">Phase 3: Meme Takeover</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
