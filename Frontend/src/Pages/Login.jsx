import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Github, Chrome, Apple } from 'lucide-react';

const ModernLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || 'Login failed');
        setIsLoading(false);
        return;
      }

      login(data.token);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

          <div className="relative z-10 text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-600 mt-2">Login in to your account to continue</p>
          </div>

          {/* Social Login */}
          <div className="relative z-10 mb-6">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <button onClick={() => handleSocialLogin('Google')} className="social-login-btn">
                <Chrome className="social-icon" />
              </button>
              <button onClick={() => handleSocialLogin('Apple')} className="social-login-btn">
                <Apple className="social-icon" />
              </button>
              <button onClick={() => handleSocialLogin('GitHub')} className="social-login-btn">
                <Github className="social-icon" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-600 rounded-full">or continue with email</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 bg-white/60 border-gray-200 rounded focus:ring-green-500 focus:ring-2"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm text-green-600 hover:text-green-500 transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center">Login in</div>
              )}
            </button>
          </div>

          <div className="relative z-10 mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-green-600 hover:text-green-500 font-medium transition-colors">
                Register Now!
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Extra Tailwind classes */}
      <style>{`
        .social-login-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background-color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .social-login-btn:hover {
          background-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.05);
        }

        .social-icon {
          width: 20px;
          height: 20px;
          color: #4b5563;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          background-color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 0.75rem;
          backdrop-filter: blur(4px);
          outline: none;
          transition: all 0.2s;
        }

        .form-input:focus {
          border-color: transparent;
          box-shadow: 0 0 0 2px #6366f1;
        }
      `}</style>
    </div>
  );
};

export default ModernLoginPage;
