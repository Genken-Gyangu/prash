'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left">
        <motion.div
          className="md:w-1/2 p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold pixel-font">
            Prash
          </h1>
          <p className="mt-4 text-lg pixel-font">
            Meet Prash, the pixel version of Crash, the most influential person on the Base Network. Born in the pixelated landscapes of the Base Chain, Prash ascended to the throne with charisma and meme magic.
          </p>
          <p className="mt-4 text-lg pixel-font">
            Prash rules with a gentle hand and a big heart, mixing business with pleasure. He democratizes the crypto kingdom, proving every pixel can have fun.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/prash.png"
            alt="Pixel Art"
            width={200}
            height={200}
            className="pixel-art"
          />
          <div className="mt-4 flex space-x-4 justify-center">
            <a href="https://t.me/bit_" target="_blank" rel="noopener noreferrer" className="text-black bg-secondary px-4 py-2 rounded-full pixel-font hover:bg-accent hover:text-secondary transition duration-300 bg-white border border-white">
              Telegram
            </a>
            <a href="https://twitter.com/prashbase" target="_blank" rel="noopener noreferrer" className="text-black bg-secondary px-4 py-2 rounded-full pixel-font hover:bg-accent hover:text-secondary transition duration-300 bg-white border border-white">
              Twitter
            </a>
            <a href="https://www.dextools.io/app/en/base/pair-explorer/0xf5d1dc81b0d75c57d3fa9585fba238080ae56794?t=1719731172509" target="_blank" rel="noopener noreferrer" className="text-black bg-secondary px-4 py-2 rounded-full pixel-font hover:bg-accent hover:text-secondary transition duration-30">
              <Image
                src="/dextools.svg"
                alt="Dextools"
                width={24}
                height={24}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
