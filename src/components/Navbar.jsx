import MobileNav from  './MobileNav'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={'/'} className='flex items-center gap-1'>
        <Image src="/icons/logo.svg" width={32} height={32} alt='yomo logo' className='max-sm:size-10'/>
        <div className='text-[26px] font-extrabold text-white max-sm:hidden'> 
        YOOM
        </div>
      </Link>
      <div className="flex-between gap-5">
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      */}

        <MobileNav /> 
      </div>
    </div>
  )
}

export default Navbar