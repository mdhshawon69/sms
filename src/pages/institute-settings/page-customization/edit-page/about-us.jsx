import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  Banner,
  Footer,
  InfoSection,
  PrincipalSection,
  StatisticsSection,
} from "../../../../components";
import { uiActions } from "../../../../redux/store/slices/uiSlices";

const AboutUs = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  if (router.asPath.includes("/edit-page")) {
    dispatch(uiActions.setLayout());
  }

  return (
    <div>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          imageAlter: false,
          heightAlter: true,
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
