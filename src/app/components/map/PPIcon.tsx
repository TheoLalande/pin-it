import React from "react";
import Image from "next/image";

type propsType = {
  color: string;
  iconName: string;
};

const PPIcon = (props: propsType) => {
  return (
    <div
      className="inline-block rounded-full p-[2px] m-10 border-[1px] border-white"
      style={{ backgroundColor: props.color }}
    >
      <Image
        alt="carabiner"
        src={`/assets/icons/${props.iconName}.svg`} // Chemin relatif à public
        width={21}
        height={21}
      />
    </div>
  );
};

export default PPIcon;
