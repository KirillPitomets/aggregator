import React, { FC, PropsWithChildren } from 'react'
// ==== Types ====
import { ITitleProps } from './Title.props'
// ==== Styles ====
import cl from './Title.module.scss'
import cn from 'classnames'

const Title: FC<PropsWithChildren<ITitleProps>> = ({
  level = 1,
  subTitleVariant = 1,

  isSubtitle,
  children,
  className,
}) => {
  // ====  subtitle ====
  if (isSubtitle) {
    return subTitleVariant === 1 ? (
      <h3 className={cn(cl['subtitle'], cl['subtitle_gray'], className)}>{children}</h3>
    ) : (
      <h3 className={cn(cl['subtitle'], className)}>{children}</h3>
    )
  }

  // ==== Main Title ====
  return level === 1 ? (
    <h1 className={cn(cl.title, className)}>{children}</h1>
  ) : (
    <h2 className={cn(cl.title, cl.title_h2, className)}>{children}</h2>
  )
}

export default Title
