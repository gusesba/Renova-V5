interface FormularioProps {
  children?: React.ReactNode;
}
export const Formulario: React.FC<FormularioProps> = ({
  children,
}: FormularioProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-9 ">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#">
              <div className="p-6.5">{children}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
