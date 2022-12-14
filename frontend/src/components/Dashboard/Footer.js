import React from 'react';
import { AiFillLike, AiOutlineLogout, AiTwotoneStar } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="col-span-full bg-white  shadow-2xl col-start-3 col-end-13  flex-col h-full  w-full flex p-4 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2">
        <div className="flex flex-col">
          <h2 className="flex cursor-pointer">
            <AiOutlineLogout className="mt-1 text-blue-600" />
            Logout
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="flex">
            {' '}
            <MdModeComment className="text-blue-600 mt-1  text-xl" />
            200
          </h2>
          <span className="text-xs text-gray-600 ">Comments trips</span>
        </div>
        <div className="flex flex-col">
          <h2 className="flex">
            <AiFillLike className="text-blue-600 mt-0 text-xl" />
            150
          </h2>
          <span className="text-xs text-gray-600 ">Likes accommodation</span>
        </div>
        <div className="flex flex-col">
          <h2 className="flex">
            <AiTwotoneStar className="text-yellow-500  mt-1 text-lg" />
            300
          </h2>
          <span className="text-xs text-gray-600 ">Rate accommodation</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-end gap-2 mt-2  text-gray-500 h-full">
        <div />
        <div className="text-sm">&copy; Barefoot nomad all right reserved </div>
        <div className="text-sm pl-3">
          <Link to="/dashboard/profile">Privacy</Link>
        </div>
        <div className="text-sm">
          <Link to="/dashboard/profile"> Terms and services</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
