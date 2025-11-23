'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EnvelopeAnimationProps {
  onOpen: () => void;
}

export function EnvelopeAnimation({ onOpen }: EnvelopeAnimationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  };

  return (
    <div
      className="relative w-[300px] h-[200px] mx-auto cursor-pointer"
      onClick={handleClick}
    >
      <div className={`envelope-container ${isOpen ? 'open' : 'close'}`}>
        {/* Front Flap */}
        <div className={`front-flap ${isOpen ? 'open' : ''}`}></div>

        {/* Front Pocket */}
        <div className="front-pocket"></div>

        {/* Wax Seal */}
        {!isOpen && (
          <div className="wax-seal">
            <Image
              src="https://cdn.cinelove.me/assets/plugins/wax-seal.webp"
              alt="wax seal"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        )}

        {/* Letter */}
        <div className={`letter ${isOpen ? 'slide-up-letter' : ''}`}>
          <Image
            src="https://cdn.cinelove.me/uploads/7fe19e5b-583e-4fed-a3c4-2c8343e0b9db/464f7f2a-59fb-45e8-ab22-0dcb6c8d3b5d.jpg?crop=0,3,1052,702&resize=800x"
            alt="invitation letter"
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Hearts Animation */}
        {isOpen && (
          <div className="hearts">
            <div className="heart heart-1"></div>
            <div className="heart heart-2"></div>
            <div className="heart heart-3"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        .envelope-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .front-flap {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-bottom: 100px solid #d4a574;
          top: 0;
          left: 0;
          transform-origin: top center;
          transition: transform 0.8s ease;
          z-index: 3;
        }

        .front-flap.open {
          transform: rotateX(180deg);
        }

        .front-pocket {
          position: absolute;
          width: 300px;
          height: 150px;
          background: #e8d5b7;
          bottom: 0;
          left: 0;
          z-index: 1;
        }

        .wax-seal {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          transition: opacity 0.5s ease;
        }

        .letter {
          position: absolute;
          width: 260px;
          height: 180px;
          background: white;
          top: 10px;
          left: 20px;
          z-index: 2;
          transition: transform 0.8s ease 0.5s;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .letter.slide-up-letter {
          transform: translateY(-100px);
        }

        .hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 5;
          pointer-events: none;
        }

        .heart {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #ff69b4;
          transform: rotate(45deg);
          animation: float-up 2s ease-out forwards;
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: #ff69b4;
          border-radius: 50%;
        }

        .heart::before {
          top: -10px;
          left: 0;
        }

        .heart::after {
          left: 10px;
          top: 0;
        }

        .heart-1 {
          left: 30%;
          animation-delay: 0.5s;
        }

        .heart-2 {
          left: 50%;
          animation-delay: 0.7s;
        }

        .heart-3 {
          left: 70%;
          animation-delay: 0.9s;
        }

        @keyframes float-up {
          0% {
            bottom: 0;
            opacity: 1;
          }
          100% {
            bottom: 200px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
