import React from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='fixed inset-0 z-30 flex justify-center items-center'>
      <Grid
        height='80'
        width='80'
        color='#1eb3a6'
        ariaLabel='grid-loading'
        radius='12.5'
        wrapperStyle={{}}
        wrapperClass='m-auto'
        visible={true}
      />
    </div>
  );
};

export default Loading;
