/* eslint-disable @next/next/no-img-element */
import type { ApiResponse } from "../../../types/typings";
import type { NextPage } from "next";

import { Octokit } from "@octokit/core";
import React, { useEffect, useState } from "react";
import { Container } from "../../../styledTwComponents/Container";
import { HiSun } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";

import { useWindowSize } from "../../../hooks/useWindowSize";

const Search: NextPage = () => {
  const [userData, setUserData] = useState<ApiResponse[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  useEffect(() => {
    //key valid till Jan 07, 2024
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_API_KEY,
    });

    const fetchData = async () => {
      try {
        if (searchTerm !== "") {
          const response = await octokit.request(`GET /users/${searchTerm}`, {
            username: "Athma-Vasi",
          });

          setUserData([response] as ApiResponse[]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    void fetchData();
  }, [searchTerm]);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get("search")?.toString() ?? "";

    setSearchTerm(search);
  }

  return (
    <Container $dark={true}>
      <div className="mb-48 xs:w-full sm:w-[62%] md:w-[62%]">
        {/* heading */}
        <nav className="flex w-full flex-row items-center justify-between py-4 xs:text-lg sm:text-xl md:text-2xl">
          {/* title */}
          <h1 className="font-bold tracking-widest xs:text-2xl sm:text-3xl">
            devFinder
          </h1>
          {/* theme */}
          <div className="flex flex-row items-center justify-between gap-x-6 text-xl">
            <p className="xs:text-lg sm:text-xl md:text-2xl lg:text-xl">DARK</p>
            <HiSun className="cursor-pointer xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </div>
        </nav>

        {/* search input */}
        <section className="relative mt-4 mb-6 w-full ">
          <form action="#" onSubmit={handleFormSubmit}>
            {/* search icon */}
            <BiSearch className="absolute top-0 left-0 m-2 text-myBrightBlue xs:h-[40px] xs:text-xl sm:h-[40px] sm:text-xl md:h-[50px] md:text-2xl lg:text-3xl" />
            {/* input */}
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder={
                width < 768 ? "search github ..." : "search github username"
              }
              className="my-auto w-full text-ellipsis rounded-lg bg-myLightBlue px-12 focus:border-myBrightBlue focus:outline-none focus:ring focus:ring-myBrightBlue focus:ring-opacity-50 xs:h-14 xs:text-lg sm:h-14 sm:text-lg md:h-[66px] md:text-xl lg:text-2xl"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 m-2 w-[100px] rounded-lg bg-myBrightBlue py-2 text-xl font-semibold xs:h-[40px] xs:text-lg sm:h-[40px] md:h-[50px]"
            >
              Search
            </button>
          </form>
        </section>

        {/* display search result */}
        <section className="w-full ">
          {userData?.map(
            ({
              data: {
                avatar_url,
                name,
                login,
                created_at,
                bio,
                public_repos,
                followers,
                following,
                location,
                blog,
                twitter_username,
                company,
              },
            }) => (
              <div
                key={crypto.randomUUID()}
                className="flex w-full flex-col items-center justify-between gap-y-8 rounded-lg bg-myLightBlue p-4 "
              >
                {/* image and name */}
                <div className="flex w-full flex-row items-center justify-start xs:gap-x-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-6 ">
                  <img
                    src={avatar_url}
                    alt="image of user's avatar"
                    width={width < 768 ? 100 : width < 1060 ? 150 : 200}
                    height={width < 768 ? 100 : width < 1060 ? 150 : 200}
                    className="rounded-full"
                  />
                  {/* github name details */}
                  <div
                    className={`flex w-[62%] flex-col items-start justify-between  h-[${
                      width < 768 ? 100 : width < 1060 ? 150 : 200
                    }px] xs:gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-6`}
                  >
                    <h2 className="font-bold xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl">
                      {!name ? "not available" : name}
                    </h2>
                    <h3 className="text-myBrightBlue xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      {!login ? "not available" : `@${login}`}
                    </h3>
                    <h4 className="text-myGrey xs:text-base sm:text-lg md:text-2xl lg:text-2xl">
                      {!created_at
                        ? "not available"
                        : `Joined ${new Date(created_at)
                            .toDateString()
                            .split(" ")
                            .slice(1)
                            .join(" ")}`}
                    </h4>
                  </div>
                </div>
                {/* description */}
                <p className="text-myGrey xs:text-base sm:text-base md:text-xl lg:text-2xl">
                  {!bio ? "bio is not available" : bio}
                </p>

                {/* stats */}
                <div
                  className={`w-full h-[${
                    width < 768 ? 100 : width < 1060 ? 150 : 200
                  }px] flex flex-row items-center justify-between rounded-lg bg-myDarkBlue py-2 xs:px-8 sm:px-8 md:px-10 lg:px-16`}
                >
                  {/* repos */}
                  <div className="flex h-[70%] flex-col items-center justify-between ">
                    <h5 className="text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      Repos
                    </h5>
                    <h2 className="font-bold text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl ">
                      {public_repos}
                    </h2>
                  </div>
                  {/* followers */}
                  <div className="flex h-[70%] flex-col items-center justify-between">
                    <h5 className="text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      Followers
                    </h5>
                    <h2 className="font-bold text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl ">
                      {followers}
                    </h2>
                  </div>
                  {/* following */}
                  <div className="flex h-[70%] flex-col items-center justify-between">
                    <h5 className="text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      Following
                    </h5>
                    <h2 className="font-bold text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      {following}
                    </h2>
                  </div>
                </div>

                {/* personals */}
                <div className="flex w-full flex-col items-start justify-between  xs:gap-y-4 sm:gap-y-4 md:gap-y-6">
                  {/* location */}
                  <div className="flex w-full flex-row items-center justify-start gap-x-4">
                    <MdLocationOn className="text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl" />
                    <h2 className=" text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      {!location ? "not available" : location}
                    </h2>
                  </div>
                  {/* blog */}
                  <div className="flex flex-row items-center justify-start gap-x-4">
                    <BiLink className="text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl" />

                    {!blog || blog === "" ? (
                      <h2 className=" text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                        {!blog || blog === "" ? "not available" : blog}
                      </h2>
                    ) : (
                      <a href={blog}>
                        <h2 className=" text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                          {!blog || blog === "" ? "not available" : blog}
                        </h2>
                      </a>
                    )}
                  </div>
                  {/* twitter username*/}
                  <div className="flex flex-row items-center justify-start gap-x-4">
                    <GrTwitter className="text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl" />
                    <h2 className=" text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      {!twitter_username ? "not available" : twitter_username}
                    </h2>
                  </div>
                  {/* place of employment */}
                  <div className="flex flex-row items-center justify-start gap-x-4">
                    <BiBuildingHouse className="text-myWhite xs:text-lg sm:text-xl md:text-2xl lg:text-2xl" />
                    <h2 className=" text-myGrey xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      {!company ? "not available" : company}
                    </h2>
                  </div>
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </Container>
  );
};

export { Search };
