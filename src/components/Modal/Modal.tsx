interface ModalProps extends React.HtmlHTMLAttributes<HTMLDialogElement> {
  name: string;
  size?: "sm" | "md" | "lg";
}

// close when click ouside
const handleClick = (e: any, name: string) => {
  if ((e.target as HTMLDivElement).id === "background-fade") {
    fecharModal(name);
  }
};

//close when esc key pressed
const handleKeyDown = (e: any, name: string) => {
  if (e.key === "Escape") {
    fecharModal(name);
  }
};

const keydownHandlers: { [key: string]: (e: KeyboardEvent) => void } = {};

export const abrirModal = (name: string) => {
  (document.getElementById(`modal-${name}`) as HTMLDialogElement).show();
  keydownHandlers[name] = (e) => handleKeyDown(e, name);
  document.addEventListener("keydown", keydownHandlers[name]);
};

export const fecharModal = (name: string) => {
  const modal = document.getElementById(`modal-${name}`) as HTMLDialogElement;
  if (keydownHandlers[name]) {
    document.removeEventListener("keydown", keydownHandlers[name]);
    delete keydownHandlers[name];
  }
  modal.setAttribute("closing", "");
  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
};

export const Modal: React.FC<ModalProps> = ({
  name,
  size = "md",
  ...props
}: ModalProps) => {
  return (
    <>
      <dialog
        className="w-screen h-screen bg-black/90 fixed top-0 left-0 z-999999"
        id={`modal-${name}`}
        onClick={(e) => handleClick(e, name)}
      >
        <div
          className="w-full h-full flex justify-center items-center"
          id="background-fade"
        >
          <div
            className={
              size == "md"
                ? `h-[24rem] w-[90%] sm:w-[36rem] bg-white dark:bg-boxdark rounded-lg`
                : size == "sm"
                ? `h-[16rem] w-[90%] sm:w-[36rem] bg-white dark:bg-boxdark rounded-lg`
                : `h-[32rem] w-[90%] sm:w-[36rem] bg-white dark:bg-boxdark rounded-lg`
            }
          >
            <div className="w-full h-full text-center px-20 py-12">
              {props.children}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
