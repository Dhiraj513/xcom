import React from 'react';

const header = () => {
  return (
    <div className='w-full flex justify-between bg-gray-200 px-5'>
<h1 className='text-x1'> XECOM </h1>
<ul className='flex space-x-3'>
    <li> Home</li>
    <li>Mens</li>
    <li>Women</li>
    <li>Kids</li>
</ul>
    </div>
  )
}

export default header