import Button from 'components/button'
import { CSSProperties, useEffect, useId, useRef, useState } from 'react'

const ButtonCollection = ({ buttons, activeIndex, handleClick }) => {
  const id = useId()
  const collectionRef = useRef<HTMLDivElement>(null)
  const [backgroundPos, setBackgroundPos] = useState({
    width: 0,
    height: 0,
    left: 0,
  })

  useEffect(() => {
    const activeEl = collectionRef?.current?.children[activeIndex]

    if (activeEl) {
      const resizeObserver = new ResizeObserver(entries => {
        const activeRect = activeEl.getBoundingClientRect()
        const collectionRect = collectionRef?.current?.getBoundingClientRect()!

        for (const entry of entries) {
          const { inlineSize, blockSize } = entry.borderBoxSize[0]

          const relativePos = {
            width: inlineSize,
            height: blockSize,
            left: activeRect.left - collectionRect.left,
          }

          setBackgroundPos(relativePos)
        }
      })

      resizeObserver.observe(activeEl)

      return () => resizeObserver.unobserve(activeEl)
    }
  }, [activeIndex])

  const style = {
    '--left': `${backgroundPos.left}px`,
    '--width': `${backgroundPos.width}px`,
    '--height': `${backgroundPos.height}px`,
  } as CSSProperties

  return (
    <div ref={collectionRef} className='buttonCollection' style={style}>
      {buttons.map(({ buttonName, text }, index) => {
        const isActive = activeIndex === index
        return (
          <Button key={id + index} name={buttonName} isActive={isActive} handleClick={handleClick}>
            {text}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonCollection
