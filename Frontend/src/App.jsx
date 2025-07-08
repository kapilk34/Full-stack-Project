import React from 'react';
import { Suspense } from 'react'; 
import { RouterProvider } from 'react-router-dom';
// import router from './Routes/Applayout';
import router from './Routes/index';
// import router from './Routes/CompleateRoutes';
import { AuthProvider } from './context/AuthContext';
import "./index.css";


const App = () => {
  return (
    <>
      <Suspense fallback={
        <div className='w-full h-screen flex items-center justify-center'>

        </div>
      }>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
      </Suspense>
    </>
  )
}

export default App