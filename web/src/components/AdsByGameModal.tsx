import * as Dialog from "@radix-ui/react-dialog";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef, MutableRefObject } from "react";
import { DuoCard } from "./DuoCard";
import { EmptyListAds } from "./EmptyListAds";

interface Game {
  id: string;
  title: string;
}

interface Ads {
  gameId: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  children?: JSX.Element | JSX.Element[];
}


export function AdsByGameModal(props: any) {
  const adsCarousel = useRef() as MutableRefObject<HTMLDivElement>;
  const ads = props.ads;

  function handleLeftClick(e: React.MouseEvent) {
    e.preventDefault();
    adsCarousel.current.scrollLeft -= adsCarousel.current.offsetWidth;
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();
    adsCarousel.current.scrollLeft += adsCarousel.current.offsetWidth;
  }

  if (!(ads.length > 0)) {
    return (
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed flex">
          <Dialog.Content className="flex-col min-w-[400px] bg-[#2A2634] fixed py-2 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
            <Dialog.Title className="relative text-3xl font-black text-white">
              Ops...
            </Dialog.Title>
            <div className="relative mx-0 flex flex-row my-2">
              <EmptyListAds />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    );
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="bg-[#2A2634] flex-col object-center fixed py-4 px-4 max-w-[50%]  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
          <Dialog.Title className="text-2xl font-black text-white">
            Encontre um duo para se conectar e jogar!
          </Dialog.Title>
          <div className="flex flex-row items-center m-0 p-0 w-[100%]">

            <CaretLeft
              weight="bold"
              size={50}
              className={"text-zinc-200 cursor-pointer relative"}
              onClick={handleLeftClick}
            />
          <div
        className={`carousel w-[100%] flex ${ads.length === 1 ? "justify-center" : "justify-start"} my-2 overflow-y-hidden overflow-x-hidden overflow-scroll scroll-smooth`}
            ref={adsCarousel}
          >
            {ads.map((ad: Ads) => {
              return (
                <DuoCard
                  key={ad.gameId}
                  gameId={ad.gameId}
                  name={ad.name}
                  yearsPlaying={ad.yearsPlaying}
                  weekDays={ad.weekDays}
                  hourStart={ad.hourStart}
                  hourEnd={ad.hourEnd}
                  useVoiceChannel={ad.useVoiceChannel}
                  discord={ad.discord}
                />
              );
            })}

          </div>
            <CaretRight
              weight="bold"
              size={50}
              className={"text-zinc-200 cursor-pointer block m-0"}
              onClick={handleRightClick}
            />
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
