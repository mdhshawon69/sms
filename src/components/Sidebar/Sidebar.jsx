import React from "react";
import Link from "next/link";
import { ArrowRight, Grid, List, Peoples } from "../../constants/icons";
import Image from "next/image";
import images from "../../assets";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState("");

  return (
    <div className='pt-6 h-full w-52 bg-sidebar text-center fixed left-0 top-0 z-20 overflow-hidden'>
      {/* SMS Admin panel logo */}
      <a className='mb-8 -ml-4 block cursor-pointer'>
        <Link href='/'>
          <Image
            src={images.logo}
            alt='sms_logo'
            width={100}
            height={40}
            onClick={() => setShowSubMenu("/")}
          />
        </Link>
      </a>
      <ul className='text-md text-white text-left w-full font-[500]'>
        {/* Dashboard Link-Item */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("dashboard")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-10 ${
              router.asPath === "/" ? "bg-[#1EB3A6]" : ""
            }`}>
            <Grid className='w-[18px] h-[18px]' />
            <Link href='/'>Dashboard</Link>
          </span>
        </li>
        {/* Admission Link-Item */}
        <li
          className='w-full relative'
          onClick={() => setShowSubMenu("admission")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-10 cursor-pointer ${
              router.asPath.includes("/admission") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Peoples className='w-[18px] h-[18px] -mt-[2.5px]' />
            <p>Admission</p>
          </span>

          {/* Admission Submenu */}
          <ul
            className={`text-xs w-full text-left font-[500] ${
              showSubMenu === "admission" ? "block" : "hidden"
            }`}>
            {/* Add new admission submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/admission/new-admission")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/admission/new-admission'>Add new admission</Link>
              </span>
            </li>

            {/* Admission payment submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/admission/admission-payment")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/admission/admission-payment'>
                  Admission payment
                </Link>
              </span>
            </li>

            {/* Print admit card submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/admit-card"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/admission/admit-card'>Print admit card</Link>
              </span>
            </li>

            {/* Exam-Seat-Plan submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/exam-seat-plan"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/admission/application-form'>Exam seat plan</Link>
              </span>
            </li>
          </ul>
        </li>
        {/* Class-Routine Link Item */}
        <li className='w-full' onClick={() => setShowSubMenu("class-routine")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-4 ${
              router.asPath.includes("/class-routine") ? "bg-[#1EB3A6]" : ""
            }`}>
            <List className='w-[18px] h-[18px]' />
            <Link href='/class-routine'>Class Routine</Link>
          </span>
        </li>

        {/* Exam-Routine Link Item */}
        <li
          className='w-full group cursor-pointer'
          onClick={() => setShowSubMenu("exam-routine")}>
          <span
            className={`flex justify-center items-center gap-4 ${
              router.asPath.includes("/exams") ? "bg-[#1EB3A6]" : ""
            }`}>
            <span
              className={`flex justify-center items-center gap-2 py-3 ml-6`}>
              <Image src={images.examIcon} />
              <p>Exam Routine</p>
            </span>
            <ArrowRight className='w-5 h-5 mt-[3px]' />
          </span>

          {/* Exam-Routine Submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] ${
              showSubMenu === "exam-routine" ? "block" : "hidden"
            }`}>
            {/* Exam-Routine submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/exams/exam-routine")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/exams/exam-routine'>Exam Routine</Link>
              </span>
            </li>

            {/* Admit-card submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/exams/admit-card")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/exams/admit-card'>Admit card</Link>
              </span>
            </li>

            {/* Mark distribution submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/exams/mark-distribution")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/exams/mark-distribution'>Mark distribution</Link>
              </span>
            </li>
          </ul>
        </li>

        {/* Results Link Item */}
        <li
          className='w-full group cursor-pointer'
          onClick={() => setShowSubMenu("results")}>
          <span
            className={`flex justify-center items-center gap-4 ${
              router.asPath.includes("/results") ? "bg-[#1EB3A6]" : ""
            }`}>
            <span
              className={`flex justify-center items-center gap-2 py-3 -ml-8`}>
              <Image src={images.resultIcon} />
              <p>Results</p>
            </span>
            <ArrowRight className='w-5 h-5 mt-[3px]' />
          </span>

          {/* Results Submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] ${
              showSubMenu === "results" ? "block" : "hidden"
            }`}>
            {/* Generate Result submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/results/generate-result")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/results/generate-result'>Generate Result</Link>
              </span>
            </li>

            {/* Marksheet submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/results/create-marksheet")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/results/create-marksheet'>Marksheet</Link>
              </span>
            </li>

            {/* Promotion submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/results/student-promotion")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/results/student-promotion'>Promotion</Link>
              </span>
            </li>
          </ul>
        </li>
        {/* //Payment item link */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("payment")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-[50px] ${
              router.asPath.includes("/payment") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Image src={images.paymentSvg} />
            <Link href='/payment'>Payment</Link>
          </span>
        </li>

        {/* Notice item link */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("notice")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-[68px] ${
              router.asPath.includes("/notice") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Image src={images.noticeSvg} />
            <Link href='/notice'>Notice</Link>
          </span>
        </li>

        {/* Student Info item link */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("student-info")}>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-[56px] cursor-pointer ${
              router.asPath.includes("/student/") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Peoples className='w-[18px] h-[18px] -mt-[2.5px]' />
            <span>Student</span>
          </span>

          {/* Student info submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] ${
              showSubMenu === "student-info" ? "block" : "hidden"
            }`}>
            {/* Student information submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/student/student-information")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/student/student-information'>
                  Student Information
                </Link>
              </span>
            </li>

            {/* Assign subject submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/student/assign-subject")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/student/assign-subject'>Assign Subject</Link>
              </span>
            </li>
          </ul>
        </li>

        {/* Academic item link */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("academic")}>
          <span
            className={`flex justify-center items-center gap-1 py-3 -ml-[43px] cursor-pointer ${
              router.asPath.includes("/academic") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Image src={images.principalIcon} />
            <span>Academic</span>
          </span>

          {/* Academic submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] ${
              showSubMenu === "academic" ? "block" : "hidden"
            }`}>
            {/* principal info submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/academic/principal-info")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/academic/principal-info'>Principal info</Link>
              </span>
            </li>

            {/* teachers info submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/academic/teachers-info")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/academic/teachers-info'>Teacher's info</Link>
              </span>
            </li>

            {/* staff info submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath.includes("/academic/staff-info")
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/academic/staff-info'>Staff info</Link>
              </span>
            </li>
          </ul>
        </li>

        {/* Institute-settings item link */}
        <li
          className='w-full cursor-pointer'
          onClick={() => setShowSubMenu("institute-settings")}>
          <span
            className={`flex justify-center items-center gap-1 py-3 -mr-[16px] cursor-pointer ${
              router.asPath.includes("/institute-settings")
                ? "bg-[#1EB3A6]"
                : ""
            }`}>
            <Image src={images.settingsIcon} />
            <span>Institute Settings</span>
          </span>

          {/* Institute-settings submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] ${
              showSubMenu === "institute-settings" ? "block" : "hidden"
            }`}>
            {/* Manage-access submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/institute-settings/manage-access"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/institute-settings/manage-access'>
                  Manage Access
                </Link>
              </span>
            </li>

            {/* General-settings submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/institute-settings/general-settings"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/institute-settings/general-settings'>
                  General Settings
                </Link>
              </span>
            </li>

            {/* Classes and Sections submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/institute-settings/classes-and-sections"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/institute-settings/classes-and-sections'>
                  Classes and Sections
                </Link>
              </span>
            </li>

            {/* Page customization submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/institute-settings/page-customization"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/institute-settings/page-customization'>
                  Page Customization
                </Link>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
