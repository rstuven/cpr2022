import { useCallback, useState } from "react";

export default function useRenderOnActivation() {
  const [render, setRender] = useState(false);
  const [hasTouchMoved, setHasToucMoved] = useState(false);

  const onTouchMove = useCallback(() => {
    setHasToucMoved(true);
  }, []);

  const onActivation = useCallback(() => {
    if (!hasTouchMoved) {
      setRender(true);
    }
    setHasToucMoved(false);
  }, [hasTouchMoved]);

  return {
    render,
    onTouchMove,
    onMouseOver: onActivation,
    onTouchEnd: onActivation,
    onFocus: onActivation,
  };
}
