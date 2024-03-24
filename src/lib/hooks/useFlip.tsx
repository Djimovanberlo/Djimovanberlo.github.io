import { useRef } from 'react'

interface FlipOptions {
  prevRect: DOMRect
  finalRect: DOMRect
}

const getFlipProperties = ({ prevRect, finalRect }: FlipOptions) => {
  const dx = prevRect.left - finalRect.left
  const dy = prevRect.top - finalRect.top
  const dw = prevRect.width / finalRect.width
  const dh = prevRect.height / finalRect.height

  console.log('DW', dw, 'DH', dh)
  // TODO fix scale
  return {
    transforms: [
      {
        transform: `
                translateX(${dx}px)
                translateY(${dy}px)
                scale(${dw}, ${dh})
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
    console.log('FLIP H PREV', firstRef, 'H FIN', secondRef)
    const { transforms, options } = getFlipProperties({ prevRect, finalRect })

    secondRef.current.animate(transforms, options)
  }

  const flipBack = () => {
    if (!firstRef.current || !secondRef.current) return

    const prevRect = secondRef.current.getBoundingClientRect()
    const finalRect = firstRef.current?.getBoundingClientRect()!
    console.log('FLIP BACK H PREV', secondRef, 'H FIN', firstRef)

    const { transforms, options } = getFlipProperties({
      prevRect,
      finalRect,
    })

    firstRef.current.animate(transforms, options)
  }

  return { firstRef, secondRef, flip, flipBack }
}

export default useFlip
