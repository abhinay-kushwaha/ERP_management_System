import React from 'react';

const DeviceDelete = ({notShow}) => {
  return(
<>
          <div className='flex justify-center items-center my-20 absolute inset-0'>
          <div className='font-serif max-w-full w-60 p-5 rounded-md bg-white'>
          <h3 className='font-bold text-2xl'>Delete Device</h3> <br/>
                <p className='textepf' > Are you sure want to delete this <br/> Device? </p><br/>
              <p className='text-right font-bold'><pre onClick={notShow}><a href='#'>Cancel    Delete</a></pre></p>
          </div>
          </div>
</>
    );
}
export default DeviceDelete;

