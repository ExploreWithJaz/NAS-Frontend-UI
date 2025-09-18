'use client';
import React, { ReactNode } from "react";

type BlueGlitchProps = {
  children: ReactNode;
};

export default function BlueGlitch({ children }: BlueGlitchProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1f2e]">
      <style jsx>{`
        .background {
          position: relative;
          width: 100%;
          height: 100vh;
          background: radial-gradient(ellipse at center, #242a3d 0%, #1a1f2e 50%, #141823 100%);
          background-size: 100% 100%;
        }

        .background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(45deg, transparent 49%, rgba(76, 201, 240, 0.04) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(76, 201, 240, 0.04) 50%, transparent 51%);
          background-size: 60px 60px;
        }

        .particle {
          position: absolute;
          background: rgba(76, 201, 240, 0.7);
          border-radius: 50%;
          pointer-events: none;
        }

        .particle-1 {
          width: 2px;
          height: 2px;
          top: 20%;
          left: 15%;
          animation: float1 8s infinite ease-in-out;
        }

        .particle-2 {
          width: 1px;
          height: 1px;
          top: 40%;
          left: 80%;
          animation: float2 12s infinite ease-in-out;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          top: 70%;
          left: 25%;
          animation: float3 10s infinite ease-in-out;
        }

        .particle-4 {
          width: 1.5px;
          height: 1.5px;
          top: 30%;
          left: 60%;
          animation: float4 15s infinite ease-in-out;
        }

        .particle-5 {
          width: 2.5px;
          height: 2.5px;
          top: 80%;
          left: 70%;
          animation: float5 9s infinite ease-in-out;
        }

        .particle-6 {
          width: 1px;
          height: 1px;
          top: 15%;
          left: 45%;
          animation: float6 11s infinite ease-in-out;
        }

        .particle-7 {
          width: 2px;
          height: 2px;
          top: 60%;
          left: 90%;
          animation: float7 13s infinite ease-in-out;
        }

        .particle-8 {
          width: 1.5px;
          height: 1.5px;
          top: 45%;
          left: 10%;
          animation: float8 7s infinite ease-in-out;
        }

        .blue-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(76, 201, 240, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          top: 30%;
          left: 40%;
          animation: pulse 6s infinite ease-in-out;
        }

        .blue-glow-2 {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(76, 201, 240, 0.10) 0%, transparent 60%);
          border-radius: 50%;
          top: 60%;
          left: 70%;
          animation: pulse 8s infinite ease-in-out reverse;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(76, 201, 240, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(76, 201, 240, 0.02) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(76, 201, 240, 0.015) 1px, transparent 1px);
          background-size: 100px 100px, 150px 150px, 80px 80px;
          animation: drift 20s infinite linear;
        }

        .glitch-square {
          position: absolute;
          background: rgba(76, 201, 240, 0.3);
          border: 1px solid rgba(76, 201, 240, 0.6);
          opacity: 0;
          pointer-events: none;
        }

        .glitch-square-1 {
          width: 40px;
          height: 40px;
          top: 25%;
          left: 20%;
          animation: glitch1 3s infinite ease-in-out;
        }

        .glitch-square-2 {
          width: 60px;
          height: 25px;
          top: 60%;
          left: 75%;
          animation: glitch2 5s infinite ease-in-out;
        }

        .glitch-square-3 {
          width: 30px;
          height: 50px;
          top: 40%;
          left: 50%;
          animation: glitch3 8s infinite ease-in-out;
        }

        .glitch-square-4 {
          width: 80px;
          height: 20px;
          top: 80%;
          left: 30%;
          animation: glitch4 10s infinite ease-in-out;
        }

        .glitch-square-5 {
          width: 35px;
          height: 35px;
          top: 15%;
          left: 70%;
          animation: glitch5 13s infinite ease-in-out;
        }

        .glitch-square-6 {
          width: 25px;
          height: 25px;
          top: 10%;
          left: 40%;
          animation: glitch1 7s infinite ease-in-out;
        }

        .glitch-square-7 {
          width: 50px;
          height: 18px;
          top: 55%;
          left: 10%;
          animation: glitch2 6s infinite ease-in-out;
        }

        .glitch-square-8 {
          width: 20px;
          height: 60px;
          top: 35%;
          left: 80%;
          animation: glitch3 9s infinite ease-in-out;
        }

        .glitch-square-9 {
          width: 70px;
          height: 15px;
          top: 75%;
          left: 60%;
          animation: glitch4 11s infinite ease-in-out;
        }

        .glitch-square-10 {
          width: 28px;
          height: 28px;
          top: 20%;
          left: 55%;
          animation: glitch5 12s infinite ease-in-out;
        }

        .glitch-square-11 {
          width: 32px;
          height: 32px;
          top: 65%;
          left: 25%;
          animation: glitch1 8s infinite ease-in-out;
        }

        .glitch-square-12 {
          width: 45px;
          height: 22px;
          top: 50%;
          left: 35%;
          animation: glitch2 7s infinite ease-in-out;
        }

        .glitch-square-13 {
          width: 22px;
          height: 55px;
          top: 30%;
          left: 65%;
          animation: glitch3 10s infinite ease-in-out;
        }

        .glitch-square-14 {
          width: 60px;
          height: 18px;
          top: 85%;
          left: 50%;
          animation: glitch4 9s infinite ease-in-out;
        }

        .glitch-square-15 {
          width: 38px;
          height: 38px;
          top: 12%;
          left: 80%;
          animation: glitch5 14s infinite ease-in-out;
        }

        .glitch-square-16 {
          width: 18px;
          height: 18px;
          top: 42%;
          left: 15%;
          animation: glitch1 6s infinite ease-in-out;
        }

        .glitch-square-17 {
          width: 55px;
          height: 24px;
          top: 68%;
          left: 85%;
          animation: glitch2 8s infinite ease-in-out;
        }

        .glitch-square-18 {
          width: 24px;
          height: 48px;
          top: 22%;
          left: 30%;
          animation: glitch3 11s infinite ease-in-out;
        }

        .glitch-square-19 {
          width: 75px;
          height: 12px;
          top: 78%;
          left: 40%;
          animation: glitch4 12s infinite ease-in-out;
        }

        .glitch-square-20 {
          width: 30px;
          height: 30px;
          top: 18%;
          left: 60%;
          animation: glitch5 15s infinite ease-in-out;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(20px, -15px) scale(1.2); opacity: 1; }
          50% { transform: translate(-10px, -25px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(15px, 10px) scale(1.1); opacity: 0.8; }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(-25px, 20px) scale(1.3); opacity: 0.9; }
          66% { transform: translate(30px, -10px) scale(0.9); opacity: 0.3; }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          20% { transform: translate(15px, -20px) scale(1.1); opacity: 0.9; }
          40% { transform: translate(-20px, -5px) scale(0.7); opacity: 0.5; }
          60% { transform: translate(25px, 15px) scale(1.3); opacity: 1; }
          80% { transform: translate(-10px, 25px) scale(0.9); opacity: 0.4; }
        }

        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-30px, 40px) scale(1.5); opacity: 0.8; }
        }

        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          30% { transform: translate(20px, -30px) scale(0.8); opacity: 0.3; }
          70% { transform: translate(-15px, 20px) scale(1.2); opacity: 1; }
        }

        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          25% { transform: translate(-20px, -20px) scale(1.4); opacity: 0.9; }
          75% { transform: translate(25px, 25px) scale(0.6); opacity: 0.3; }
        }

        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          40% { transform: translate(-35px, -15px) scale(1.1); opacity: 0.4; }
          80% { transform: translate(10px, 30px) scale(1.3); opacity: 1; }
        }

        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          60% { transform: translate(40px, -25px) scale(0.9); opacity: 0.8; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }

        @keyframes glitch1 {
          0%, 96% { opacity: 0; transform: translate(0, 0) scale(1); }
          97% { opacity: 1; transform: translate(0, 0) scale(1); }
          97.5% { opacity: 0.8; transform: translate(2px, -2px) scale(1.1); }
          98% { opacity: 1; transform: translate(-1px, 1px) scale(0.9); }
          98.5% { opacity: 0.6; transform: translate(1px, 0px) scale(1); }
          99% { opacity: 1; transform: translate(-2px, 2px) scale(1.05); }
          99.5% { opacity: 0.7; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(0, 0) scale(1); }
        }

        @keyframes glitch2 {
          0%, 94% { opacity: 0; transform: translate(0, 0) scaleX(1); }
          95% { opacity: 0.9; transform: translate(3px, 0) scaleX(1.2); }
          95.5% { opacity: 0.7; transform: translate(-2px, 1px) scaleX(0.8); }
          96% { opacity: 1; transform: translate(1px, -1px) scaleX(1.1); }
          96.5% { opacity: 0.4; transform: translate(0, 0) scaleX(1); }
          97.5% { opacity: 1; transform: translate(-3px, 2px) scaleX(1.1); }
          98.5% { opacity: 0.7; transform: translate(2px, -2px) scaleX(0.9); }
          100% { opacity: 0; transform: translate(0, 0) scaleX(1); }
        }

        @keyframes glitch3 {
          0%, 92% { opacity: 0; transform: translate(0, 0) scaleY(1); }
          93% { opacity: 0.8; transform: translate(0, 2px) scaleY(1.3); }
          94% { opacity: 1; transform: translate(-1px, -1px) scaleY(0.7); }
          95% { opacity: 0.6; transform: translate(2px, 1px) scaleY(1.1); }
          96% { opacity: 0.9; transform: translate(-1px, 0) scaleY(1); }
          98% { opacity: 1; transform: translate(2px, -2px) scaleY(1.2); }
          99% { opacity: 0; transform: translate(0, 0) scaleY(1); }
          100% { opacity: 0; transform: translate(0, 0) scaleY(1); }
        }

        @keyframes glitch4 {
          0%, 95% { opacity: 0; transform: translate(0, 0) scale(1); }
          96% { opacity: 1; transform: translate(-3px, 1px) scale(1.05); }
          96.5% { opacity: 0.5; transform: translate(2px, -2px) scale(0.95); }
          97% { opacity: 0.8; transform: translate(1px, 1px) scale(1.02); }
          97.5% { opacity: 0.3; transform: translate(-1px, 0) scale(1); }
          98.5% { opacity: 1; transform: translate(3px, -1px) scale(1.07); }
          99.5% { opacity: 0; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(0, 0) scale(1); }
        }

        @keyframes glitch5 {
          0%, 85% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
          86% { opacity: 0.7; transform: translate(1px, -1px) rotate(1deg); }
          87% { opacity: 1; transform: translate(-2px, 2px) rotate(-1deg); }
          88% { opacity: 0.4; transform: translate(1px, 0) rotate(0.5deg); }
          89% { opacity: 0.9; transform: translate(0, -1px) rotate(0deg); }
          92% { opacity: 1; transform: translate(2px, 2px) rotate(2deg); }
          96% { opacity: 0.7; transform: translate(-1px, -2px) rotate(-2deg); }
          100% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
      
      <div className="background">
        <div className="noise-overlay"></div>
        <div className="blue-glow"></div>
        <div className="blue-glow-2"></div>
        
        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
        
        {/* Glitch squares */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`glitch-square glitch-square-${i + 1}`} />
        ))}
        
        {/* Content container */}
        <div className="relative z-50 w-full h-full">{children}</div>
      </div>
    </div>
  );
}