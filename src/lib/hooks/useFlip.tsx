import { useRef } from 'react'

interface FlipOptions {
  prevRect: DOMRect
  finalRect: DOMRect
}

const getFlipProperties = ({ prevRect, finalRect }: FlipOptions) => {
  return {
    transforms: [
      {
        transform: `
                translateX(${prevRect.left - finalRect.left}px)
                translateY(${prevRect.top - finalRect.top}px)
                scale(${prevRect.width / finalRect.width})
              `,
      },
      {
        transform: `
                translateX(0)
                translateY(0)
                scale(1)
              `,
      },
    ],
    options: {
      // TODO normalise MS
      //   duration: 500,
      duration: 2000,
      easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
    },
  }
}

const useFlip = () => {
  const firstRef = useRef<HTMLElement>(null)
  const secondRef = useRef<HTMLElement>(null)

  const flip = () => {
    if (!firstRef.current || !secondRef.current) return

    const prevRect = firstRef?.current?.getBoundingClientRect()!
    const finalRect = secondRef.current.getBoundingClientRect()
    const { transforms, options } = getFlipProperties({ prevRect, finalRect })

    secondRef.current.animate(transforms, options)
  }

  console.log('FIRST', firstRef, 'SECOND', secondRef)
  const flipBack = () => {
    if (!firstRef.current || !secondRef.current) return

    const prevRect = secondRef.current.getBoundingClientRect()
    const finalRect = firstRef.current?.getBoundingClientRect()!

    const { transforms, options } = getFlipProperties({
      prevRect,
      finalRect,
    })

    firstRef.current.animate(transforms, options)
  }

  return { firstRef, secondRef, flip, flipBack }
}

export default useFlip
