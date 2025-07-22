import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Sun } from '../../Uitls/Icons';

function Login() {
  const navigate = useNavigate();

  // Theme toggle state
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email('Must be a valid email')
        .matches(/@gmail\.com$/, 'Only @gmail.com emails are allowed')
        .required('Username (Gmail) is required'),

      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Login Form Submitted:', values);
      alert('Login Successful!');
      navigate('/landing');
    },
  });

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-500 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div
        className={`p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-500 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
      >
        {/* Icon and Heading */}
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-2xl font-bold mt-2 text-center">Login</h2>
          <div onClick={toggleTheme} className="cursor-pointer">
           <Sun className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              placeholder="Enter your username"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
          >
            Login
          </button>
         <div className="text-center mt-4">
  <a href="/signup" className="text-blue-600 underline hover:text-blue-800">
    Create an Account
  </a>
</div>

        </form>
      </div>
    </div>
  );
}

export default Login;
