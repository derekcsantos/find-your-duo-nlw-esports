interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  redirect: string;
  id: string;
}
export function GameBanner(props: GameBannerProps) {

  return (
    //class=item
    <div key={props.id} className="item relative rounded-lg overflow-hidden w-[170px] m-2">
      {/* className=image */}
      <div className="image">
        <img src={props.bannerUrl} alt="" className="w-[100%] h-[100%] object-cover" />
      </div>
      {/* classname="info" */}
      <div className="pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 text-left">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </div>

  );
}
