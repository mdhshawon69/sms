import React from "react";

const Maps = () => {
  return (
    <iframe
      className='w-full mx-auto h-[70vh]'
      width='544'
      height='500'
      id='gmap_canvas'
      src='https://maps.google.com/maps?q=zero-point%20rajshshai&t=&z=13&ie=UTF8&iwloc=&output=embed'
      frameborder='0'
      scrolling='no'
      marginheight='0'
      marginwidth='0'
    />
  );
};

export default Maps;
