import React from "react";
import Link from "next/link";
import { Edit } from "../../../constants/icons";

const EditPagesMenu = () => {
  return (
    <ul className='leading-10 -ml-5'>
      <li className='hover:text-primary transition-all w-[180px]'>
        <a
          href='/institute-settings/page-customization/edit-page/home'
          target='_blank'>
          <span className='flex justify-start items-center gap-3 cursor-pointer group'>
            <p>1. Home</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/about-us'
          target='_blank'>
          <span className='flex justify-start items-center gap-3 cursor-pointer group'>
            <p>2. About Us</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/contact'
          target='_blank'>
          <span className='flex justify-start items-center gap-3 cursor-pointer group'>
            <p>3. Contact</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/payment-details'
          target='_blank'>
          <span className='flex justify-start items-center gap-3 cursor-pointer group'>
            <p>4. Payment Details </p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default EditPagesMenu;
