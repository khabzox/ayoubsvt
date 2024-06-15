"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="p-8 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-prim to-[#c77aff] px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-[#fff] xl:text-sectiontitle4">
              Rejoignez-nous aujourd&apos;hui et augmentez votre productivité              </h2>
              <p className=" text-[#e5d1ff]">
              Rejoignez-nous dès aujourd&apos;hui pour augmenter votre productivité et libérer votre plein potentiel professionnel. Avec notre approche innovante et nos outils performants, accomplissez plus en moins de temps.              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/cta.png"
                  alt="Saly"
                  className="hidden md:block"
                />
                <a
                  href="/sign-up"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black hover:opacity-90 dark:bg-white "
                >
                  Inscription gratuite
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon-arrow-light.svg"
                    alt="Arrow"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
