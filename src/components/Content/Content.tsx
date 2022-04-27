import { FC } from 'react';
import './Content.scss'
export const Content:FC<Props> = ({ children }) => (
  <div className="Content">
    {children}
  </div>
)

interface Props {
  children: JSX.Element
}