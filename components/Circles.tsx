import Image from "next/image";
const Circles = () => {
  return (
    <div
      className="w-[200px] xl:w-[300px] -bottom-2 -right-16 mix-blend-color-dodge
    animate-pluse duration-75 z-10 absolute
    "
    >
      <Image
        src="/circles.png"
        className="w-full h-full"
        alt="circle"
        height={200}
        width={200}
      />
    </div>
  );
};

export default Circles;
