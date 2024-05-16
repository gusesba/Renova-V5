import { MouseEventHandler } from "react";

interface DeleteModalProps {
  itens: number[];
}

const fecharModal: MouseEventHandler<HTMLDialogElement> = (e) => {
  if ((e.target as HTMLDivElement).id === "background-fade") {
    const modal = document.getElementById(
      "datatable-delete-modal"
    ) as HTMLDialogElement;
    modal.setAttribute("closing", "");
    modal.addEventListener(
      "animationend",
      () => {
        modal.removeAttribute("closing");
        modal.close();
      },
      { once: true }
    );
  }
};

export const abrirModal = () => {
  (
    document.getElementById("datatable-delete-modal") as HTMLDialogElement
  ).show();
};

export const DeleteModal: React.FC<DeleteModalProps> = ({
  itens,
}: DeleteModalProps) => {
  return (
    <>
      <dialog
        open
        className="w-screen h-screen bg-black/90 fixed top-0 left-0 z-99999"
        id="datatable-delete-modal"
        onClick={fecharModal}
      >
        <div
          className="w-full h-full flex justify-center items-center"
          id="background-fade"
        >
          <div className="h-[24rem] w-[90%] sm:w-[36rem] bg-white dark:bg-boxdark rounded-lg">
            <div className="w-full h-full text-center px-20 py-12">
              <span className="mx-auto inline-block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.1"
                    width="60"
                    height="60"
                    rx="30"
                    fill="#DC2626"
                  ></rect>
                  <path
                    d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
                    stroke="#DC2626"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Deactivate Your Account
              </h3>
              <p className="mb-10 font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum been.
              </p>
              <div className="-mx-3 flex flex-wrap gap-y-4">
                <div className="w-full px-3 2xsm:w-1/2">
                  <button className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
                    Cancel
                  </button>
                </div>
                <div className="w-full px-3 2xsm:w-1/2">
                  <button className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                    Deactivate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
