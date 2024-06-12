import Image from "next/image";
import { levelsData } from "./levelsData";
export default function Level() {
  return (
    <>
      <section className="max-md:ml-4 max-lg:ml-10 max-xl:ml-15 max-2xl:ml-20 py-5">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {levelsData.map((level) => {
              return (
                <>
                  <a href={level.linkTo} key={level.id} className=" opacity-65 hover:opacity-100">
                    <Image
                      src={level.srcImage}
                      alt={level.altImage}
                      width={100}
                      height={100}
                    />
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
