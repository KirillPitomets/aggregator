import React, {FC, PropsWithChildren} from 'react'
// ==== Types ====
import { IInfoTextProps } from "./InfoText.props"
// ==== Styles ====
import cl from "./InfoText.module.scss"
import cn from 'classnames'

const InfoText:FC<PropsWithChildren<IInfoTextProps>> = ({ className, children }) =>{
  return (
    <span className={cn(cl.text, className)}>
      {children}
    </span>
    )
}

export default InfoText
