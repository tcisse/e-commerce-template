import logo from "../src/assets/logo/logo.png";
import shopping from "../src/assets/icones/shopping.png";
import home from "../src/assets/icones/home.png";
import image15 from "../src/assets/images/image15.png";
import image14 from "../src/assets/images/image14.png";
import image1 from "../src/assets/images/image1.png";
import image2 from "../src/assets/images/image2.png";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="">
      <header className="w-[144px] h-[140px] bg-white flex items-center justify-between">
        <div className="flex space-x-44">
          <img
            src={logo}
            width={149}
            height={49}
            alt="logo"
            className="ml-28"
          />
          <div className="flex justify-center">
            <input
              placeholder="Search"
              type="search"
              name="search"
              id=""
              className="bg-[#D9D9D9] w-[590px] h-[43px] border rounded-2xl text-2xl px-3"
            />
          </div>
          <div className="">
            <div className="flex items-center">
              <span className="font-bold text-base">233Lei</span>
              <img src={shopping} width={40} height={40} alt="shopping_icons" />
            </div>
          </div>
        </div>
      </header>
      <body>
        <div className="flex space-x-10">
          <div className="ml-28 space-y-8">
            <Link to="/">
              <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 bg-[#D9D9D9] rounded-xl hover:bg-[#9D3CFF]">
                HOME
                <img
                  src={home}
                  width={24}
                  height={20}
                  className="ml-[140px]"
                  alt=""
                />
              </button>
            </Link>
            <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 rounded-xl bg-[#9D3CFF]">
              JORDAN
            </button>
            <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 rounded-xl bg-[#D9D9D9] hover:bg-[#9D3CFF]">
              ADIDAS
            </button>
            <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 rounded-xl bg-[#D9D9D9] hover:bg-[#9D3CFF]">
              NIKE
            </button>
            <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 rounded-xl bg-[#D9D9D9] hover:bg-[#9D3CFF]">
              BRANDS
            </button>
            <button className="w-[250px] px-5 text-xl font-bold flex items-center h-14 rounded-xl bg-[#D9D9D9] hover:bg-[#9D3CFF]">
              TOP
            </button>
          </div>
          <div className="">
            <div className="w-[985px] h-[601px] bg-[#9D3CFF] rounded-[65px] relative">
              <di className="flex space-x-5">
                <div>
                  <img src={image1} width={480} height={601} alt="" />
                </div>
                <div className="text-white">
                  <h3 className="text-[#B7B7B7] mt-5">MEN’S JORDAN</h3>
                  <h1 className="text-4xl font-extrabold mt-5 w-[371px] h-[124px]">
                    Air Jordan 1 Mid Valentine’s Day
                  </h1>
                  <h3 className="font-bold">1099Ron</h3>
                  <p className="w-[370px] h-[145px] mt-10 text-xl text-justify">
                    Avand ca tema Ziua ÎIndragostitilor, suprapunerile din piele
                    roz si rosu pe Jumpman, sigla Wings si Swoosh-urile vin
                    imbracate intr-o parte superioara din piele alba, cu guler
                    din plasa asortate.
                  </p>
                  <h4 className="font-bold mt-10">Marimi: </h4>
                  <div className="flex flex-wrap mt-5 gap-3">
                    <button className="bg-[#FFFFFF80] rounded-full w-[100px] h-9">
                      36/5.5US
                    </button>
                    <button className="bg-[#FFFFFF80] rounded-full w-[100px] h-9">
                      36/5.5US
                    </button>
                    <button className="bg-[#FFFFFF80] rounded-full w-[100px] h-9">
                      36/5.5US
                    </button>
                    <button className="bg-[#FFFFFF80] rounded-full w-[100px] h-9">
                      36/5.5US
                    </button>
                  </div>
                  <button className="bg-black w-[165px] h-10 rounded-3xl font-extrabold mt-5">
                    Adauga in Cos
                  </button>
                </div>
              </di>
            </div>
            <h1 className="mt-10 font-bold text-4xl">Similare</h1>
            <div className="flex flex-wrap gap-10">
              <div className="w-[268px] h-418px] mt-10 cursor-pointer">
                <img src={image2} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10 cursor-pointer">
                <img src={image14} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Diamond 1179 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image15} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Shadow Red 799 Ron
                </h3>
              </div>
            </div>
          </div>
        </div>
      </body>
      <div className="flex justify-end">
        <footer className="w-[1019px] h-[279px] bg-black mt-20 "></footer>
      </div>
    </div>
  );
}
