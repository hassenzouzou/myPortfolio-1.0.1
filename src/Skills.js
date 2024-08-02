import "./index.css";
import htmlIcon from "./Assets/icons/html.png";
import cssIcon from "./Assets/icons/css.png";
import jsIcon from "./Assets/icons/js.png";
import cIcon from "./Assets/icons/c.png";
import pythonIcon from "./Assets/icons/python.png";
import figmaIcon from "./Assets/icons/figma.png";
import tailwindCssIcon from "./Assets/icons/tailwind css.png";
import bootstrapIcon from "./Assets/icons/bootstrap.png";
import reactJsIcon from "./Assets/icons/React js.png";
import nextJsIcon from "./Assets/icons/nextjs.1024x617.png";
import saudiIcon from "./Assets/icons/saudi.png";
import unitedKingdomIcon from "./Assets/icons/united-kingdom.png";
import franceIcon from "./Assets/icons/france.png";

export default function Skills() {
  return (
    <section
      id="skills"
      class="skills sm:px-[200px] px-[20px] sm:pt-[100px] pt-[105px]"
    >
      <h1 class="font-bold sm:text-6xl text-4xl pb-[20px] text-[#3572EF]">
        Skills:
      </h1>
      <div class="using-now-icon">
        <h3 class="font-bold sm:text-4xl text-2xl sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Using now:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <img class="sm:w-[100px] w-[50px]" src={htmlIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={cssIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={jsIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={cIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={pythonIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={figmaIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={tailwindCssIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={bootstrapIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={reactJsIcon} alt="" />
        </div>
      </div>

      <div class="learning">
        <h3 class="font-bold sm:text-4xl text-2xl sm:pt-[75px] pt-[35px] sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Learning:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <svg
            class="sm:w-[100px] w-[50px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 222"
          >
            <path
              fill="#007fff"
              d="M215.771 151.107a7.11 7.11 0 0 0 3.57-6.144l.128-41.153a7.11 7.11 0 0 1 3.57-6.145l22.308-12.814A7.11 7.11 0 0 1 256 91.016v74.818a7.11 7.11 0 0 1-3.57 6.166l-84.19 48.357a7.11 7.11 0 0 1-7.07.007l-66.07-37.79a7.11 7.11 0 0 1-3.585-6.172v-37.726c0-.042.05-.07.093-.05c.035.022.085 0 .085-.05v-.042c0-.028.014-.057.043-.071l54.416-31.261c.05-.029.028-.107-.029-.107a.057.057 0 0 1-.057-.057l.107-36.986a7.111 7.111 0 0 0-10.667-6.187L95.064 87.17a7.11 7.11 0 0 1-7.097 0l-40.57-23.36a7.11 7.11 0 0 0-10.66 6.158v66.846a7.11 7.11 0 0 1-10.638 6.18L3.584 130.12A7.11 7.11 0 0 1 0 123.935L.2 7.095A7.11 7.11 0 0 1 10.851.946L87.974 45.24a7.11 7.11 0 0 0 7.083 0l77.1-44.296a7.11 7.11 0 0 1 10.653 6.172v116.867a7.11 7.11 0 0 1-3.562 6.166l-40.378 23.254a7.111 7.111 0 0 0 .028 12.338l22.273 12.68a7.11 7.11 0 0 0 7.061-.015zm4.672-104.835a7.111 7.111 0 0 0 10.767 6.094l21.334-12.8A7.11 7.11 0 0 0 256 33.472V7.387A7.111 7.111 0 0 0 245.233 1.3L223.9 14.1a7.11 7.11 0 0 0-3.457 6.095v26.084z"
            />
          </svg>
          <img class="sm:w-[100px] w-[50px]" src={nextJsIcon} alt="" />
        </div>
      </div>

      <div class="Other skills:">
        <h3 class="font-bold sm:text-4xl text-2xl sm:pt-[75px] pt-[35px] sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Other skills:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <img class="sm:w-[100px] w-[50px]" src={saudiIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={unitedKingdomIcon} alt="" />
          <img class="sm:w-[100px] w-[50px]" src={franceIcon} alt="" />
        </div>
      </div>
    </section>
  );
}
