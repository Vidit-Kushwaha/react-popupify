import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { DefaultConfig } from '../utils/constant'
import { TransitionProps } from '../type'

const Transition: React.FC<TransitionProps> = ({
  animation,
  duration = 300,
  children,
  in: inProp,
  onEntered,
  onExited,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const animationStep = useRef<'enter' | 'exit'>('enter')
  const enterClassName = `${DefaultConfig.CSS_NAMESPACE}_${animation}-enter`
  const leaveClassName = `${DefaultConfig.CSS_NAMESPACE}_${animation}-exit`

  useLayoutEffect(() => {
    const node = nodeRef.current!

    const handleEntered = (e: AnimationEvent) => {
      if (e.target !== node) return
      node.classList.remove(enterClassName)
      node.removeEventListener('animationend', handleEntered)
      if (onEntered) onEntered()
    }

    const startEnterAnimation = () => {
      node.classList.add(enterClassName)
      node.style.animationDuration = `${duration}ms`
      node.addEventListener('animationend', handleEntered)
    }

    if (inProp) {
      startEnterAnimation()
    }
  }, [inProp])

  useEffect(() => {
    const node = nodeRef.current!

    const handleExited = (e: AnimationEvent) => {
      if (e.target !== node) return
      node.classList.remove(leaveClassName)
      node.removeEventListener('animationend', handleExited)
      if (onExited) onExited()
    }

    const startLeaveAnimation = () => {
      animationStep.current = 'exit'
      node.classList.add(leaveClassName)
      node.style.animationDuration = `${duration}ms`
      node.addEventListener('animationend', handleExited)
    }

    if (!inProp) {
      startLeaveAnimation()
    }
  }, [inProp])

  return <div ref={nodeRef}>{children}</div>
}

export default Transition
