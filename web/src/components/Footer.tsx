import { InstagramLogo, GithubLogo, LinkedinLogo, Copyright} from "phosphor-react";

export function Footer() {
  return (
    <div className="flex flex-row justify-around border-t-2 pt-2 mt-14 text-[#E1E1E2] bg-[#E1E1E2]/10 w-[100vw] min-w-fit items-center">
      <div className="text-base min-w-fit mx-2">Developed by Derek Santos</div>
      <div className="flex flex-row items-center min-w-fit"><Copyright /> Copyright 2022</div>
      <div className="social flex flex-row items-center">
        <a href="https://github.com/derekcsantos" target={"_blank"}>
          <GithubLogo size={42} className="mx-1 hover:text-blue-800" />
        </a>
        <a href="https://www.linkedin.com/in/derekcsantos/" target={"_blank"}>
          <LinkedinLogo size={42} className="mx-1  hover:text-blue-800" />
        </a>

        <a href="https://www.instagram.com/derekcsantos/" target={"_blank"}>
          <InstagramLogo size={42} className="mx-1  hover:text-blue-800" />
        </a>
      </div>
    </div>
  );
}
