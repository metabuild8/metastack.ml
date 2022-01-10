import { cn } from "@client/utils";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Fragment, useRef } from "react";

export default function ModalDialog(props: any) {
  const solanaRef = useRef(null);

  const connectPhantom = () => {
    if ("solana" in window) {
      const provider = window["solana"];
      if (provider.isPhantom) {
        window["solana"]
          ?.connect({ onlyIfTrusted: true })
          .then(({ publicKey }) => {
            console.log("publicKey", publicKey);
            props.setIsOpenModal(false);
          })
          .catch(console.log);
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    }
  };

  return (
    <Transition appear show={props.isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={props.setIsOpenModal}
        initialFocus={solanaRef}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-slate-900 bg-opacity-75 backdrop-blur backdrop-filter" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md text-left align-middle transform transition-all">
              <div className="flex justify-between items-center">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-medium leading-6 text-white"
                >
                  Connect to a wallet
                </Dialog.Title>
                <span className="p-2 bg-white bg-opacity-25 hover:bg-opacity-40 rounded-full cursor-pointer">
                  <XIcon
                    className="w-5 h-5 text-white"
                    onClick={() => props.setIsOpenModal(false)}
                  />
                </span>
              </div>
              <div className="p-8 mt-4 bg-white overflow-hidden shadow-xl rounded-lg dark:bg-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  By connecting a wallet, you will be able to leave comments
                  under articles, ask questions and financially support
                  publishing a new Metastack content.
                </p>
                <div
                  className={cn(
                    "mt-4 border rounded-lg divide-y overflow-hidden cursor-pointer",
                    "dark:border-slate-500 dark:divide-slate-500"
                  )}
                >
                  <div
                    className="px-5 py-3.5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-500"
                    onClick={connectPhantom}
                    ref={solanaRef}
                  >
                    <span className="text-lg">Phantom</span>
                    <Image
                      width={35}
                      height={35}
                      src="/logos/phantom.svg"
                      alt="Phantom logo"
                    />
                  </div>
                  <div className="px-5 py-3.5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-500">
                    <span className="text-lg">Sollet</span>
                    <Image
                      width={35}
                      height={35}
                      src="/logos/sollet.svg"
                      alt="Phantom logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
