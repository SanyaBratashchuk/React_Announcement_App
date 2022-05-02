import { memo } from 'react';
import './Content.scss';
export const Content = memo<Props>(({ children }) => (
  <div className="Content">
    {children}
  </div>
))

interface Props {
  children: JSX.Element
}