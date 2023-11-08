'use client'
import { ChevronTop } from "@/utils/svgIcons";

export const ScrollTop = () => {
//   const [showButton, setShowButton] = useState(false)
//   useEffect(() => {
//     const handleScrollButtonVisiblity = () => {
//       window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
//     };
//     window.addEventListener('scroll', handleScrollButtonVisiblity);
//     return () =>
//       window.removeEventListener('scroll', handleScrollButtonVisiblity);
//   }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button onClick={() => goToTop()} className="animate-bounce bg-mustered600 text-white p-3 rounded-3xl absolute right-8 top-[-25px] z-[99]">
        {ChevronTop}
      </button>
    </>
  )
}
