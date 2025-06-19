import { useState } from "react"
import {
  ArrowRightIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid"
import { classNames } from "@/utils"
import { AnimatePresence, motion } from "motion/react"

export default function GuidedSetUp() {
  const [inEditMode, setInEditMode] = useState(false)

  return (
    <div className="bg-gray-200 p-2.5 min-h-screen">
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-[10px] p-7 min-h-[calc(100vh-20px)]">
        <div className="max-w-[720px] mx-auto">
          <div className="flex justify-center items-center">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 text-left items-center mt-7 border border-gray-200 rounded-[10px]">
            <p className="text-gray-500 text-sm font-medium border-r border-gray-200 p-3">
              Train & Test
            </p>
            <p className="text-purple-700 bg-purple-50 text-sm font-medium border-r border-gray-200 p-3">
              Customize
            </p>
            <p className="text-gray-500 text-sm font-medium p-3">Launch</p>
          </div>

          {/* Step Title */}
          <div className="max-w-[560px] mx-auto my-10 flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold">Customize your agent</h1>
            <p className="text-md text-gray-700">
              Make Rosie even more accurate for your callers by fine-tuning
              these details about your business. Don&apos;t worry, you can make
              changes to these settings later.
            </p>
          </div>

          {/* Cards */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              transition={{ type: "tween", duration: 0.25 }}
              className="relative"
            >
              <div className="bg-white flex flex-col rounded-xl border border-gray-200 z-10 relative">
                {/* Card header */}
                <div
                  className={classNames(
                    "p-8",
                    inEditMode ? "border-b border-gray-200" : "border-none",
                  )}
                >
                  <h3 className="text-2xl font-bold text-center">
                    Let&apos;s make sure we&apos;ve got your business name and
                    overview right before moving on.
                  </h3>
                </div>

                {inEditMode ? (
                  <CardEdit setInEditMode={setInEditMode} />
                ) : (
                  <CardPreview setInEditMode={setInEditMode} />
                )}
              </div>
              {/* X Shape - Top */}
              <motion.div
                layout
                transition={{ type: "tween", duration: 0.25 }}
                className={classNames(
                  "absolute rounded-xl p-10 border border-gray-300/50 top-3 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200/50 w-1/2 z-[1]",
                  inEditMode
                    ? "rotate-[1deg] -right-1 h-[calc(100%-99px)]"
                    : "rotate-[3deg] -right-3 h-[calc(100%-89px)]",
                )}
              />
              <motion.div
                layout
                transition={{ type: "tween", duration: 0.25 }}
                className={classNames(
                  "absolute rounded-xl p-10 border border-gray-300/50 top-6 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200/50 w-1/2  z-0 opacity-70",
                  inEditMode
                    ? "rotate-[2deg] -right-2 h-[calc(100%-113px)]"
                    : "rotate-[5deg] -right-6 h-[calc(100%-103px)]",
                )}
              />

              {/* Step Footer */}
              <div className="flex justify-between my-7 h-11">
                <div className="flex items-center gap-2">
                  <p className="text-gray-600 text-sm font-medium">1/8</p>
                  <div className="bg-gray-200 rounded-full p-0.5 w-[100px]">
                    <div className="bg-purple-600 w-3 h-2 rounded-full" />
                  </div>
                </div>
                {!inEditMode && (
                  <button className="bg-gradient-to-b from-[#E66464]/25 bg-purple-600 hover:bg-purple-800 text-white rounded-full px-5 py-2.5 font-medium flex items-center gap-2 ani cursor-pointer">
                    Continue{" "}
                    <ArrowRightIcon className="size-5 text-purple-200" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

const CardPreview = ({ setInEditMode }) => {
  return (
    <>
      {/* Card body - Preview */}
      <div className="min-h-28 flex items-center justify-center flex-col gap-3 px-8 py-5">
        <div className="flex gap-4 w-full">
          <p className="w-1/3 text-gray-800 text-right">Business Name</p>
          <p className="w-2/3 text-black font-medium">Gratia Bakery & Cafe</p>
        </div>
        <div className="flex gap-4 w-full">
          <p className="w-1/3 text-gray-800 text-right">Business Phone</p>
          <p className="w-2/3 text-black font-medium">(555) 123-1234</p>
        </div>
        <div className="flex gap-4 w-full">
          <p className="w-1/3 text-gray-800 text-right">Business Overview</p>
          <p className="w-2/3 text-black font-medium">
            Gratia Bakery & Cafe is a bakery and cafe that serves delicious
            pastries and coffee.
          </p>
        </div>
      </div>

      {/* Card footer - Preview */}
      <div className="flex justify-center px-8 pb-8">
        <button
          onClick={() => setInEditMode(true)}
          className="bg-white hover:bg-gray-100 border border-gray-200 rounded-full px-5 py-2.5 text-gray-950 font-medium flex items-center gap-2 ani cursor-pointer"
        >
          Make Changes <PencilSquareIcon className="size-6" />
        </button>
      </div>
    </>
  )
}

const CardEdit = ({ setInEditMode }) => {
  return (
    <>
      <div className="p-8">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <div className="flex items-center gap-1 w-52">
              <p className="text-black text-sm font-medium">Business Name</p>
              <QuestionMarkCircleIcon className="size-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                className="w-full border border-gray-200 rounded-full py-3 px-4 text-sm focus:outline-none"
                placeholder="Enter your business name..."
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-1 w-52">
              <p className="text-black text-sm font-medium">Business Phone</p>
              <QuestionMarkCircleIcon className="size-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                className="w-full border border-gray-200 rounded-full py-3 px-4 text-sm focus:outline-none"
                placeholder="(000) 000-0000"
              />
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="flex items-center gap-1 w-52 h-12">
              <p className="text-black text-sm font-medium">
                Business Overview
              </p>
              <QuestionMarkCircleIcon className="size-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 w-full">
              <textarea
                className="w-full border border-gray-200 rounded-2xl  py-3 px-4 text-sm focus:outline-none h-32 resize-none"
                placeholder="Enter your business overview..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card footer - Edit Mode */}
      <div className="flex justify-between p-6 border-t border-gray-200">
        <button
          onClick={() => setInEditMode(false)}
          className="bg-gray-100 rounded-full px-5 py-2.5 text-gray-950 font-medium flex items-center gap-2 hover:bg-gray-200 ani cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={() => setInEditMode(false)}
          className="bg-gradient-to-b from-[#E66464]/25 bg-purple-600 hover:bg-purple-800 text-white rounded-full px-5 py-2.5 font-medium flex items-center gap-2 ani cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </>
  )
}
