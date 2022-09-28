import { ClipboardText } from "phosphor-react";

interface DiscordInfoProps {
  label: string;
  value: string;
  isDiscordVisible?: boolean;
}

export function DiscordInfo(props: DiscordInfoProps) {
  return (
    <div className={`mt-2 mb-2 ${ props.isDiscordVisible === true ? "hidden" : ""}`}>
      <h1 className="text-lg font-light text-[#C4C4C6] block">{props.label}</h1>

      <h1
        className="text-xl font-light text-[#E4E4E7] bg-[#18181B] py-1 px-2 flex justify-between items-center"
      >
        {props.value}
        <ClipboardText />
      </h1>
    </div>
  );
}
