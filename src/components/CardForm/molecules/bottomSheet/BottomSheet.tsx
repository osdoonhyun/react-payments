import useOverlay from '@/hooks/useOverlay';
import { PropsWithChildren } from 'react';

export const BottomSheetRoot = ({ children }: PropsWithChildren) => {
  const { close: closeBottomSheet } = useOverlay();

  return (
    <div className='modal' onClick={closeBottomSheet}>
      {children}
    </div>
  );
};

export const BottomSheetDimmer = ({ children }: PropsWithChildren) => {
  return (
    <div className='modal-dimmed' onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

type BottomSheetContentProps = PropsWithChildren & {
  style?: string;
};

export const BottomSheetContent = ({
  children,
  style,
}: BottomSheetContentProps) => {
  return <div className={style}>{children}</div>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const BottomSheet = {
  Root: BottomSheetRoot,
  Dimmer: BottomSheetDimmer,
  Content: BottomSheetContent,
};
