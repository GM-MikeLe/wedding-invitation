"use client";

import { Countdown } from "@/components/Countdown";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const weddingDate = new Date("2025-11-29T11:00:00");

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Main Container */}
      <div className="max-w-[500px] mx-auto relative bg-white flex flex-col items-center justify-center gap-10 py-10">
        {/* Header Section */}
        <div className="pt-10 px-4 text-center">
          <div className="flex justify-between items-center text-black text-xl font-medium mb-4">
            <span className="slide-right">YOU ARE</span>
            <span className="slide-up">THE LOVE OF</span>
            <span className="slide-left">MY LIFE</span>
          </div>

          <h1 className="text-6xl font-serif mt-8 slide-up">
            Wedding Invitation
          </h1>
        </div>

        {/* Couple Names Section */}
        <div className="px-4 py-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <div className="flex items-center justify-center gap-6 w-full max-w-md">
              <div className="flex-1 text-right">
                <p className="text-3xl font-serif text-[#baa58a] mb-2 slide-right">
                  Mậu Hoàng
                </p>
                <p className="text-sm text-black/70 uppercase">Chú rể</p>
              </div>

              <div className="shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 100 100"
                  className="fill-[#baa58a] slide-up"
                >
                  <path d="M70.7,71.3c-10.6,7.5-19.6,17.9-20.7,22.2c-1.3-4.3-9.4-14.5-20.8-22C17.5,63.8-0.1,56.6,0,37.4c0.2-35,37-42,50-11.9C62.3-3.4,99.8,2.1,100,37.2C100.1,56.4,82.3,63.1,70.7,71.3L70.7,71.3z" />
                </svg>
              </div>

              <div className="flex-1 text-left">
                <p className="text-3xl font-serif text-[#baa58a] mb-2 slide-left w-[50px]">
                  Kim Nhung
                </p>
                <p className="text-sm text-black/70 uppercase">Cô dâu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Flowers */}
        <div className="absolute top-28 -left-8 w-24 h-40 rotate-45 slide-right">
          <Image
            src="https://cdn-resource.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png"
            alt="flower"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-20 -left-12 w-24 h-40 rotate-[8deg] slide-right">
          <Image
            src="https://cdn-resource.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png"
            alt="flower"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[550px] right-[-50px] w-32 h-32 rotate-[-39deg] slide-left">
          <Image
            src="https://cdn-resource.cinelove.me/resources/bouquet/unri8axa4zmlj5408kc4ko.png"
            alt="flower"
            fill
            className="object-contain"
          />
        </div>

        {/* Invitation Content */}
        <div className="mt-16 px-4 flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl text-center mb-8 uppercase">
            Trân trọng kính mời
          </h2>

          <p className="text-3xl text-center text-[#baa58a] mb-8">
            Gia đình em
          </p>

          <div className="text-2xl text-center text-black mb-6 uppercase">
            <p>Đến dự buổi tiệc chung vui</p>
            <p>Cùng gia đình chúng tôi vào lúc</p>
          </div>

          <p className="text-4xl text-center text-[#baa58a] mb-4 leading-relaxed font-serif">
            11 GIỜ 00 | THỨ BẢY | 29.11.2025
          </p>

          <p className="text-xl text-center text-black mb-8">
            (Nhằm ngày 10 tháng 10 năm Ất Tỵ)
          </p>

          <div className="w-48 h-12 mx-auto mb-8 relative">
            <Image
              src="https://cdn-resource.cinelove.me/resources/dividers/16cvdln0hsto193fhow8kr.svg"
              alt="divider"
              fill
              className="object-contain"
            />
          </div>

          <div className="text-2xl text-center text-black mb-4 uppercase">
            Hôn lễ được cử hành tại
          </div>

          <p className="text-4xl text-center text-[#baa58a] mb-4 leading-snug font-serif">
            Resort Lan Rừng
          </p>

          <p className="text-xl text-center text-black mb-6">
            Xã Phước Hải, TP. HCM
          </p>

          <div className="flex justify-center mb-16">
            <a
              href="https://maps.app.goo.gl/rL3nS1rjUYPudxLw9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#94745c] text-white w-[200px] h-[40px] flex items-center justify-center text-center px-16 py-4 rounded-3xl text-lg hover:bg-[#7d6350] transition-colors"
            >
              Xem đường đi
            </a>
          </div>
        </div>

        {/* Message Section */}
        <div className="px-4 mb-12">
          <p className="text-lg text-center leading-relaxed text-black font-serif">
            Gửi đến bạn tấm thiệp cưới đầy yêu thương.
            <br />
            Những ai nhận được lời mời này đều là những người đặc biệt với bọn
            mình.
            <br />
            Mong bạn và gia đình sẽ đến chung vui,
            <br />
            Cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.
            <br />
            Cảm ơn vì luôn bên cạnh và yêu thương.
            <br />
            Bọn mình rất mong được gặp bạn trong ngày vui này! ❤️
          </p>
        </div>

        {/* Love Wedding Section */}
        <div className="flex justify-center items-center gap-4 text-2xl font-medium mb-12">
          <span className="slide-right">FALL IN</span>
          <span className="slide-up">LOVE</span>
          <span className="slide-left">WEDDING</span>
        </div>

        {/* Photo Section */}
        <div className="relative w-full h-[600px] px-12 mb-12 fade-in">
          <div className="relative w-full h-full rounded-[8px]">
            <Image
              src="https://cdn.cinelove.me/uploads/840549aa-357f-448d-8d22-f2d664a4caa1/20de27b9-04df-4136-886e-09ae8bb2dff8.jpg"
              alt="couple photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-white py-8 px-4 text-center">
          <p className="text-white text-sm mb-4 italic">
            As the clouds and mist dissipate, I love you and everyone knows it
          </p>
          <p className="text-black text-lg leading-snug">
            To Our Family And Friends,
            <br />
            Thank You For Celebrating Our Special Day,
            <br />
            Supporting Us And Sharing Our Love.
          </p>

          {/* Heart Icon */}
          <div className="flex justify-center my-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 100 100"
              className="fill-[#baa58a]"
            >
              <path d="M70.7,71.3c-10.6,7.5-19.6,17.9-20.7,22.2c-1.3-4.3-9.4-14.5-20.8-22C17.5,63.8-0.1,56.6,0,37.4c0.2-35,37-42,50-11.9C62.3-3.4,99.8,2.1,100,37.2C100.1,56.4,82.3,63.1,70.7,71.3L70.7,71.3z" />
            </svg>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="py-8 px-4">
          <Countdown targetDate={weddingDate} />
        </div>

        {/* Bottom Decoration */}
        <div className="relative h-40">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <Image
              src="https://cdn-resource.cinelove.me/resources/characters/h4py3okq2aoga2u5n94fcq.png"
              alt="decoration"
              width={92}
              height={121}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <Image
              src="https://cdn.cinelove.me/templates/assets/0189eb35-5cf1-4525-a8d0-867f70e0bf67/b2369584-b526-46a5-851b-034c9f2e1e0f.png"
              alt="bottom decoration"
              width={200}
              height={63}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
