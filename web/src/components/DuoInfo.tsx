interface DuoInfoProps {
  label: string;
  value: string;
  colorValue?: string;
}

export function DuoInfo(props: DuoInfoProps) {
  return (
    <div className="mb-3">
      <h1 className="text-sm font-light text-[#C4C4C6] block">{props.label}</h1>

      <h1
        className={`text-base font-semibold text-white ${
          props.value === "Sim" ? "text-[#34D399]" : ""
        } 
        ${
          props.value === "Não" ? "text-[#F87171]" : ""
        }`}
      >
        {props.value}
      </h1>
    </div>
  );
}
