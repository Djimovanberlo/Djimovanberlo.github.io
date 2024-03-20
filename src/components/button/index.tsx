export const HoverButton = ({
  className = '',
  type,
  handleClick = () => {},
  children,
}) => {
  return (
    <button
      className={`hoverButton ${className}`}
      type={type}
      onClick={handleClick}>
      {children}
    </button>
  )
}

const Button = ({
  name = '',
  className = '',
  isActive = false,
  handleClick,
  children,
}) => (
  <button
    className={`button ${className ?? ''}`}
    name={name}
    onClick={handleClick}
    data-active={isActive}>
    {children}
  </button>
)

export default Button
