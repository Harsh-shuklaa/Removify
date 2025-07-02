import React from 'react'
import {assets} from '../assets/assets'

const Steps = () => {
  return (
   <div className="mx-4 lg:mx-44 py-40">
  {/* Heading */}
  <h1 className="text-center text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 bg-clip-text text-transparent ">
    Steps to Remove Background <br />
    Image in Seconds
  </h1>

  {/* Steps Container */}
  <div className="flex justify-center items-start flex-wrap gap-4 mt-18 xl:mt-24 ">
    
    {/* Step 1 */}
    <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-transform duration-300 max-w-sm w-full">
      <img src={assets.upload_icon} alt="Upload" className="max-w-9 " />
      <div>
        <p className="text-lg font-medium ">Upload Your Image</p>
        <p className="text-sm text-neutral-500 mt-1">
          Choose any photo from your device — JPG, PNG supported.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10  rounded-lg hover:scale-105 transition-transform duration-300 max-w-sm w-full">
      <img src={assets.remove_bg_icon} alt="AI" className="max-w-9" />
      <div>
        <p className="text-lg font-medium ">AI Removes Background</p>
        <p className="text-sm text-neutral-500 mt-1">
          Our AI engine automatically removes background with precision.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10  rounded-lg hover:scale-105 transition-transform duration-300 max-w-sm w-full">
      <img src={assets.download_icon} alt="Download" className="max-w-9" />
      <div>
        <p className="text-lg font-medium ">Download Image</p>
        <p className="text-sm text-neutral-500 mt-1">
          Get your high-quality transparent image instantly.
        </p>
      </div>
    </div>

  </div>
</div>

  )
}

export default Steps
