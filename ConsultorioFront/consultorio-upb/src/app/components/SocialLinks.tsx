import Image from 'next/image';


export const SocialLinks = (props:any) => {
    const { social, itemClass,icon } = props;
    // console.log("🚀 ~ file: SocialLinks.tsx:6 ~ SocialLinks ~ icon:", icon)
    // console.log("🚀 ~ file: SocialLinks.tsx:6 ~ SocialLinks ~ social:", social)
    // console.log(itemClass);
    
    return (
      <li className='mx-3'>
        <a
          href={`${social}`}
          target="_blank"
        >
          <Image src={icon} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                     alt="Descripción de la imagen"
                     width={35}
                     height={35}
               />
        </a>
      </li>
    );
  };