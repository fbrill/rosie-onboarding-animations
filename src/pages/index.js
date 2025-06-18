import { ArrowRightIcon, PencilSquareIcon } from "@heroicons/react/24/solid"

export default function GuidedSetUp() {
  return (
    <div className="bg-gray-200 p-2.5 h-screen">
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-[10px] p-7 h-full">
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
              these details about your business. Don't worry, you can make
              changes to these settings later.
            </p>
          </div>

          {/* Cards */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-10 border border-gray-200">
            <h3 className="text-2xl font-bold text-center">
              Let's make sure we've got your business name and overview right
              before moving on.
            </h3>
            <div className="min-h-28 flex items-center justify-center flex-col gap-3">
              <div className="flex gap-4 w-full">
                <p className="w-1/3 text-gray-800 text-right">Business Name</p>
                <p className="w-2/3 text-black font-medium">
                  Gratia Bakery & Cafe
                </p>
              </div>
              <div className="flex gap-4 w-full">
                <p className="w-1/3 text-gray-800 text-right">Business Phone</p>
                <p className="w-2/3 text-black font-medium">(555) 123-1234</p>
              </div>
              <div className="flex gap-4 w-full">
                <p className="w-1/3 text-gray-800 text-right">
                  Business Overview
                </p>
                <p className="w-2/3 text-black font-medium">
                  Gratia Bakery & Cafe is a bakery and cafe that serves
                  delicious pastries and coffee.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-gray-950 font-medium flex items-center gap-2">
                Make Changes <PencilSquareIcon className="size-6" />
              </button>
            </div>
          </div>

          {/* Step Footer */}
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-sm font-medium">1/8</p>
              <div className="bg-gray-200 rounded-full p-0.5 w-[100px]">
                <div className="bg-purple-600 w-3 h-2 rounded-full" />
              </div>
            </div>
            <button className="bg-gradient-to-b from-[#A83FC1] to-[#9332DF] text-white rounded-full px-5 py-2.5 font-medium flex items-center gap-2">
              Continue <ArrowRightIcon className="size-5 text-purple-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
