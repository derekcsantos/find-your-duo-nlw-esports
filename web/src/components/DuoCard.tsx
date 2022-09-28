import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { useState } from "react";

import { GameController } from 'phosphor-react'

import { DuoInfo } from "./DuoInfo";
import { DiscordInfo } from "./DiscordInfo";

interface DuoCardProps {
  gameId: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;   
}

export function DuoCard(props: DuoCardProps) {  
  const [discordVisible, setDiscordVisible] = useState(true);

  function makeVisible() {
    if(discordVisible === false) {
      setDiscordVisible(true)
    } else {
      setDiscordVisible(false)
    }
    console.log(discordVisible)
  }  

  return (
    <div key={props.gameId} className="bg-[#1b1924] w-fit px-6 py-4 mr-3 rounded-lg mt-4 flex-none order-1 flex-grow-0 content-center">
      <DuoInfo label="Nome:" value={props.name} />

      <DuoInfo label="Tempo de jogo:" value={`${props.yearsPlaying} ano(s)`} />

      <DuoInfo
        label="Disponibilidade:"
        value={`${props.weekDays.length} dias \u2022 ${props.hourStart} - ${props.hourEnd}`}
      />
      <div className="flex flex-col gap-2 mb-3 text-white">
      <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={props.weekDays}
                
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"                  
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className={`hover:cursor-default w-8 h-8 rounded ${
                    props.weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
      </div>

      <DuoInfo
        label="Chamada de áudio?"
        value={props.useVoiceChannel ? "Sim" : "Não"}
      />

      <Dialog.Root>
        <Dialog.Trigger          
          className="w-64 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3 font-semibold"
          onClick={makeVisible}
        >
          <GameController size={30} />
          Conectar
        </Dialog.Trigger>

        <DiscordInfo label="Copie e adicione no Discord" value={props.discord} isDiscordVisible={discordVisible}/>

      </Dialog.Root>
    </div>
  );
}
