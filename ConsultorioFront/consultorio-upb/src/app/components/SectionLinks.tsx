export const SectionLinks:any = ( props:any ) => {
  const {section,parentClass}=props
  return (
     <a className={parentClass} href={`#${section}`} >
      <h3>{section}</h3>
     </a>
     
    
  );
};
