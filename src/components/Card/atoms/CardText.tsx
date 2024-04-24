type CardTextProps = {
  fontSize?: 'small' | 'big';
  className?: string;
  children: React.ReactNode;
};

export default function CardText({
  fontSize = 'small',
  className,
  children,
}: CardTextProps) {
  return (
    <span
      className={`card-text${fontSize === 'big' ? '__big' : ''} ${className}`}
    >
      {children}
    </span>
  );
}
