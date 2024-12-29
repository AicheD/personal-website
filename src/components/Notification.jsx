import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message, type, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`relative mt-4 p-4 rounded-lg shadow-lg md:w-3/4 mx-auto ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}
        >
            <div className="flex justify-between items-center">
                <span className="text-white">{message}</span>
                <button onClick={onClose} className="ml-4 text-lg font-bold text-white">&times;</button>
            </div>
        </motion.div>
    );
};

export default Notification;
