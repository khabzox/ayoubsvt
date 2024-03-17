import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/dashboard" className="mt-4">
      <Image src="/images/logos/header/header-logo.png" alt="logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
