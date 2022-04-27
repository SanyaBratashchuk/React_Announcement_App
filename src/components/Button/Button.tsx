import { FC, useState } from "react";
import "./Button.scss"
export const Button: FC<Props> = ({
  title,
  width = 80,
  height = 50,
  backgroundColor = "#28a9bf",
  hoverbgColor = backgroundColor,
  activebgColor = backgroundColor,
  hoverScale = 1.0,
  borderRadius = 0,
  handleClick,
}) => {

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={(event) => {
        setIsHover(false)
        setIsActive(false)
      }}
      onMouseDown={(event) => {
        setIsHover(false)
        setIsActive(true)
      }}
      onMouseUp={(event) => {
        setIsActive(false)
        setIsHover(true)
      }}

      onBlur={() => {
        setIsActive(false)
      }}

      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: isHover ? hoverbgColor : isActive ? activebgColor : backgroundColor,
        transform: isHover ? `scale(${hoverScale})` : undefined,
        fontSize: isHover ? `${hoverScale}rem` : `1rem`,
        borderRadius: `${borderRadius}px`,
      }}
      className="Button"
    >

      {title}
    </button>
  )
}

interface Props {
  title: string,
  width?: number,
  height?: number,
  activeColor?: string,
  backgroundColor?: string,
  hoverbgColor?: string,
  focusColor?:string,
  hoverScale?: number,
  borderRadius?: number,
  activebgColor?:string,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}