import React from 'react';

const DeleteEmp = ({notShow}) => {
  return(
<>
          <div className='flex justify-center items-center my-20 absolute inset-0'>
          <div className='font-serif max-w-full  p-5 rounded-md bg-white '>
          <h3 className='font-bold text-xl'>Delete Employee</h3> <br/>
                <p className='textepf' > Are you sure want to delete this <br/> Employee? </p><br/>
              <p className='text-right'><pre><a href='#' ><strong onClick={notShow}>Cancel</strong>   <b onClick={notShow}>Delete</b></a></pre></p>
          </div>
          </div>
</>
    );
}
export default DeleteEmp;

