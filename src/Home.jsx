import logo from "../src/assets/logo/logo.png";
import logowhite from "../src/assets/logo/logowhite.png";
import shopping from "../src/assets/icones/shopping.png";
import home from "../src/assets/icones/home.png";
import segment from "../src/assets/icones/segment.png";
import image1 from "../src/assets/images/image1.png";
import image2 from "../src/assets/images/image2.png";
import image3 from "../src/assets/images/image3.png";
import image4 from "../src/assets/images/image4.png";
import image5 from "../src/assets/images/image5.png";
import image6 from "../src/assets/images/image6.png";
import image7 from "../src/assets/images/image7.png";
import image8 from "../src/assets/images/image8.png";
import image9 from "../src/assets/images/image9.png";
import image10 from "../src/assets/images/image10.png";
import image11 from "../src/assets/images/image11.png";
import { Link } from "react-router-dom";

export default function App() {
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
            <div className="w-[895px] h-[330px] bg-[#9D3CFF] rounded-3xl"></div>
            <h1 className="mt-10 font-bold text-4xl">JORDAN</h1>
            <div className="flex space-x-5 mt-5">
              <button className="flex items-center border-2 px-3 w-[129px] h-9 rounded-xl">
                <img src={segment} width={26} height={26} alt="" />
                <span className="font-bold text-xl">Sortare</span>
              </button>
              <button className="flex items-center font-bold text-xl border-2 px-3 w-[129px] h-9 rounded-xl">
                Sortare
              </button>
            </div>
            <div className="flex flex-wrap gap-10">
              <Link to="/details">
                <div className="w-[268px] h-418px] mt-10 cursor-pointer">
                  <img src={image1} width={266} height={355} alt="" />
                  <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                    Jordan 1 Low Gym Red 929 Ron
                  </h3>
                </div>
              </Link>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image2} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Diamond 1179 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image3} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image4} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image5} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Diamond 1179 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image6} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image7} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image8} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Diamond 1179 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image9} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image10} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Low Gym Red 929 Ron
                </h3>
              </div>
              <div className="w-[268px] h-418px] mt-10">
                <img src={image11} width={266} height={355} alt="" />
                <h3 className="w-[214px] h-14 text-xl font-semibold leading-relaxed mt-3">
                  Jordan 1 Mid Diamond 1179 Ron
                </h3>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="w-[1444px] h-64 bg-black mt-20 block">
        <div className="flex text-white space-x-6 justify-center">
          <img
            src={logowhite}
            width={149}
            height={49}
            alt="logo"
            className="ml-28 text-white mt-10"
          />
          <h4 className="text-2xl mt-10">Vezi si</h4>
          <h4 className="text-2xl mt-10">Urmareste</h4>
        </div>
      </footer>
    </div>
  );
}
