import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Animated Cow with Halo */}
      <div className="relative">
        <div className="text-4xl animate-bounce">🐄</div>
        <div className="absolute -top-2 -left-1 text-2xl animate-pulse text-yellow-400">✨</div>
      </div>
      {/* Blog Name */}
      <h1 className="text-3xl font-bold text-gray-800 animate-fade-in">
        No Sacred Cows
      </h1>
    </div>
  );
};

export default Logo;