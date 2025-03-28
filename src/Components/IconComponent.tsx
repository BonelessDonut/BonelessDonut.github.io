import { IconType } from "react-icons";
import React from "react";

interface IconStar {
icon: IconType;
}

const IconComponent: React.FC<IconStar> = ({ icon: Icon }): React.ReactElement => {
    const myIcon = <Icon/>
    return myIcon ?? <div></div>;
};

export default IconComponent;