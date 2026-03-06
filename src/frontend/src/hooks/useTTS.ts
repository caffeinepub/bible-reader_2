import { useCallback, useEffect, useRef, useState } from "react";

export type TTSState = "idle" | "playing" | "paused";

interface UseTTSOptions {
  rate?: number;
  onVerseChange?: (verseIndex: number) => void;
}

export function useTTS({ rate = 1, onVerseChange }: UseTTSOptions = {}) {
  const [state, setState] = useState<TTSState>("idle");
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(-1);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);
  const currentIndexRef = useRef<number>(-1);
  const isSpeakingRef = useRef(false);
  const versesRef = useRef<string[]>([]);
  const rateRef = useRef(rate);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    isSpeakingRef.current = false;
    setState("idle");
    setCurrentVerseIndex(-1);
    currentIndexRef.current = -1;
    utterancesRef.current = [];
  }, []);

  const speakFrom = useCallback(
    (verses: string[], startIndex: number) => {
      window.speechSynthesis.cancel();
      versesRef.current = verses;
      utterancesRef.current = [];
      isSpeakingRef.current = true;

      const speakVerse = (index: number) => {
        if (!isSpeakingRef.current || index >= verses.length) {
          if (index >= verses.length) {
            setState("idle");
            setCurrentVerseIndex(-1);
            currentIndexRef.current = -1;
            isSpeakingRef.current = false;
          }
          return;
        }

        const utterance = new SpeechSynthesisUtterance(verses[index]);
        utterance.rate = rateRef.current;
        utterance.pitch = 0.95;
        utterance.volume = 1;

        utterance.onstart = () => {
          currentIndexRef.current = index;
          setCurrentVerseIndex(index);
          onVerseChange?.(index);
        };

        utterance.onend = () => {
          if (isSpeakingRef.current) {
            speakVerse(index + 1);
          }
        };

        utterance.onerror = (e) => {
          if (e.error !== "interrupted") {
            console.error("TTS Error:", e);
          }
        };

        window.speechSynthesis.speak(utterance);
      };

      setState("playing");
      setCurrentVerseIndex(startIndex);
      currentIndexRef.current = startIndex;
      speakVerse(startIndex);
    },
    [onVerseChange],
  );

  const play = useCallback(
    (verses: string[], startIndex = 0) => {
      speakFrom(verses, startIndex);
    },
    [speakFrom],
  );

  const pause = useCallback(() => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setState("paused");
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setState("playing");
    }
  }, []);

  const togglePlayPause = useCallback(
    (verses: string[], startIndex = 0) => {
      if (state === "idle") {
        play(verses, startIndex);
      } else if (state === "playing") {
        pause();
      } else if (state === "paused") {
        resume();
      }
    },
    [state, play, pause, resume],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return {
    state,
    currentVerseIndex,
    play,
    pause,
    resume,
    stop,
    togglePlayPause,
    isPlaying: state === "playing",
    isPaused: state === "paused",
    isIdle: state === "idle",
  };
}
