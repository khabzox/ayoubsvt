import { Links } from "./LinkArr";
export const LinkShow = () => {
  return (
    <>
      {Links.map((Link) => {
        return (
          <>
            <li key={Link.id}>
              <a className="text-prim hover:text-primHov" href={Link.href}>
                {Link.link}
              </a>
            </li>
          </>
        );
      })}
    </>
  );
};
