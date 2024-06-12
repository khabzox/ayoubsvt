"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="items-center h-14 bg-primLaboHov text-white flex justify-between">
      <button className="block md:hidden ml-4">
        {/* Menu icon */}
        hello
      </button>
      {/* Header content */}
      <div className="contents justify-between">
        <div className="ml-4 flex items-center">
          <UserButton afterSignOutUrl="/"/>&nbsp;
          {user ? user.fullName : "Loading..."}
        </div>
        <div className="mr-4">
          <input
            type="search"
            placeholder="search..."
            className="rounded p-1 active:shadow-prim"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
