// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// componentd
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full pl-10 ">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 '>
          {/* logo */}
          <Link href={'/'}> 
          <Image 
            src={'/logo.svg'}
            width={230}
            height={48}
            alt=''
            priority={true}
          /> 
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
