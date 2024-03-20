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
      duration: 500,
      easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
    },
  }
}

export default getFlipProperties
