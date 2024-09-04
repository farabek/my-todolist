type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ title, onClick, className }: ButtonPropsType) => {
  //   return <button onClick={onClick}>{title}</button>;
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
