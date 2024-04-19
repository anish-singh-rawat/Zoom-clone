'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { sidebarLinks } from '../../constants'
import { cn } from '../lib/utils'

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 text-white p-6 pt-28 max-sm:hidden lg:w-[264px]'>
            <div className='flex flex-1 flex-col gap-6'>
                {
                    sidebarLinks.map((data) => {
                        const isActive = pathName == data.route;
                        return (
                            <Link href={data.route} key={data.label} className={cn('flex gap-4 items-center p-4 rounded-2xl justify-start', {
                                'bg-blue-1': isActive
                            })}>
                                <Image src={data.imageUrl} alt={data.label} width={24} height={24} />
                                <div className='text-lg font-semibold max-lg:hidden'> {data.label}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar