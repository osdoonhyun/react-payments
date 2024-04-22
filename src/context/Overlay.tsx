import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

export const OverlayContext = createContext({});

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [_, setIsOpen] = useState(false);
  const [node, setNode] = useState<ReactNode>(null);

  const open = ({ node }: { node: ReactNode }) => {
    setNode(node);
    setIsOpen(true);
  };

  const close = () => {
    setNode(null);
    setIsOpen(false);
  };

  const overlayContext = {
    open,
    close,
  };

  return (
    <OverlayContext.Provider value={overlayContext}>
      {createPortal(<>{node}</>, document.body)}
      {children}
    </OverlayContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOverlayContext = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlayContext must be used within a OverlayProvider');
  }

  return context;
};
