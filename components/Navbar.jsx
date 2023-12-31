"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import search from "../public/search.svg";
import menu from "../public/menu.svg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative overflow-hidden`}>
    <div className="absolute w-[50%] inset-0 gradient-01  " />
    <div
      className={`${styles.innerwidth} mx-auto flex justify-between gap-8
    `}>
      <Image
        src={search}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
        METAVERSUS
      </h2>
      <Image
        src={menu}
        alt="menu"
        className="w-[24px] h-[24px] object-contain "
      />
    </div>
  </motion.nav>
);

export default Navbar;
