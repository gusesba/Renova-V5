import { MouseEventHandler } from "react";

interface ModalProps extends React.HtmlHTMLAttributes<HTMLDialogElement> {}

// close when click ouside
const handleClick: MouseEventHandler<HTMLDialogElement> = (e) => {
  if ((e.target as HTMLDivElement).id === "background-fade") {
    fecharModal();
  }
};

//close when esc key pressed
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    fecharModal();
  }
};

export const abrirModal = () => {
  (document.getElementById("modal") as HTMLDialogElement).show();
  document.addEventListener("keydown", handleKeyDown);
};

export const fecharModal = () => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  document.removeEventListener("keydown", handleKeyDown);
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

export const Modal: React.FC<ModalProps> = ({ ...props }: ModalProps) => {
  return (
    <>
      <dialog
        className="w-screen h-screen bg-black/90 fixed top-0 left-0 z-999999"
        id="modal"
        onClick={handleClick}
      >
        <div
          className="w-full h-full flex justify-center items-center"
          id="background-fade"
        >
          <div className="h-[24rem] w-[90%] sm:w-[36rem] bg-white dark:bg-boxdark rounded-lg">
            <div className="w-full h-full text-center px-20 py-12">
              {props.children}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
