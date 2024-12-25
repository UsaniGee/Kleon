import React from 'react'

const Button = (props) => {
  return (
    // <button className={`p-3 w-full bg-[#8D0B41] text-white dark:text-[#D6CFB4] ${props.className}`}>
    //   {props.title}
    // </button>

    <button
    className={`p-3 w-full z-10 relative text-[#40271E] px-[0.5em] py-[0.5em] bg-[#D9D9D9] overflow-hidden transition-[color] duration-[0.4s] ease-in-out
    before:content-[" "] before:-z-10 before:absolute before:inset-0 before:scale-0 before:bg-[#8D0B41] before:origin-center before:transition-[transform] before:duration-[0.4s] before:ease-in-out
    hover:cursor-pointer hover:text-[#D9D9D9] hover:before:scale-[2] ${props.className}`}
>
    {`${props.title}`}
</button>
  )
}

export default Button
