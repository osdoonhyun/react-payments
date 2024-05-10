type VStackProps = {
  children: React.ReactNode;
};

export default function VStack({ children, ...rest }: VStackProps) {
  return (
    <div className='flex-column-center' {...rest}>
      {children}
    </div>
  );
}
