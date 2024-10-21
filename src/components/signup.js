import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import  Clippathgroup from "../assets/Clippathgroup.png";

const SignUp = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username: `${values.firstName} ${values.lastName}`,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        alert('User registered successfully');
        resetForm();
      }
    } catch (error) {
      console.error('Error registering user', error);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-4xl flex justify-start p-8">
        {/* <img src={Vector} alt="Genix Auctions Logo" className="mr-4" />
        <h1 className="text-2xl font-semibold">Genix Auctions</h1> */}
      </div>
      <div className="max-w-4xl w-full flex">
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-4">Sign up</h2>
          <p className="text-gray-600 mb-6">
            New bidders, as soon as you have submitted your information you will be eligible to bid in the auction.
          </p>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              receiveEmails: true,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <div className="relative">
                    <Field
                      type="password"
                      name="password"
                      className="w-full border border-gray-300 p-2 rounded mt-1"
                    />
                    <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4 flex items-center">
                  <Field type="checkbox" name="receiveEmails" className="mr-2" />
                  <label className="text-gray-700">Receive outbid emails</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-between">
            <button className="flex items-center border border-gray-300 p-2 rounded w-1/3 justify-center">
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button className="flex items-center border border-gray-300 p-2 rounded w-1/3 justify-center mx-2">
              <i className="fab fa-apple mr-2"></i> Apple
            </button>
            <button className="flex items-center border border-gray-300 p-2 rounded w-1/3 justify-center">
              <i className="fab fa-facebook mr-2"></i> Facebook
            </button>
          </div>
          <p className="mt-6 text-center text-gray-500">
            Want to know more? <a href="#" className="text-blue-500">Auction rules</a>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={Clippathgroup}
            alt="Illustration of two people interacting with a large screen"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
