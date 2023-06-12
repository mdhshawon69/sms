import { useRouter } from "next/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  Banner,
  InfoSection,
  Table,
  StatisticsSection,
  PrincipalSection,
  LatestNews,
  Footer,
} from "../../../../components";
import { uiActions } from "../../../../redux/store/slices/uiSlices";

const Home = () => {
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
          btn: true,
        }}
        navPath={true}
        subPath={true}
      />

      <LatestNews />
      <Table />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
      <Footer />

      <button className='py-3 px-12 text-white font-semibold rounded fixed right-5 bottom-5 bg-yellow z-50'>
        Save
      </button>
    </div>
  );
};

export default Home;
