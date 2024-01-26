import Image from "next/image";
import { TechnologyCard } from "./components/TechnologyCard";
import { BusinessInvestorsCard } from "./components/BusinessInvestorsCard";
import { ApplicationCard, MoreGamesApplicationCard } from "./components/ApplicationCard";
import { TeamMemberCard } from "./components/TeamMemberCard";
import Link from "next/link";
import { ReactNode } from "react";

const debug = false;

const LandingSection = (props: { title: string, children: ReactNode }) => {
  return (
    <div className={`w-full relative flex justify-center px-[50px] ${debug && 'border'}`}>
      <div className="flex flex-col w-full">
        <div className="font-bold text-5xl pt-[150px] pl-[30%]">
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  )
}

const LandingHeader = (props: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-[91px] px-[50px] items-center">
      <div className="flex w-full justify-between">
        {props.children}
      </div>
    </div>
  )
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHeader>
        <div className="font-bold text-2xl md:text-3xl cursor-pointer">
          ZkNoid
        </div>
        <div className="hidden sm:flex text-base gap-5">
          <Link className="cursor-pointer text-xl" href={'https://docs.zknoid.io'} target="_blank" rel="noopener noreferrer">
            Docs
          </Link>
          <Link className="cursor-pointer text-xl" href={'https://zknoid.medium.com'} target="_blank" rel="noopener noreferrer">
            Blog
          </Link>
        </div>
        <div className="gap-5 hidden md:flex">
          <Link className="cursor-pointer flex items-center justify-center" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
            <Image src={'/image/socials/github.svg'} className="cursor-pointer" width={30} height={30} alt="Github"></Image>
          </Link>
          {/* <Image src={'/image/socials/twitter.svg'} className="cursor-pointer" width={30} height={30} alt="Twitter"></Image> */}
          {/* <Image src={'/image/socials/telegram.svg'} className="cursor-pointer" width={30} height={30} alt="Telegram"></Image> */}
          <Link className="cursor-pointer flex items-center justify-center" href={'https://zknoid.medium.com/'} target="_blank" rel="noopener noreferrer">
            <Image src={'/image/socials/medium.svg'} className="cursor-pointer " width={30} height={30} alt="Medium"></Image>
          </Link>
        </div>
        <Link href={'https://app.zknoid.io'}>
          <div
            className="w-[140px] lg:w-[172px] h-[40px] bg-foreground text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
            Launch app
          </div>
        </Link>
      </LandingHeader>

      <div className={`h-[783px] w-full relative flex justify-center ${debug && 'border'}`}>
        <Image src={'/image/chess.svg'} className="w-full absolute bottom-0 pointer-events-none" width={1618} height={541} alt="Medium"></Image>
        <div>
          <div className="font-bold text-5xl md:text-8xl pt-[173px] mx-3 ">
            <div>
              Web3
            </div>
            <div>
              Gaming platform
            </div>
            <div className="text-base pl-10 font-plex-mono font-normal font-mono flex">
              Powered by zero knowledge proof technology
              <Link className="hidden sm:flex cursor-pointer font-rockwell text-xl pl-3 underline decoration-left-accent underline-offset-[5px]" href="https://docs.zknoid.io">
                Open Docs <Image src={"/image/docs_arrow.svg"} className="ml-1 mb-2" width={16} height={16} alt="Arrow"></Image>
              </Link>
            </div>
            <div className="w-full flex justify-center pt-4">
              <Link href={'https://app.zknoid.io'}>
                <Image src={'/image/go_to_zkapp_button.svg'} className="cursor-pointer" width={179} height={51} alt="Open ZkApp"></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LandingSection title="About ZkNoid">
        <div className="text-sm xl:text-xl font-mono w-[400px] lg:w-[500px] pt-10 font-bold ml-[30%]">
          ZkNoid - the gaming platform powered by zero knowledge proof technology based on MINA protocol.
        </div>
        <div className="items-center lg:flex-row lg:items-start grid grid-cols-3 w-full justify-between pt-16 gap-[20px]">
          <div className="flex items-start">
            <Image src={"image/01.svg"} width={96} height={96} alt="01"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              ZkNoid provides the united ecosystem for ZK gaming – developers can use SDK to be a part of the platform.
              L2 rollup based on protokit network enables gasless sessions, fast transactions
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/02.svg"} width={96} height={96} alt="02"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              While playing all your actions are accumulated inside a zero-knowledge circuit on the client side,
              ensuring verifiability of the game process while your strategy remains confidential.
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/03.svg"} width={96} height={96} alt="03"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating
            </div>
          </div>
        </div>
      </LandingSection>
      <LandingSection title="Our technologies">
        <div className="flex flex-col">
          <Image src={'/image/our_tech_upper_line.svg'} width={1106} height={142} alt="our_tech_upper" className="p-5 px-24 lg:px-36 w-full" ></Image>
          <div className="flex justify-between">
            <TechnologyCard
              variant={0}
              exploreButton="/image/technologies/explore_button/explore_left.svg"
              name="ZK Circuit"
              description="Allows to prove your game process without revealing your strategy."
              image="/image/technologies/circuit.svg"
              imageW={300}
              imageH={150}
            />
            <TechnologyCard
              name="Recursive proofs"
              exploreButton="/image/technologies/explore_button/explore_middle.svg"
              description="Used to accumulate your game process proof while you’re playing."
              image="/image/technologies/recursive_proofs.svg"
              variant={1}
              imageW={339}
              imageH={335}
            />
            <TechnologyCard
              name="Mina and protokit networks interplay"
              exploreButton="/image/technologies/explore_button/explore_right.svg"
              description="Combines power of ZK blockchain with fast and gasless transactions enabling multiplayer and background sessions."
              image="/image/technologies/networks_interplay.svg"
              variant={2}
              imageW={290}
              imageH={280}
            />
          </div>
        </div>
      </LandingSection>


      <LandingSection title="Benefits for gamers">

        <div className="text-base font-mono font-normal w-[400px] lg:w-[500px] pt-10 ml-[30%]">
          Elevate your gaming journey and embrace a future where transparency and integrity define the ultimate gaming experience
        </div>
        <Image src={"image/user_benefits.svg"} width={1500} height={899} alt="01" className="p-5 w-full"></Image>
      </LandingSection>

      <LandingSection title="Benefits for Business and investors">
        <div className="flex flex-col">

          <div className="flex justify-around pt-5">
            <BusinessInvestorsCard
              variant={0}
              exploreButton="/image/business_investors/explore_button/explore_left.svg"
              description="Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating"
              image="/image/business_investors/cup.svg"
              link="https://docs.zknoid.io/docs/competitions"
            />
            <BusinessInvestorsCard
              variant={1}
              exploreButton="/image/business_investors/explore_button/explore_right.svg"
              description="Buy token that is backed by project revenue
                  Revenue is collected to a vault and used to buy token from market"
              image="/image/business_investors/coins.svg"
              link="https://docs.zknoid.io/docs/tokenomics"
            />
          </div>
        </div>
      </LandingSection>
      <LandingSection title="Applications">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-5 justify-around pt-5 flex-col lg:flex-row auto-rows-fr">
            <ApplicationCard
              name="Arkanoid"
              variant={0}
              exploreButton="/image/applications/play_button/play_left.svg"
              description="Old but gold game. Beat all the bricks and protect the ball from falling. Every game tick is reproduced inside ZK circuit and synced"
              image="/image/applications/arkanoid.svg"
              link="https://app.zknoid.io/arkanoid/global"
            />
            <ApplicationCard
              name="Randzu"
              variant={1}
              exploreButton="/image/applications/play_button/play_right.svg"
              description="A tic tac toe like game. Two players take turns placing pieces on the board attempting to create lines of 5 of their own color. Game state is synced and proved used zkapp transactions"
              image="/image/applications/randzu.svg"
              link="https://app.zknoid.io/ranzu/global"
            />
            <MoreGamesApplicationCard />
          </div>
        </div>
      </LandingSection>

      <LandingSection title="Backed by">
        <div className="flex flex-row gap-5 flex-wrap p-10">
          <div className="text-base font-mono font-normal w-[400px]">
            Our esteemed list of backers and investors who are trust the groundbreaking ZkNoid gaming
          </div>
          <Image src={'/image/backed_by/mina_foundation.svg'} width={360} height={184} className="w-[300px]" alt="Mina foundation"></Image>
          <Image src={'/image/backed_by/o1labs.svg'} width={360} height={184} className="w-[300px]" alt="O1js labs"></Image>
          <Image src={'/image/backed_by/announced_soon.svg'} width={360} height={184} className="w-[300px]" alt="Announced soon"></Image>
        </div>
      </LandingSection>

      <LandingSection title="ZkNoid Core Team">
        <div className="flex flex-col h-[783px]">
          <Image src={'/image/team_upper_line.svg'} width={1106} height={298} alt="our_tech_upper" className="p-5 px-24 lg:px-[13%] w-full" ></Image>
          <div className="flex justify-around">
            <TeamMemberCard
              name="Asimaranov"
              description="Top-1 solidity auditor at Mixbytes auditor DAO
                Core builder of xraise.io project – account abstraction based wallet. 
                Blockchain and full-stack developer. Studied at MSU, applied math and computer science"
              position="Core builder"
              image="/image/team/andrey.svg"
              variant={0}
              imageW={360}
              imageH={360}
            />

            <TeamMemberCard
              name="Alex"
              description="Crypto enthusiast since 2020. CS MS in MIPT. Experienced solidity developer with two years experience in DEFI projects."
              position="Core builder"
              image="/image/team/alex.svg"
              variant={1}
              imageW={360}
              imageH={360}
            />
            <TeamMemberCard
              name="Shiroy"
              description="Ui/Ux & Graphic designer in crypto since 2022 as a member of PowerPool R&D and marketing team"
              position="Ui / Ux designer"
              image="/image/team/shiroy.svg"
              variant={2}
              imageW={360}
              imageH={360}
            />

          </div>
        </div>
      </LandingSection>

      <div className={`w-full relative flex justify-center ${debug && 'border'} mb-[30px]`}>
        <div className="flex flex-col w-full items-center">
          <div className="text-3xl pt-[150px] text-middle-accent">
            Subscribe for updates!
          </div>
          <div className="flex flex-row gap-5 flex-wrap p-5">
            <input type="email" className="w-[486px] h-[50px] border bg-bg-dark text-2xl px-2" placeholder="Enter your e-mail"></input>
            <div className="w-[175px] h-[50px] border text-middle-accent border-middle-accent flex items-center justify-center text-xl cursor-pointer">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[91px] items-center">
        <div className="flex mx-[50px] h-[40px] w-full justify-between">
          <div className="font-bold text-2xl md:text-3xl cursor-pointer">
            ZkNoid
          </div>
          <div className="hidden sm:flex text-base gap-5">
            <Link className="cursor-pointer text-xl" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
              Github
            </Link>
            <Link className="cursor-pointer text-xl" href={'https://docs.zknoid.io'} target="_blank" rel="noopener noreferrer">
              Documentation
            </Link>
            <Link className="cursor-pointer text-xl" href={'https://zknoid.medium.com'} target="_blank" rel="noopener noreferrer">
              Blog
            </Link>
          </div>
          <div className="gap-5 hidden md:flex">
            <Link className="cursor-pointer text-xl flex items-center justify-center" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
              <Image src={'/image/socials/github.svg'} className="cursor-pointer" width={30} height={30} alt="Github"></Image>
            </Link>
            {/* <Image src={'/image/socials/twitter.svg'} className="cursor-pointer" width={30} height={30} alt="Twitter"></Image> */}
            {/* <Image src={'/image/socials/telegram.svg'} className="cursor-pointer" width={30} height={30} alt="Telegram"></Image> */}
            <Link className="cursor-pointer text-xl flex items-center justify-center" href={'https://zknoid.medium.com/'} target="_blank" rel="noopener noreferrer">
              <Image src={'/image/socials/medium.svg'} className="cursor-pointer" width={30} height={30} alt="Medium"></Image>
            </Link>
          </div>
          <Link href={'https://app.zknoid.io'}>
            <div className="w-[140px] lg:w-[172px] h-[40px] bg-foreground text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
              Launch app
            </div>
          </Link>
        </div>
      </div>

    </main>
  );
}
