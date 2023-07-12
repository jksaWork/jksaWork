import Image from "next/image";
const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge a-10 w-[200px] xl:w-[400px]">
      <Image src="/top-left-img.png" alt="top Image" height={400} width={400} />
    </div>
  );
};

export default TopLeftImg;
