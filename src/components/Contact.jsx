import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, CircularProgress } from '@mui/material';
import { Linkedin, Mail, Github } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Contact = () => {
    const msg = "Send Message"
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            setLoading(true); 
            fetch('https://getform.io/f/aqongwra', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((response) => {
                    if (response.ok) {
                        toast.success('I HAVE RECEIVED YOUR MESSAGE! APPRECIATED', {
                            position: 'top-right',
                        });
                        resetForm();
                    } else {
                        console.error('Form submission failed', response);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    setLoading(false); 
                });
        },
    });

    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Contact Me</h2>

                {/* Contact Form */}
                <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-lg border border-white/10 dark:border-gray-700/20 rounded-lg p-8 mb-8">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="mb-4"
                            InputLabelProps={{ className: 'text-gray-800 dark:text-gray-300' }}
                            InputProps={{
                                className: 'bg-white/50 dark:bg-gray-700/30 text-gray-800 dark:text-gray-300',
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            className="mb-4"
                            InputLabelProps={{ className: 'text-gray-800 dark:text-gray-300' }}
                            InputProps={{
                                className: 'bg-white/50 dark:bg-gray-700/30 text-gray-800 dark:text-gray-300',
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            id="message"
                            name="message"
                            multiline
                            rows={4}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            className="mb-4"
                            InputLabelProps={{ className: 'text-gray-800 dark:text-gray-300' }}
                            InputProps={{
                                className: 'bg-white/50 dark:bg-gray-700/30 text-gray-800 dark:text-gray-300',
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: loading ? '#ffffff' : '#4f46e5' }} 
                            className="text-white py-3 rounded-md"
                            disabled={loading} 
                        >
                            {loading ? (
                                <CircularProgress size={20} color="inherit" />
                            ) : (
                                msg
                            )}
                        </Button>
                    </form>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/Kashan321" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                    <a  href="https://linkedin.com/in/mkashanhaider" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:muhammadkashanhaider3241@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <span className="sr-only">Email</span>
                        <Mail className="h-6 w-6" />
                    </a>
                </div>

                {/* Toast Container */}
                <ToastContainer />
            </div>
        </section>
    );
};

export default Contact;
