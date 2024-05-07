import React from 'react';
import room from '../src/assets/room.jpeg';


 const Dashboard = () => {
  return(
       <>
       <div className='font-serif'>
         <div>
            <h2 className='font-bold text-2xl '>Dashboard</h2> 
                  <div className='flex justify-between items-center'>
                    <div>
                    <h4>Today Meetings....</h4>
                    </div>
                      <div >
                        <input type="date" className='border-2 rounded-md px-1 border-black' />
                      </div>
                  </div> 
                   <br/>
            
            
            <div className='flex flex-wrap  justify-start'>
           
            <div className='w-full max-w-96  m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>

             {/* 2nd  */}

             <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>


            {/* 3rd */}
            <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>




             <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>



             <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>



             <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>



             <div className='w-full max-w-96 m-1 p-0.5 border-2 border-black rounded-sm'>
              <div className='bg-blue-100'>
                        <div className='flex justify-between  '>
                                  <div className=''>
                                            <div>
                                              <img src={room} alt='logo' className='hidden md:block md:w-16 h-14' />
                                            </div>
                                        <div className='roomno'>
                                        Room no.1
                                        </div>
                                  </div>
                                  <div>
                                      <input type='date' className='w-5'/>
                                  </div>
                        </div>
                    <div className='flex justify-between'>
                    <div>Total Meetings</div>
                    <div>
                       <p className='dasnum'><b>08</b></p>
                    </div>
                    </div>
              </div>
             </div>


            </div>


         </div>
       </div>
       </>
  );
 }




export default Dashboard;
