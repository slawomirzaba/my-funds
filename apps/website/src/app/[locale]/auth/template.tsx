'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
