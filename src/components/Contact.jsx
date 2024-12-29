import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Notification from './Notification';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('fake', formData);
            // await axios.post('https://formspree.io/f/mbllyzjl', formData);
            setNotification({ message: 'Message sent successfully!', type: 'success' });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message', error);
            setNotification({ message: 'Failed to send message. Please try again later.', type: 'error' });
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0 }}
            className='max-w-[1200px] mx-auto px-12 my-3 md:my-7'
            id='contact' 
        >
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='text-4xl font-bold text-gray-200 mb-8 text-center'
            >
                Contact Me
            </motion.h2>
            <motion.form 
                onSubmit={handleSubmit} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='space-y-6 border-2 border-gray-800 p-8 rounded-lg bg-orange-600 bg-opacity-90'
            >
                <div>
                    <label htmlFor="name" className='block text-gray-300 mb-2 text-xl'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600'
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block text-gray-300 mb-2 text-xl'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600'
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block text-gray-300 mb-2 text-xl'>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 h-32'
                    />
                </div>
                <button type="submit" className='w-full px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-500 transition duration-200'>
                    Send
                </button>
            </motion.form>
            <AnimatePresence>
                {notification && (
                    <Notification 
                        message={notification.message} 
                        type={notification.type} 
                        onClose={() => setNotification(null)} 
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Contact;