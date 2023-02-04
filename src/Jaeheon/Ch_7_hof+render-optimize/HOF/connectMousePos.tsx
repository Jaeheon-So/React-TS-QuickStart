import React, { useEffect, useState } from "react";

export type PositionType = {
  x: number;
  y: number;
};

export const connectMousePos = (TargetComponent: React.ComponentType) => {
  return (props: any) => {
    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

    useEffect(() => {
      const onMove = (e: MouseEvent) => setPosition({ x: e.pageX, y: e.pageY });
      addEventListener("mousemove", onMove);
      return () => {
        removeEventListener("mousemove", onMove);
      };
    }, []);

    return <TargetComponent {...props} position={position} />;
  };
};