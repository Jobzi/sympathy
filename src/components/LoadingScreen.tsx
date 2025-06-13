import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <img 
            src="/sp-w.svg" 
            alt="Sympathy Studio Logo" 
            className="w-12 h-12"
          />
          <span className="text-white text-2xl font-light tracking-wider">
            SYMPATHY <span className="font-medium">STUDIO</span>
          </span>
        </div>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;