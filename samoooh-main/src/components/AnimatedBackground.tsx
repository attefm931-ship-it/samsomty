import React from 'react';

const ARABIC_LETTERS = ['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي'];

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none animated-bg">
      {[...Array(30)].map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const size = 10 + Math.random() * 14;
        const letter = ARABIC_LETTERS[i % ARABIC_LETTERS.length];
        const driftX = (Math.random() * 6 - 3).toFixed(2);
        const driftY = (Math.random() * 6 - 3).toFixed(2);
        return (
          <span
            key={i}
            className="absolute text-sky-300/25 select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              textShadow: '0 0 8px rgba(56,189,248,0.25)',
              animation: `letterPulse 7s ease-in-out ${delay}s infinite, drift${i} 14s ease-in-out ${delay}s infinite alternate`
            }}
          >
            {letter}
            <style>{`@keyframes drift${i}{0%{transform: translate(0px,0px);}50%{transform: translate(${driftX}px, ${driftY}px);}100%{transform: translate(0px,0px);}}`}</style>
          </span>
        );
      })}

      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(2,132,199,0.06), transparent 45%)',
        animation: 'pulse 10s ease-in-out infinite'
      }} />
    </div>
  );
};