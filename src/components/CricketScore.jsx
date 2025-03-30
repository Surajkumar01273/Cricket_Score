import axios from 'axios';
import React, { useEffect, useState } from 'react';

const apiUrl = 'https://api.cricapi.com/v1/cricScore?apikey=7cd16b20-1004-4627-af34-ea2ab3ce6661';

function CricketScore() {
  const [result, setResult] = useState([]);
  console.log('state result', result);

  const fetchCricketScore = async () => {
    try {
      const response = await axios.get(apiUrl);
      const value = response.data;

      setResult(value.data);
      console.log('response', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCricketScore();
  }, []);

  // console.log(result);

  return (
    <>
    {/* bg-gradient-to-b from-blue-500 to-indigo-600 */}
      <div className=' max-w-screen-2xl min-h-screen bg-gray-600'>
        <div className='flex items-center justify-center pt-5 px-2 space-x-2 md:gap-4'>
          <input
            type='text'
            placeholder='Search team...'
            className='w-[4-%] text-zinc-800 bg-white font-semibold p-2 border border-indigo-200 outline-none rounded-md'
          />
          <button className='px-6 py-2 rounded-md cursor-pointer outline-none border-none text-white bg-blue-700 hover:bg-zinc-200 hover:text-black duration-300 tracking-tight'>
            Search
          </button>
        </div>

        <div className='w-screen h-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-5 md:px-6'>
          {result.length > 0 ? (
            result.map((match, index) => {
              return (
                <div
                  key={index}
                  className='card bg-zinc-300 shadow-md md:rounded-md px-6'
                >
                  <h2 className='text-lg font-medium'>{match.series}</h2>
                  <h4 className='opacity-70 text-sm my-2'>{match.matchType.toUpperCase()}</h4>
                  <div className='flex gap-5 items-center justify-between'>
                    <div>
                      <img
                        className='h-28 rounded-md object-cover object-center'
                        src={match.t1img}
                        alt=''
                      />
                      <h2 className='text-lg mt-2'>{match.t1}</h2>
                      <h4 className='opacity-70 text-sm font-medium'>{match.t1s}</h4>
                    </div>

                    <div>
                      <img
                        className='h-28 rounded-md object-cover object-center'
                        src={match.t2img}
                        alt=''
                      />
                      <h2 className='text-lg mt-2'>{match.t2}</h2>
                      <h4 className='opacity-70 text-sm font-medium'>{match.t2s}</h4>
                    </div>
                  </div>
                  <p className='text-black my-4'>Status : <span className='text-green-600'>{match.status}</span></p>
                </div>
              );
            })
          ) : (
            <h2 className='text-center text-2xl ml-[400px]'>No Result Found</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default CricketScore;
