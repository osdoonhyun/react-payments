import { useOverlayContext } from '@/context/Overlay';

export default function useOverlay() {
  const { open, close } = useOverlayContext();

  return {
    open,
    close,
  };
}
