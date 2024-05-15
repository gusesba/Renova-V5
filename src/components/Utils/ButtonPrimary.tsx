interface ButtonPrimaryProps {
  children?: React.ReactNode;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
}: ButtonPrimaryProps) => {
  return (
    <>
      <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        {children}
      </button>
    </>
  );
};
