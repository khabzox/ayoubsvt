import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-prim  p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4  xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-prim">
          <Image src={icon} width={36} height={36} alt="title" sizes="(max-width: 36px) 100vw" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-primLabo xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-[#4f2881]">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
