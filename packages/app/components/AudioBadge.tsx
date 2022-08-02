import React from "react"
import { Badge } from "flowbite-react";
import { MdStop } from "react-icons/md";
import { RiWifiOffLine } from "react-icons/ri";
import { GiSpeaker } from "react-icons/gi";

import { parseFragmento } from "lib/helpers";
import { useCallback, useContext } from "react";
import { AudioContext } from "components/AudioProvider";

export default React.memo(AudioBadge);

function AudioBadge(props: { fragmentoId: string }) {
  const fragmento = parseFragmento(props.fragmentoId);
  const file =
    fragmento == null
      ? ""
      : "transitoria" in fragmento
      ? `disposiciones-transitorias-${fragmento.transitoria.ordinal}`
      : "articulo" in fragmento
      ? `capitulo-${fragmento.capitulo.ordinal}-articulo-${fragmento.articulo.key}`
      : "";
  const src = `https://rstuven.github.io/audiopropuesta/mp3/${file}-es-US-Wavenet-B.mp3`;
  const ctx = useContext(AudioContext);

  const { setValues, isPlaying: isPlayingCtx } = ctx;
  const toggleAudio = useCallback(() => {
    setValues && setValues(src, !isPlayingCtx);
  }, [isPlayingCtx, setValues, src]);

  const isThisSrc = ctx.src === src;
  const loadError = isThisSrc && ctx.loadError;
  const isPlaying = isThisSrc && isPlayingCtx;

  return (
    <Badge color="gray" onClick={toggleAudio}>
      <div className="flex gap-1 cursor-pointer ">
        {loadError ? (
          <RiWifiOffLine size={16} />
        ) : isPlaying ? (
          <MdStop size={16} className="animate-pulse" />
        ) : (
          <GiSpeaker size={16} />
        )}
      </div>
    </Badge>
  );
}
