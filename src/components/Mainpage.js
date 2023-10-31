import React, { useState, useEffect } from "react";
import {
  AiOutlineArrowLeft,
  AiFillEye,
  AiOutlineInfoCircle,
  PopularBiSolidDownArrow,
  AiFillEdit,
  AiOutlineLike,
} from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import startuplogo from "../utils/startuplogo.png";
import profile from "../utils/p.png";
import fab from "../utils/fab.png";
import fab1 from "../utils/fab1.png";
import fab2 from "../utils/fab2.png";
import fab3 from "../utils/fab3.png";
import fab4 from "../utils/fab4.png";
import fabi1 from "../utils/fabi1.png";
import fabi2 from "../utils/fabi2.png";
import fabi3 from "../utils/fabi3.png";
import fabi4 from "../utils/fabi4.png";
import faba from "../utils/faba.png";
import Issue from "../components/Issue";
import Share from "../components/Share";
import Suggestion from "../components/Suggestions";
import Queries from "../components/Queries";

function Mainpage(props) {
  const [feed, setFeed] = useState("hidden");
  const [feedcross, setFeedcross] = useState("hidden");
  const [feeddown, setFeeddown] = useState("hidden");
  const [issue, setIssue] = useState("hidden");
  const [querry, setQuerry] = useState("hidden");
  const [share, setShare] = useState("hidden");
  const [suggestion, setSuggestion] = useState("hidden");
  const [active, setactive] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  function fabClick() {
    setactive(false);
    if (active && feedcross === "") {
      setFeedcross("hidden");
      setFeed("hidden");
      setIssue("hidden");
      setShare("hidden");
      setSuggestion("hidden");
      setFeeddown("hidden");
      setQuerry("hidden");
    } else if (feed === "hidden") {
      setFeed("");
      setFeedcross("");
      setIssue("hidden");
      setShare("hidden");
      setSuggestion("hidden");
      setFeeddown("hidden");
      setQuerry("hidden");
    } else {
      setFeed("hidden");
      setFeedcross("hidden");
      setIssue("hidden");
      setShare("hidden");
      setSuggestion("hidden");
      setFeeddown("hidden");
      setQuerry("hidden");
    }
  }
  function contactClick() {
    setactive(true);
    setFeed("hidden");
    setIssue("hidden");
    setShare("hidden");
    setSuggestion("hidden");
    setFeeddown("");
    setQuerry("");
  }
  function suggestionClick() {
    setactive(true);
    setFeed("hidden");
    setIssue("hidden");
    setShare("hidden");
    setSuggestion("");
    setFeeddown("");
    setQuerry("hidden");
  }
  function feedbackClick() {
    setactive(true);
    setFeed("hidden");
    setIssue("hidden");
    setShare("");
    setSuggestion("hidden");
    setFeeddown("");
    setQuerry("hidden");
  }
  function issueClick() {
    setactive(true);
    setFeed("hidden");
    setIssue("");
    setShare("hidden");
    setSuggestion("hidden");
    setFeeddown("");
    setQuerry("hidden");
  }

  const submitfun = (param) => {
    if (param === "1")
      setMessage(
        "Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!"
      );
    else if (param === "3") setMessage("Thanks for your valuable feedback!");
    else if (param === "4") setMessage("Thanks for your valuable Suggestion!");
    else
      setMessage(
        "Thanks for reaching out to us! We will get back to you as soon as possible"
      );

      setFeedcross("hidden");
      setFeed("hidden");
      setIssue("hidden");
      setShare("hidden");
      setSuggestion("hidden");
      setFeeddown("hidden");
      setQuerry("hidden");

    
    setSubmit(true);
    console.log("click");
    setTimeout(() => {
      setMessage("");
      setSubmit(false);
      setactive(false);
     
    }, 3000);
  };

  return (
    <div className={`relative  `}>
      <div className={`mt-8  ${active ? "opacity-40":""}`}>
        <div className="text-white flex items-center text-2xl ml-20">
          <div className="text-6xl">
            <AiOutlineArrowLeft />
          </div>
          <h2 className="ml-2">Back to Question</h2>
        </div>
      </div>

      <div className={`w-[60%] h-screen m-auto mt-8 xs:w-[90%] ${active ? "opacity-40":""}`}>
        <div className="bg-[#F8F8F8] rounded-lg xs:h-[20rem] relative">
          <div className="w-[100%] h-1/4  flex justify-between  ">
            <div className="flex items-center justify-evenly pl-8 xs:hidden">
              <button
                type="button"
                class="text-white 
                        bg-[#A9D9FF]hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Designe
              </button>

              <button
                type="button"
                class="text-white bg-[#A9D9FF]hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Technology
              </button>
            </div>
            <div className="hidden xs:inline xs:p-8">posted on 28 Jan 2023</div>
            <div className="pr-12 pt-2 xs:w-[6rem] xs:h-[6rem]">
              <img src={startuplogo} alt="logo" />
            </div>
          </div>

          <div className="pl-8 pr-8">
            <p className="font-semibold text-2xl xs:text-lg">
              A travel startup wants Amazon to pre-install their personal travel
              agent bot on existing Amazon Echos. What is the value of the
              partnership to the travel startup?
            </p>
            <p className=" text-2xl xs:hidden">
              Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
              viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
              donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
              magna cursus se?
            </p>
          </div>
          <div className="flex justify-between item-center  p-8 pb-4  ">
            <div className="hidden absolute xs:left-3 xs:block">Answer(23)</div>
            <div className="flex xs:absolute xs:right-3">
              <AiFillEye className="m-1" /> 100 Views
            </div>
            <div className="flex xs:hidden">
              <AiOutlineInfoCircle className="m-1" /> How should you word your
              answer?
            </div>
          </div>
        </div>

        <div className="hidden bg-[#F8F8F8] rounded-lg xs:h-[20rem] relative xs:block xs:mt-3">
          <div className="w-[100%] h-1/4  flex justify-between  ">
            <div className="flex items-center justify-evenly pl-8 xs:hidden">
              <button
                type="button"
                class="text-white 
                        bg-[#A9D9FF]hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Designe
              </button>

              <button
                type="button"
                class="text-white bg-[#A9D9FF]hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Technology
              </button>
            </div>
            <div className="hidden xs:inline xs:p-8">posted on 28 Jan 2023</div>
            <div className="pr-12 pt-2 xs:w-[6rem] xs:h-[6rem]">
              <img src={startuplogo} alt="logo" />
            </div>
          </div>

          <div className="pl-8 pr-8">
            <p className="font-medium text-2xl xs:text-lg">
              A travel startup wants Amazon to pre-install their personal travel
              agent bot on existing Amazon Echos. What is the value of the
              partnership to the travel startup?
            </p>
            <p className=" text-2xl xs:hidden">
              Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
              viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
              donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
              magna cursus se?
            </p>
          </div>
          <div className="flex justify-between item-center  p-8 pb-4  ">
            <div className="flex absolute xs:left-3">Answer(23)</div>
            <div className="flex absolute xs:right-3">
              <AiFillEye className="m-1" /> 100 Views
            </div>
            <div className="flex xs:hidden">
              <AiOutlineInfoCircle className="m-1" /> How should you word your
              answer?
            </div>
          </div>
        </div>

        <div className="h-[5rem] text-white  pt-3 xs:hidden">
          <div className="flex  justify-between mt-3">
            <h1 className="font-bold text-2xl">Answer (23)</h1>
            <div>
              Sort By:
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay="500"
                data-dropdown-trigger="hover"
                class="text-black bg-[#F8F8F8] text-[1rem] font-semibold rounded-md text-sm px-2 py-[0.3rem] text-center inline-flex items-center ml-2"
                type="button"
              >
                Popular
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15.41l-3.59-3.59-1.42 1.42L12 18.25l5.01-5.01-1.41-1.42z" />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownDelay"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8F8] rounded-lg xs:mt-2.5 xs:hidden">
          <div className="w-[100%]  flex justify-between pt-5 pb-3">
            <div className="flex items-center justify-evenly pl-8">
              <div className="flex h-[110%] ">
                <img src={profile} className="h-full w-full " alt="" />
                <div className=" ">
                  <div className="pl-3">
                    <h2 className="font-bold text-lg w-[10rem]">
                      Neha Bhat(You)
                    </h2>
                    <h2 className="text-lg w-[10rem]">Jun27,2023</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-xl font-bold  pr-12 pt-2">
              <AiFillEdit className="w-[2rem] h-[1.7rem] mr-3" />
              Edit
            </div>
          </div>

          <div className="pl-8 pr-8">
            <p className="font-medium text-2xl">
              Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
              enim ornare feugi vitae. Eget proin aliquam blandit eget vitae
              erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices
              risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas
              ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus
              ipsum interdum ut velit quam. Bibendum amet mi....{" "}
              <span className="font-bold">Show more </span>
            </p>
          </div>
          <div className="flex justify-between item-center  p-8 pb-4 ">
            <div className="flex items-center w-[10rem] h-[3rem] text-xl font-bold ml-12 ">
              <AiOutlineLike className="w-[5rem] h-[2rem] px-2 " />
              Like
              <BiCommentDots className="w-[5rem] h-[2rem] px-2 " />
            </div>
            <input
              className="w-[35rem] h-[2.5rem] border rounded-lg"
              type="text"
              placeholder="  Enter Your comment"
            />
            <button
              type="button"
              class="text-black bg-white border border-gray-300  font-medium rounded-lg text-m px-5 py-2 mr-2 mb-2 "
            >
              POST
            </button>
          </div>
        </div>
      </div>

      <div className={`xs:h-[40%] `}>
        <div>

        </div>
        <button className="fixed bottom-4 right-4 " onClick={fabClick}>
          <img className="xs:w-[4rem] xs:h-[4rem]" src={fab} alt="" />
        </button>
        <div className={`mt-8 ${submit ? "hidden" : ""}`}>
          <button
            className={`fixed bottom-4 right-4 ${feedcross}`}
            onClick={fabClick}
          >
            <img className="xs:w-[4rem] xs:h-[4rem]" src={faba} alt="" />
          </button>
          <button
            className={`fixed bottom-[5rem] right-4 ${feed}`}
            onClick={contactClick}
          >
            <img className="xs:w-cover xs:h-[4rem]" src={fab1} alt="" />
          </button>
          <button
            className={`fixed bottom-[9rem] right-4 ${feed}`}
            onClick={suggestionClick}
          >
            <img className="xs:w-cover xs:h-[4rem]" src={fab2} alt="" />
          </button>
          <button
            className={`fixed bottom-[13rem] right-4 ${feed}`}
            onClick={feedbackClick}
          >
            <img className="xs:w-cover xs:h-[4rem]" src={fab3} alt="" />
          </button>
          <button
            className={`fixed bottom-[17rem] right-4 ${feed}`}
            onClick={issueClick}
          >
            <img className="xs:w-cover xs:h-[4rem]" src={fab4} alt="" />
          </button>
        </div>

        <div className="">
          <div className="xs:hidden">
            <button
              className={`fixed bottom-4 right-[5.5rem] ${feeddown} ${querry===""?"border-2 border-amber-300 rounded-full outline-offset-0":""} `}
              onClick={contactClick}
            >
              <img className="xs:w-cover xs:h-[4rem]" src={fabi4} alt="" />
            </button>
            <button
              className={`fixed bottom-4 right-[10rem] ${feeddown}  ${suggestion===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`}
              onClick={suggestionClick}
            >
              <img className="xs:w-cover xs:h-[4rem]" src={fabi3} alt="" />
            </button>
            <button
              className={`fixed bottom-4 right-[14.5rem] ${feeddown}  ${share===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`}
              onClick={feedbackClick}
            >
              <img className="xs:w-cover xs:h-[4rem]" src={fabi2} alt="" />
            </button>
            <button
              className={`fixed bottom-4 right-[19rem] ${feeddown} ${issue===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`}
              onClick={issueClick}
            >
              <img className="xs:w-[cover xs:h-[4rem]" src={fabi1} alt="" />
            </button>
          </div>






          <div className="xs:w-full xs:h-auto">
            <div className="">
                <div className={`${issue} `}>
                <Issue login={props.login} submitfun={() => submitfun("1")} />
                </div>
                <div className={`${querry} `}>
                <Queries login={props.login} submitfun={() => submitfun("2")} />
                </div>
                <div className={`${share} `}>
                <Share login={props.login} submitfun={() => submitfun("3")} />
                </div>
                <div className={`${suggestion}`}>
                <Suggestion
                    login={props.login}
                    submitfun={() => submitfun("4")}
                />
                </div>
            </div>

            <div className={`hidden xs:block xs:fixed xs:top-[6rem] xs:right-0`}>
              <button className={` ${feeddown} ${querry===""?"border-2 border-amber-300 rounded-full outline-offset-0":""} `} onClick={contactClick}>
                <img className="xs:w-cover xs:h-[4rem]" src={fabi4} alt="" />
              </button>
              <button className={` ${feeddown} ${suggestion===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`} onClick={suggestionClick}>
                <img className="xs:w-cover xs:h-[4rem]" src={fabi3} alt="" />
              </button>
              <button className={` ${feeddown} ${share===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`} onClick={feedbackClick}>
                <img className="xs:w-cover xs:h-[4rem]" src={fabi2} alt="" />
              </button>
              <button className={` ${feeddown} ${issue===""?"border-2 border-amber-300 rounded-full outline-offset-0":""}`} onClick={issueClick}>
                <img className="xs:w-[cover xs:h-[4rem]" src={fabi1} alt="" />
              </button>

              <button className={` ${feedcross} ${!active && feedcross===""?"hidden":feedcross}`} onClick={fabClick}>
                <img className="xs:w-[4rem] xs:h-[4rem]" src={faba} alt="" />
              </button>
            </div>
          </div>






        </div>
      </div>

      <div className={`relative h-full ${submit ? "" : "hidden"}`}>
        <div
          className={`w-[25rem] h-auto bg-[#F8F8F8] rounded-lg fixed right-7 bottom-[6.5rem] p-3`}
        >
          <div className="font-semibold text-center">{message}</div>

          <div class="absolute bottom-0 right-[0.9rem] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-indigo-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
