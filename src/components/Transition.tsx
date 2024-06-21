import React, { useLayoutEffect, useRef } from 'react'
import { DefaultConfig } from '../utils/constant'
import { TransitionProps } from '../type'

const enum AnimationStep {
  Enter,
  Exit,
}

/**
 * The Transition component animates the entering and exiting of a component.
 * @param props - The properties of the Transition component.
 * @returns The JSX element for the Transition component.
 * @example
 * ```tsx
 * <Transition animation="bounce" duration={500} in={open}>
 *    <div>Hello</div>
 * </Transition>
 * ```
 */
const Transition: React.FC<TransitionProps> = ({
  animation,
  duration = 300,
  children,
  in: inProp,
  nodeRef,
  onEntered,
  onExited,
}) => {
  const animationStep = useRef(AnimationStep.Enter)
  const enterClassName = `${DefaultConfig.CSS_NAMESPACE}_${animation}-enter`
  const leaveClassName = `${DefaultConfig.CSS_NAMESPACE}_${animation}-exit`

  useLayoutEffect(() => {
    const node = nodeRef.current!

    if (!node) return

    const handleEntered = (e: AnimationEvent) => {
      if (e.target !== node) return
      node.classList.remove(enterClassName)
      node.removeEventListener('animationend', handleEntered)
      if (onEntered) onEntered()
    }

    const startEnterAnimation = () => {
      node.classList.remove(leaveClassName)
      node.classList.add(enterClassName)
      node.style.animationDuration = `${duration}ms`
      node.addEventListener('animationend', handleEntered)
    }

    if (inProp) {
      startEnterAnimation()
    }
  }, [inProp, onEntered, duration, enterClassName, leaveClassName, nodeRef])

  useLayoutEffect(() => {
    const node = nodeRef.current!

    if (!node) return

    const handleExited = (e: AnimationEvent) => {
      if (e.target !== node) return
      node.classList.remove(leaveClassName)
      node.removeEventListener('animationend', handleExited)
      if (onExited) onExited()
    }

    const startLeaveAnimation = () => {
      animationStep.current = AnimationStep.Exit
      node.classList.remove(enterClassName)
      node.classList.add(leaveClassName)
      node.style.animationDuration = `${duration}ms`
      node.addEventListener('animationend', handleExited)
    }

    if (!inProp) {
      startLeaveAnimation()
    }
  }, [inProp, onExited, duration, enterClassName, leaveClassName, nodeRef])

  return <>{children}</>
}

export default Transition
