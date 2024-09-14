import React from 'react'
import Image from "next/image";
import usePageStore from '../_utils/usePageStore';
import { PagesEnum } from '../_utils/pageEnums';

const AboutPageToggler = () => {
  const setSelectedPage = usePageStore((state) => state.setSelectedPage);
  const selectedPage = usePageStore((state) => state.selectedPage);

  const iconClasses = (page: PagesEnum) =>
    `relative w-6 h-6 mt-6 cursor-pointer ${
      selectedPage === page ? 'opacity-100' : 'opacity-40'
    }`;
  return (
    <div className="w-16 h-full border border-transparent border-r-borderColor flex flex-col items-center">
          <div
            className={iconClasses(PagesEnum.PROFESSIONAL_INFO)}
            onClick={() => setSelectedPage(PagesEnum.PROFESSIONAL_INFO)}
          >
            <Image
              src="/professionalInfo.svg"
              alt="Professional Info"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div
            className={iconClasses(PagesEnum.PERSONAL_INFO)}
            onClick={() => setSelectedPage(PagesEnum.PERSONAL_INFO)}
          >
            <Image
              src="/personalnfo.svg"
              alt="Personal Info"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div
            className={iconClasses(PagesEnum.HOBBIES)}
            onClick={() => setSelectedPage(PagesEnum.HOBBIES)}
          >
            <Image
              src="/hobbiesIcon.svg"
              alt="Hobbies"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
  )
}

export default AboutPageToggler