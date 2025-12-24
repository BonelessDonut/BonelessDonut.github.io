import React, { useState } from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri';

interface Props {
  inner: React.ReactNode;
  outer: React.ReactNode;
}

const Accordian: React.FC<Props> = ( {outer, inner} ): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <div className="w-full">
     <input
       id="expandCollapse"
       checked={isOpen}
       type="checkbox"
       className="peer sr-only"
     />
     <label
       htmlFor="expandCollapse"
       className={
         "w-full flex justify-center hover:to-slate-700 items-center text-lg text-slate-100 bg-gradient-to-t from-gray-600 to-slate-500 transition-colors duration-1000 ease-in-out"
        }
       onClick={() => setIsOpen(!isOpen)}
     >
       {outer}
       <RiArrowDropDownLine
         height={40}
         width={40}
         className={`ml-4 ${ isOpen ? "rotate-180" : ""}`}         
       />
     </label>
     <div
       className={
          "overflow-hidden h-0 text-slate-100 bg-gray-800 peer-checked:h-[11vh] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out "
       }
     >
       {inner}
     </div>
   </div>
 );
};

export default Accordian;
