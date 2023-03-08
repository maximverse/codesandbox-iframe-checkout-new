import React from "react";
import CartComponent from "./CartComponent";

function HeaderComponent({ cartOpened, handleCart }) {
  return (
    <div>
      <div id="poweredByInstantBanner" style={{ padding: 10 }}>
        <div
          id="BannerContainer"
          className={cartOpened ? "cartEnabled" : "eHICVZ"}
        >
          <div id="HeaderInnerContainer" className="cLMvmi separate">
            <span className="Marginer"></span>
            <div id="BannerLogoContainer" className="cGGLwj">
              <div id="MerchantLogoContainer" className="hkSZnk">
                <span className={`merchantName ${cartOpened && "blur"}`}>
                  Kitchen&More{" "}
                  <span className="">
                    <svg
                      className="checkMark"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                        fill="#3587F7"
                      />
                    </svg>
                  </span>
                </span>
                {/* <img
                        id="MerchantLogoImg"
                        src="https://www.revereshoes.com.au/media/logo/stores/1/revere_logo_Colour.gif"
                        className="hIZXgi"
                      /> */}
              </div>
              <div
                onClick={() => handleCart()}
                id="BackContainer"
                className="HkXEw"
              >
                {cartOpened ? (
                  "🎉"
                ) : (
                  <img
                    alt="Cart"
                    height={16}
                    src="data:image/svg+xml,%3Csvg%20fill='%233D464D'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M7%2018c-1.1%200-1.99.9-1.99%202S5.9%2022%207%2022s2-.9%202-2-.9-2-2-2zM1%202v2h2l3.6%207.59-1.35%202.45c-.16.28-.25.61-.25.96%200%201.1.9%202%202%202h12v-2H7.42c-.14%200-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75%200%201.41-.41%201.75-1.03l3.58-6.49A1.003%201.003%200%200%200%2020%204H5.21l-.94-2H1zm16%2016c-1.1%200-1.99.9-1.99%202s.89%202%201.99%202%202-.9%202-2-.9-2-2-2z'/%3E%3Cpath%20d='M0%200h24v24H0z'%20fill='none'/%3E%3C/svg%3E"
                  />
                )}

                <h4 id="BackText" className="iqNqGh">
                  A$179.95
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="hBXhLe"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </div>
            </div>
          </div>

          <CartComponent cartOpened={cartOpened} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
