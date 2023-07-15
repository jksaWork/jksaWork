import Image from "next/image";
const Avatar = () => {
  return (
    <div className="xl:flex hidden  xl:max-w-none">
      <Image
        src="/avatar.png"
        width={678}
        height={737}
        alt="Avatar Image"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
