"use client";

import { useGlobalContext } from "../context/Global";

import Image from "next/image";

const Dropdown = () => {
  const { isOpen, setIsOpen, selected, selectDropdown } = useGlobalContext()!;
  return (
    <div className="relative inline-block" onClick={() => setIsOpen(!isOpen)}>
      <button
        type="button"
        className="flex justify-between items-center p-1 font-semibold  
        bg-main-2 rounded-lg text-white mdm:border-[1px]
        focus:outline-none w-full border-2 border-main-1"
      >
        {selected === 0 && (
          <>
            <div className="flex items-center gap-x-1">
              <Image
                src="/EVM.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="w-[23px] h-[23px]"
              />
              EVM
            </div>
            <div>
              <Image
                src="/Arrow_down.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="w-[23px] h-[23px]"
              />
            </div>
          </>
        )}
        {selected === 1 && (
          <>
            <div className="flex items-center gap-x-1">
              <Image
                src="/ES.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] h-[25px]"
              />
              ES
            </div>
            <div>
              <Image
                src="/Arrow_down.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] h-[25px]"
              />
            </div>
          </>
        )}
        {selected === 2 && (
          <>
            <div className="flex items-center gap-x-1">
              <Image
                src="/Ethereum.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] h-[25px]"
              />
              ES
            </div>
            <div>
              <Image
                src="/Arrow_down.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] h-[25px]"
              />
            </div>
          </>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-1.5 origin-top-right bg-main-2 rounded-lg
            shadow-lg w-full ring-1 ring-black ring-opacity-5 border-[3px] border-main-1 z-20"
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li onClick={() => selectDropdown(0)}>
              <p
                className="flex items-center p-2 text-sm gap-x-1
       font-semibold text-white cursor-pointer hover:bg-[#FFFFFF33]
       hover:text-main-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-[22px] h-[22px]"
                >
                  <mask
                    id="mask0_5443_282"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_5443_282)">
                    <path
                      d="M8.20007 14.6667C11.7715 14.6667 14.6667 11.7715 14.6667 8.20007C14.6667 4.62863 11.7715 1.7334 8.20007 1.7334C4.62862 1.7334 1.7334 4.62863 1.7334 8.20007C1.7334 11.7715 4.62862 14.6667 8.20007 14.6667Z"
                      fill="url(#paint0_linear_5443_282)"
                    />
                    <path
                      d="M7.79333 14.2666C11.3648 14.2666 14.26 11.3713 14.26 7.79991C14.26 4.22847 11.3648 1.33325 7.79333 1.33325C4.22189 1.33325 1.32666 4.22847 1.32666 7.79991C1.32666 11.3713 4.22189 14.2666 7.79333 14.2666Z"
                      fill="url(#paint1_linear_5443_282)"
                    />
                    <path
                      d="M7.79333 1.71991C8.99612 1.71859 10.1723 2.07406 11.173 2.74134C12.1737 3.40861 12.9541 4.35771 13.4153 5.46857C13.8765 6.57943 13.9978 7.80213 13.764 8.98198C13.5301 10.1618 12.9516 11.2458 12.1016 12.0968C11.2515 12.9477 10.1682 13.5275 8.9886 13.7626C7.80901 13.9977 6.58619 13.8777 5.47482 13.4177C4.36346 12.9577 3.4135 12.1785 2.74513 11.1785C2.07675 10.1785 1.72 9.0027 1.71999 7.79991C1.72176 6.18909 2.36198 4.64466 3.50037 3.50501C4.63877 2.36536 6.18251 1.72344 7.79333 1.71991ZM7.79333 1.33326C6.51434 1.33326 5.26408 1.71251 4.20064 2.42308C3.1372 3.13365 2.30835 4.14359 1.81891 5.32522C1.32946 6.50685 1.2014 7.8071 1.45092 9.06151C1.70044 10.3159 2.31632 11.4682 3.2207 12.3725C4.12508 13.2769 5.27733 13.8928 6.53174 14.1423C7.78615 14.3918 9.08638 14.2638 10.268 13.7743C11.4496 13.2849 12.4596 12.456 13.1702 11.3926C13.8807 10.3292 14.26 9.0789 14.26 7.79991C14.2609 6.95045 14.0942 6.10915 13.7695 5.32418C13.4449 4.53921 12.9686 3.82599 12.3679 3.22532C11.7672 2.62466 11.054 2.14838 10.2691 1.82371C9.48408 1.49904 8.64279 1.33238 7.79333 1.33326Z"
                      fill="url(#paint2_linear_5443_282)"
                    />
                    <path
                      d="M11.9333 7.7999C11.9329 8.6467 11.6725 9.47296 11.1872 10.1669C10.7019 10.8609 10.0152 11.389 9.21994 11.6799L8.64661 11.5732C9.50417 11.3813 10.2708 10.903 10.8201 10.2171C11.3695 9.53125 11.6688 8.67868 11.6688 7.7999C11.6688 6.92113 11.3695 6.06858 10.8201 5.38269C10.2708 4.6968 9.50417 4.21848 8.64661 4.02657L9.21994 3.9199C10.0152 4.21081 10.7019 4.73897 11.1872 5.43292C11.6725 6.12686 11.9329 6.95311 11.9333 7.7999ZM7.80661 3.65324C8.06387 3.65419 8.3205 3.67874 8.57328 3.72658C7.61924 3.89989 6.75631 4.40257 6.13495 5.14697C5.5136 5.89137 5.17325 6.83026 5.17325 7.7999C5.17325 8.76955 5.5136 9.70844 6.13495 10.4528C6.75631 11.1972 7.61924 11.6999 8.57328 11.8732C8.3203 11.9189 8.06366 11.9412 7.80661 11.9399C7.24851 11.9623 6.69165 11.8717 6.16943 11.6736C5.64721 11.4755 5.1704 11.1739 4.76761 10.7869C4.36482 10.4 4.04436 9.93561 3.82545 9.42175C3.60655 8.90789 3.49371 8.35511 3.49371 7.79657C3.49371 7.23802 3.60655 6.68524 3.82545 6.17138C4.04436 5.65753 4.36482 5.1932 4.76761 4.80625C5.1704 4.4193 5.64721 4.1177 6.16943 3.91957C6.69165 3.72144 7.24851 3.63084 7.80661 3.65324ZM9.86661 9.57324H6.97327V9.25991H7.08661C7.30661 9.25991 7.35327 9.19991 7.35327 8.87325V7.9199C7.35327 7.5599 7.35328 7.55991 7.08661 7.55991H6.97994V7.25323H7.35327V5.9199C7.35327 5.7999 7.31328 5.75323 7.05994 5.75323H6.97327V5.44657H9.97994L9.71327 6.57324L9.41327 6.50657V6.3999C9.44547 6.28248 9.46338 6.16162 9.46661 6.03991C9.46661 5.81991 9.33994 5.75323 8.93994 5.75323H7.93328V7.25323H8.65994C8.68011 7.25584 8.7006 7.25423 8.72011 7.24849C8.73962 7.24275 8.75773 7.23302 8.77327 7.21991C8.82661 7.17324 8.81994 7.03991 8.81994 6.92657V6.76658H9.13328V8.05991H8.81994V7.8999C8.81994 7.78657 8.81994 7.65324 8.77327 7.59991C8.75773 7.5868 8.73962 7.57707 8.72011 7.57133C8.7006 7.56559 8.68011 7.56396 8.65994 7.56657H7.85327C7.90751 7.64972 7.93539 7.74732 7.93328 7.84658V8.75991C7.93726 8.94196 7.87575 9.11939 7.75994 9.25991H8.78661C9.45328 9.25991 9.63994 9.16658 9.79327 8.53991V8.4399L10.1066 8.50657L9.86661 9.57324ZM8.53327 9.7999L8.81994 10.0866L8.53327 10.9999L8.24661 10.0866L8.53327 9.7999ZM7.77994 3.65324C8.03942 3.65389 8.29829 3.67845 8.55327 3.72658C7.59924 3.89989 6.73631 4.40257 6.11495 5.14697C5.4936 5.89137 5.15324 6.83026 5.15324 7.7999C5.15324 8.76955 5.4936 9.70844 6.11495 10.4528C6.73631 11.1972 7.59924 11.6999 8.55327 11.8732C8.29766 11.9159 8.03907 11.9381 7.77994 11.9399C7.22185 11.9623 6.66498 11.8717 6.14276 11.6736C5.62054 11.4755 5.14373 11.1739 4.74095 10.7869C4.33816 10.4 4.01769 9.93561 3.79879 9.42175C3.57988 8.90789 3.46704 8.35511 3.46704 7.79657C3.46704 7.23802 3.57988 6.68524 3.79879 6.17138C4.01769 5.65753 4.33816 5.1932 4.74095 4.80625C5.14373 4.4193 5.62054 4.1177 6.14276 3.91957C6.66498 3.72144 7.22185 3.63084 7.77994 3.65324Z"
                      fill="#0B0436"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_5443_282"
                      x1="8.20007"
                      y1="1.7534"
                      x2="8.20007"
                      y2="14.8734"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.44" stopColor="#A66D05" />
                      <stop offset="0.71" stopColor="#F1E3B5" />
                      <stop offset="0.75" stopColor="#ECD7A2" />
                      <stop offset="0.81" stopColor="#DEB971" />
                      <stop offset="0.83" stopColor="#D9AE5F" />
                      <stop offset="1" stopColor="#A66D05" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_5443_282"
                      x1="7.79333"
                      y1="1.33325"
                      x2="7.79333"
                      y2="14.2599"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F1E3B5" />
                      <stop offset="1" stopColor="#D9AE5F" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_5443_282"
                      x1="1.33333"
                      y1="7.79992"
                      x2="14.26"
                      y2="7.79992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A66D05" />
                      <stop offset="0.29" stopColor="#D9AE5F" />
                      <stop offset="0.62" stopColor="#F1E3B5" />
                      <stop offset="0.79" stopColor="#F0E2B3" />
                      <stop offset="0.86" stopColor="#EFDEAC" />
                      <stop offset="0.9" stopColor="#EBD6A1" />
                      <stop offset="0.94" stopColor="#E7CC90" />
                      <stop offset="0.97" stopColor="#E1BF7A" />
                      <stop offset="1" stopColor="#D9AE5F" />
                    </linearGradient>
                  </defs>
                </svg>
                EVM
              </p>
            </li>

            <li onClick={() => selectDropdown(1)}>
              <p
                className="flex items-center text-sm p-2 text-white 
             font-semibold cursor-pointer gap-x-1 hover:bg-[#FFFFFF33]
             hover:text-main-1"
              >
                <Image
                  src="/ES.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                  className="w-[25px] h-[25px]"
                />
                ES
              </p>
            </li>

            <li onClick={() => selectDropdown(2)}>
              <p
                className="flex items-center p-1 text-sm text-white 
             font-semibold cursor-pointer gap-x-1 hover:bg-[#FFFFFF33]
             hover:text-main-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-[30px] h-[30px]"
                >
                  <g clip-path="url(#clip0_5443_223)">
                    <mask
                      id="mask0_5443_223"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_5443_223)">
                      <path
                        d="M7.99879 1.33331L7.90942 1.63707V10.4514L7.99879 10.5406L12.0903 8.12212L7.99879 1.33331Z"
                        fill="#343434"
                      />
                      <path
                        d="M7.99874 1.33331L3.90723 8.12212L7.99874 10.5406V6.26243V1.33331Z"
                        fill="#8C8C8C"
                      />
                      <path
                        d="M7.99872 11.3154L7.94836 11.3768V14.5166L7.99872 14.6638L12.0927 8.89813L7.99872 11.3154Z"
                        fill="#3C3C3B"
                      />
                      <path
                        d="M7.99874 14.6638V11.3154L3.90723 8.89813L7.99874 14.6638Z"
                        fill="#8C8C8C"
                      />
                      <path
                        d="M7.99878 10.5405L12.0902 8.12209L7.99878 6.26239V10.5405Z"
                        fill="#141414"
                      />
                      <path
                        d="M3.90735 8.12209L7.9988 10.5405V6.26239L3.90735 8.12209Z"
                        fill="#393939"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5443_223">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                ETH
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
