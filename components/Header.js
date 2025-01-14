import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Abatar from "./Abatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center ">
        <Image
          src="https://doteurope.eu/wp-content/uploads/2020/01/Google_2015_logo.svg_.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex px-6 py-3 flex-grow ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Abatar className="ml-auto" url="https://coaching.papareact.com/ai9" />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
