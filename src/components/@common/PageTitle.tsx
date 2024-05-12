type PageTitleProps = {
  className?: string;
  onPrevious?: () => void;
  children: React.ReactNode;
};

export default function PageTitle({
  className,
  onPrevious,
  children,
}: PageTitleProps) {
  return (
    <>
      <h2 className={`page-title ${className}`}>
        {onPrevious && <div onClick={onPrevious}>{`< `}</div>}
        {children}
      </h2>
    </>
  );
}
