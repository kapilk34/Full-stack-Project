"use client"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Check } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const passwordStrength = (password) => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 8) return 2;
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) return 4;
    return 3;
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const getPasswordStrengthText = (strength) => {
    switch (strength) {
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const strength = passwordStrength(formData.password);

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Registration failed');
        setIsLoading(false);
        return;
      }

      alert('Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setAgreedToTerms(false);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <User className="w-8 h-8 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-500">Join us and start your journey</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {formData.password && (
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full ${strength >= level ? getPasswordStrengthColor(strength) : 'bg-gray-600'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  Password strength: <span className="font-semibold">{getPasswordStrengthText(strength)}</span>
                </p>
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  agreedToTerms ? 'bg-green-500 border-green-500' : 'border-gray-400 hover:border-green-400'
                }`}
              >
                {agreedToTerms && <Check className="w-3 h-3 text-gray-800" />}
              </button>
              <label className="text-sm text-gray-600 cursor-pointer" onClick={() => setAgreedToTerms(!agreedToTerms)}>
                I agree to the{' '}
                <a href="#" className="text-green-600 hover:text-green-400 underline">Terms of Service</a> and{' '}
                <a href="#" className="text-green-600 hover:text-green-400 underline">Privacy Policy</a>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || !agreedToTerms}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{' '}
            <a href="#" className="text-green-300 hover:text-green-500 font-semibold transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
