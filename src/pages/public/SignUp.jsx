import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Sun } from '../../Uitls/Icons';

function SignUp() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      cnic: '',
      city: '',
      postalAddress: '',
      homeAddress: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      cnic: Yup.string()
        .matches(/^\d{5}-\d{7}-\d{1}$/, 'CNIC must be like 42101-1234567-1')
        .required('CNIC is required'),
      city: Yup.string().required('City is required'),
      postalAddress: Yup.string().required('Postal address is required'),
      homeAddress: Yup.string().required('Home address is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('SignUp Successful!');
    },
  });

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} min-h-screen flex items-center justify-center px-4 transition-all duration-500`}>
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg w-full max-w-md`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <button onClick={toggleTheme} className="absolute right-4 top-4">
            <Sun className={`w-6 h-6 ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`} />
          </button>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="Enter your first name"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="Enter your last name"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
            )}
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-sm font-medium">CNIC</label>
            <input
              type="text"
              name="cnic"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cnic}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="e.g., 42101-1234567-1"
            />
            {formik.touched.cnic && formik.errors.cnic && (
              <p className="text-red-500 text-sm">{formik.errors.cnic}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="Enter your city"
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm">{formik.errors.city}</p>
            )}
          </div>

          {/* Postal Address */}
          <div>
            <label className="block text-sm font-medium">Postal Address</label>
            <input
              type="text"
              name="postalAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalAddress}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="Enter your postal address"
            />
            {formik.touched.postalAddress && formik.errors.postalAddress && (
              <p className="text-red-500 text-sm">{formik.errors.postalAddress}</p>
            )}
          </div>

          {/* Home Address */}
          <div>
            <label className="block text-sm font-medium">Home Address</label>
            <input
              type="text"
              name="homeAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.homeAddress}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit text-inherit"
              placeholder="Enter your home address"
            />
            {formik.touched.homeAddress && formik.errors.homeAddress && (
              <p className="text-red-500 text-sm">{formik.errors.homeAddress}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Go to Login Button */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/')}
              className="text-blue-500 hover:underline"
            >
              Go to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
