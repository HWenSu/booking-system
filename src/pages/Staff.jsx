import React from 'react'
import useAPIService from '../components/hooks/useAPIService';

const Staff = () => {
  const {data, error} = useAPIService('/modals/staffData.json')

  return (
    <div>
      <ul className='flex flex-col w-[80vw]  mx-auto my-[8vh]'>
        { data && 
        data.staff.map( (s) => {
          return(
          <li key={s.id} className='flex justify-around m-[2vh] p-4 bg-white/50 rounded-lg'>
            <div
            style={{ backgroundImage:`url(${s.url})` }}
            className={`w-[10rem] h-[10rem] rounded-full bg-[length:12rem] bg-no-repeat bg-left`}
            >
            </div>
              <div className='w-[40rem] text-tertiary'>
                <div className='flex items-center'>
                  <h2 className='font-semibold text-[2rem] text-highLight mr-7'>{s.name.toUpperCase()}</h2>
                  <p>{s.gender.toUpperCase()}</p>
                </div>
                
                <div className='flex my-4'>
                  {s.expertise.map((e, index)=> {
                    return <h3 key={index} className='mr-3 p-2 rounded-full bg-primary' >{e.toUpperCase()}</h3>
                  })}
                </div>
                <div className='flex bg-white rounded-full opacity-50 p-5'>
                {Object.keys(s.certificates).map((key, index) => {
                  return(
                    <h3 key={index} className='mr-5'> {key.toUpperCase() + ": " + s.certificates[key]}</h3>
                  ) 
                })}
                </div>
              </div>
             
            </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default Staff