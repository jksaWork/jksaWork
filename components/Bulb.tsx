import Image from "next/image";
const Bulb = () => {
  return (
    <div className="rotate-12 mix-blend-color-dodge duration-75 z-10 animate-pulse">
      <Image src="/bulb.png" alt="" width={260} height={200} />
    </div>
  );
};

export default Bulb;
