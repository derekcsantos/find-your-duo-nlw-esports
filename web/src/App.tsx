import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import { AdsByGameModal } from "./components/AdsByGameModal";

import "./styles/main.css";
import { CaretLeft, CaretRight } from "phosphor-react";
import logoimg from "./assets/logo-nlw-esports.svg";
import { Footer } from "./components/Footer";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
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
  //   createdAt: Date;
  children?: JSX.Element | JSX.Element[];
}

function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [gameAds, setGameAds] = useState<Ads[]>([]);
  const carousel = useRef() as MutableRefObject<HTMLDivElement>;

  async function getGameAds(gameId: string) {
    await axios(`http://localhost:3333/games/${gameId}/ads`).then(
      (response) => {
        setGameAds(response.data);
      }
    );
  }

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then((response) => {
        setGames(response.data);
      })      
  }, []);

  function handleLeftClick(e: React.MouseEvent) {
      e.preventDefault();      
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div className="w-[80vw] mx-auto flex flex-col items-center mt-10 bg-cover">
      <a href="">
        <img src={logoimg} alt="" className="w-56" />
      </a>
      <h1 className="text-4xl text-white font-black mt-12">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-cl bg-clip-text">
          duo
        </span>{" "}
        está aqui!
      </h1>   

      {/* CAROUSEL PRÓPRIO */}
      <div className="w-[100%] flex items-center">
      <CaretLeft
        weight="bold"
        size={50}
        className={"text-zinc-200 cursor-pointer"}
        onClick={handleLeftClick}
      />
      <Dialog.Root>
        <div className=" mt-5 w-[100%] carousel flex overflow-x-hidden overflow-y-hidden overflow-scroll scroll-smooth" ref={carousel}>
          {games.map((game) => {
            return (
              <Dialog.Trigger onClick={() => getGameAds(`${game.id}`)}>
                <GameBanner
                  key={game.id}
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  adsCount={game._count.ads}
                  id={game.id}
                  redirect={""}
                />
              </Dialog.Trigger>
            );
          })}
          <AdsByGameModal ads={gameAds} />
        </div>
      </Dialog.Root>

      <CaretRight
        weight="bold"
        size={50}
        className={"text-zinc-200 cursor-pointer"}
        onClick={handleRightClick}
      />

      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>      

      <Footer />
    </div>
    
  );
}

export default Home;
