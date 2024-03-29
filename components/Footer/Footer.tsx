import React from "react";
import { FOOTER_MENU } from "config/constants";
import Link from "next/link";
import { discordURL, telegramURL } from "config/config";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-normal-500 py-[60px] lg:py-[100px] text-white">
      <div className="container grid 2md:grid-cols-2 items-start gap-[60px] 2md:gap-7">
        <div className="grid gap-y-4">
          <img src="/svgs/logo-light.svg" alt="Logo light" />
          <p className="text-base">© Fewcha Technologies, Inc</p>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href={discordURL}
              className="py-[13px] px-[9px] bg-purple-100 flex items-center justify-center rounded-[50%]"
            >
              <img src="/svgs/discord.svg" alt="Discord" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={telegramURL}
              className="pt-[13px] pb-3 pl-[9px] pr-[13px] flex items-center justify-center rounded-[50%] bg-[linear-gradient(225deg,#2EBFE8_14.64%,#13A9DC_85.1%)]"
            >
              <img src="/svgs/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-x-11 items-start gap-y-[60px] sm:gap-y-0">
          {FOOTER_MENU.map((menu) => (
            <div key={menu.title} className="grid gap-y-[9px]">
              <p className="text-white font-semibold text-base">{menu.title}</p>
              {menu.list.map((item, index) => {
                if (item.external) {
                  return <ExternalFooterLink key={index} item={item} />;
                }
                if (item.href) {
                  return <FooterLink key={index} item={item} />;
                }
                return (
                  <div className="text-gray-900" key={index}>
                    {item.label}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{
  key: number;
  item: { href: string; label: string };
}> = ({ item }) => {
  return (
    <Link href={item.href}>
      <a className="text-base text-gray-600 transition-all ease-in duration-150 hover:text-gray-400">
        {item.label}
      </a>
    </Link>
  );
};

const ExternalFooterLink: React.FC<{
  key: number;
  item: { external: string; label: string };
}> = ({ item }) => {
  return (
    <a
      href={item.external}
      target="_blank"
      rel="noreferrer"
      className="text-base text-gray-600 transition-all ease-in duration-150 hover:text-gray-400"
    >
      {item.label}
    </a>
  );
};

export default Footer;
