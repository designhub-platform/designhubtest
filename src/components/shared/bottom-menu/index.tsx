'use client'

//import { BiSolidUser, BiUser } from "react-icons/bi";
import { FaCompass, FaCrown, FaRegCompass } from "react-icons/fa";
//import { GiProgression } from "react-icons/gi";
import { GoHome, GoHomeFill } from "react-icons/go";
//import { IoIosAddCircle } from "react-icons/io";
//import { LiaCrownSolid } from "react-icons/lia";


import { BottomMenuFragments } from "./fragments ";
import { BsBarChart, BsBarChartFill } from "react-icons/bs";

export function BottomMenu() {
  return (
    <BottomMenuFragments.Root>
      <BottomMenuFragments.Icon
        href="/home"
        icon={GoHome}
        iconActive={GoHomeFill}
      />
      <BottomMenuFragments.Icon
        href="/desempenho"
        icon={BsBarChart}
        iconActive={BsBarChartFill}
      />

      {/* <BottomMenuFragments.Icon
        href="/temas"
        icon={IoIosAddCircle}
        iconActive={IoIosAddCircle}
      /> */}
      {/* <div className="relative">
        <AddWriting />
      </div> */}

      <BottomMenuFragments.Icon
        href="/explorar"
        icon={FaRegCompass}
        iconActive={FaCompass}
      />

      {/* <BottomMenuFragments.Icon
        href="/perfil"
        icon={BiUser}
        iconActive={BiSolidUser}
      /> */}
      <BottomMenuFragments.Icon
        href="/plus"
        icon={FaCrown}
        iconActive={FaCrown}
      />
    </BottomMenuFragments.Root>
  );
}