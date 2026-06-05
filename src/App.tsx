import { useState } from "react";
import "./App.css";
import { Card } from '@heroui/react';
import { motion } from "framer-motion";
import GlassBackground from "./components/GlassBackground";

const MotionCard = motion(Card);

function App() {
  return (
    <main className="dark relative flex h-screen w-screen items-center justify-center p-6 text-foreground select-none">
      
      <GlassBackground />

      <MotionCard 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 22 }}
        className="max-w-[440px] w-full border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl p-6 gap-6 rounded-[32px]"
      >
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            SonicSound
          </h1>
          <p className="text-sm text-zinc-400">
            Connect your streaming service
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          
          {/* SoundCloud */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 shadow-lg rounded-2xl p-5 transition-all cursor-pointer group active:scale-95">
            <div className="flex items-center justify-center">
              <img 
                src="/StreamingServices/69ef2abb874551e8c75433a2_Horizontal White (transparent)-download.png" 
                className="max-h-full max-w-full object-contain"
                alt="SoundCloud"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">SoundCloud</span>
          </div>

          {/* YouTube Music */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 shadow-lg rounded-2xl p-5 transition-all cursor-pointer group active:scale-95">
            <div className="flex items-center justify-center">
              <img 
                src="/StreamingServices/ListenonYouTubeMusic-black-SVG.svg" 
                alt="YouTube Music"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">YouTube Music</span>
          </div>

          {/* Spotify */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 shadow-lg rounded-2xl p-5 transition-all cursor-pointer group active:scale-95">
            <div className="h-12 w-12 flex items-center justify-center">
              <img 
                src="/StreamingServices/Spotify_Primary_Logo_RGB_Green.png" 
                className="max-h-full max-w-full object-contain"
                alt="Spotify"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">Spotify</span>
          </div>

          {/* Apple Music */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 shadow-lg rounded-2xl p-5 transition-all cursor-pointer group active:scale-95">
            <div className="h-12 w-12 flex items-center justify-center">
              <img 
                src="/StreamingServices/Apple_Music_Icon_wht_sm_073120.svg" 
                className="max-h-full max-w-full object-contain"
                alt="Apple Music"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">Apple Music</span>
          </div>

        </div>
      </MotionCard>

    </main>
  );
}

export default App;
