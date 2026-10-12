"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export const AmbientSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isRunningRef = useRef(false);

  const startStreamSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Buffer with pink noise for natural water flow
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      // Looping noise source
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter 1: Lowpass for deep mountain stream body
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      // Filter 2: Bandpass for splashing babbling brook frequencies
      const filter2 = ctx.createBiquadFilter();
      filter2.type = "bandpass";
      filter2.frequency.setValueAtTime(1100, ctx.currentTime);
      filter2.Q.setValueAtTime(1.8, ctx.currentTime);

      // LFO modulation for water ripples
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.25, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(180, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      whiteNoise.connect(filter);
      whiteNoise.connect(filter2);
      filter.connect(masterGain);
      filter2.connect(masterGain);
      whiteNoise.start();

      isRunningRef.current = true;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopStreamSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtxRef.current.currentTime + 0.8
      );
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        isRunningRef.current = false;
        setIsPlaying(false);
      }, 800);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopStreamSound();
    } else {
      startStreamSound();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);
};
