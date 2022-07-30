import { createContext, PropsWithChildren, useCallback, useState } from "react";
import ReactHowler from "react-howler";

type AudioContextValue = {
  src?: string;
  isPlaying?: boolean;
  loadError?: boolean;
  setValues?: (srcNew: string, isPlayingNew: boolean) => void;
};

export const AudioContext = createContext<AudioContextValue>({});

export const AudioProvider = (props: PropsWithChildren<{}>) => {
  const [src, setSrc] = useState("");
  const hasSrc = src != "";

  const [isPlaying, setIsPlaying] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const onEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const onLoadError = useCallback(() => {
    setLoadError(true);
    setTimeout(() => {
      setLoadError(false);
      setSrc("");
    }, 3000)
  }, []);

  const setValues = useCallback(
    (srcNew: string, isPlayingNew: boolean) => {
      if (srcNew != src) {
        setSrc(srcNew);
        setIsPlaying(isPlaying !== isPlayingNew);
      } else {
        setIsPlaying(isPlayingNew);
      }
    },
    [isPlaying, src]
  );

  return (
    <>
      {hasSrc && (
        <ReactHowler
          src={src}
          playing={isPlaying}
          onEnd={onEnd}
          onLoadError={onLoadError}
        />
      )}
      <AudioContext.Provider
        value={{
          src,
          isPlaying: isPlaying && hasSrc,
          loadError,
          setValues,
        }}
      >
        {props.children}
      </AudioContext.Provider>
    </>
  );
};
