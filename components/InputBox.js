/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { session, useSession } from 'next-auth/client'
import React from 'react'
import Image from 'next/image'
import { VideoCameraIcon, EmojiHappyIcon, CameraIcon } from '@heroicons/react/solid';

function InputBox() {
    const [session] = useSession();


const sendPost = e => {
e.preventDefault();
console.log(e.target.value)
};

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout='fixed'
                />
                <form className='flex flex-1'>
                    <input 
                    type='text'
                     placeholder={`Whats poppin ${session.user.name}`}
                     className='rounded-full h-12 bg-gray-50 flex-grow px-5 focus:outline-none'
                     >
                     </input>
                     <button  type='submit' hidden onClick={sendPost}>Submit</button>
                </form>
            </div>

            <div>

                <div>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                    <div>
                        <EmojiHappyIcon className='h-7 text-yellow-300'/>
                        <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                    </div>

                    <div>
                        <CameraIcon className='h-7 text-yellow-300'/>
                        <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                        </div>                    


            </div>
        </div>
    )
}

export default InputBox
