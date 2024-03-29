import React from "react";
import { MENUS } from "config/constants";
import Link from "next/link";
import AtButton from "components/AtButton";

const HeaderMobile: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <div className={`md:hidden list ${isShow ? "is-active" : ""}`}>
      <div className="hambugerBg"></div>
      {MENUS.map((menu, idx) => {
        if (menu.external) {
          return (
            <a
              href={menu.external}
              key={idx}
              target="_blank"
              rel="noreferrer"
              className="block text-normal-400 font-medium text-3xl transition-all ease-in duration-150 hover:text-primary-200  py-4 text-center"
            >
              {menu.name}
            </a>
          );
        }

        return (
          <Link href={menu.href} key={idx}>
            <a className="block text-normal-400 font-medium text-3xl transition-all ease-in duration-150 hover:text-primary-200  py-4 text-center">
              {menu.name}
            </a>
          </Link>
        );
      })}
      <a href="https://fewcha.app" target="_blank" rel="noreferrer">
        <AtButton className="inline-block sm:hidden shadow-type-1 px-5 py-[14px] bg-white text-black font-medium rounded-[34px] hover:bg-inherit mt-5">
          Download
        </AtButton>
      </a>
    </div>
  );
};

export default HeaderMobile;
