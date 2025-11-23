'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-5 text-white">
      <div className="bg-black flex flex-col items-center justify-center min-w-[80px] py-4">
        <div className="text-4xl font-light">{timeLeft.days}</div>
        <div className="text-sm mt-1">ngày</div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center min-w-[80px] py-4">
        <div className="text-4xl font-light">{timeLeft.hours}</div>
        <div className="text-sm mt-1">giờ</div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center min-w-[80px] py-4">
        <div className="text-4xl font-light">{timeLeft.minutes}</div>
        <div className="text-sm mt-1">phút</div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center min-w-[80px] py-4">
        <div className="text-4xl font-light">{timeLeft.seconds}</div>
        <div className="text-sm mt-1">giây</div>
      </div>
    </div>
  );
}
