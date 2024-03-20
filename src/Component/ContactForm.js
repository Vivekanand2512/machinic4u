
  "use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = (props) => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        mobileNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        Name: '',
        email: '',
        mobileNumber: '',
        message: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Form rendered successfully!');
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!formData.Name) {
            newErrors.Name = 'Full Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobileNumber) {
            newErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^[6789]\d{9}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile Number is invalid';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                await postData();
                console.log('Form submitted successfully!');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
   
    const postData = async () => {
        try {
            const response = await axios.post('http://localhost:1024/', {
                name: formData?.Name,
                email: formData?.email,
                mobile: formData?.mobileNumber,
                message: formData?.message,
            });
            setFormData({
                Name: '',
                email: '',
                mobileNumber: '',
                message: '',
            });
            console.log('Response:', response);
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    };
  
    return (
        <div className="md:px-12 p-3 rounded-lg shadow-lg text-gray-900">
            {props?.show && (
                <div className="text-center">
                    <h1 className="text-4xl lg:text-4xl">Contact Form</h1>
                    <div className='my-3'>
                        <b>Lets talk about everything!</b>
                        <div className="text-gray-700 mt-8">
                            Hate forms? Send us an <span className="underline">email</span> instead.
                        </div>
                    </div>
                </div>
            )}
            <div className='p-3'>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name" className="block font-bold text-sm">
                         Name:
                       </label>
                        <input
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            className={`w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.Name ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Enter your Name"
                            required
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div className='my-3'>
                    <label htmlFor="email" className="block font-bold text-sm">
                         Email:
                       </label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                    <label htmlFor="mobileNumber" className="block font-bold text-sm">
                    Mobile Number:
                       </label>
                        <input
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className={`w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.mobileNumber ? 'border-red-500' : ''}`}
                            type="tel"
                            placeholder="Mobile Number"
                            minLength="10"
                            maxLength="10"
                            pattern="[1-9]{1}[0-9]{9}"
                            required
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
                    </div>
                  {props?.show &&<div className='my-3'>
                  <label htmlFor="choose Services" className="block font-bold text-sm">
                  choose Services:
                       </label>
                        <select name="choose Services" className={`w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.mobileNumber ? 'border-red-500' : ''}`}>
                            <option>Choose a Services</option>
                            <option value="Bike Repair">Bike Repair</option>
                            <option value="Car repair">Car repair</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Plumber">Plumber</option>
                        </select>
                    </div>}
                    <div className="mt-8">
                    <label htmlFor="message" className="block font-bold text-sm">
                      Comment:
                       </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                            placeholder="Message"
                            required
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
