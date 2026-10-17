import React, { CSSProperties } from "react";
import styles from "./MouseScroll.module.css";

interface MouseScrollProps {
  text?: string;
  colorBg?: string;
  colorOutline?: string;
  colorOutlineFade?: string;
  className?: string;
}

export default function MouseScroll({
  text = "Scroll",
  colorBg,
  colorOutline,
  colorOutlineFade,
  className = "",
}: MouseScrollProps) {
  const customStyles: CSSProperties = {
    ...(colorBg ? { "--colorBg": colorBg } : {}),
    ...(colorOutline ? { "--colorOutline": colorOutline } : {}),
    ...(colorOutlineFade ? { "--colorOutlineFade": colorOutlineFade } : {}),
  } as CSSProperties;

  return (
    <div className={`${styles.mouseWrap} ${className}`} style={customStyles}>
      <div className={styles.mouse} />
      {text && <p className={styles.label}>{text}</p>}
    </div>
  );
}
