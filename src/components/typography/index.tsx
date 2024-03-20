export const P = ({ style = {}, className = '', children }) => (
  <p style={style} className={`p ${className}`}>
    {children}
  </p>
)

export const Label = ({ style = {}, className = '', children }) => (
  <label style={style} className={`label ${className}`}>
    {children}
  </label>
)

export const H1 = ({
  style = {},
  className = '',
  isUnderlined = false,
  children,
}) => (
  <h1
    style={style}
    data-underline={String(isUnderlined)}
    className={`h1 ${className}`}>
    {children}
  </h1>
)

export const H2 = ({
  style = {},
  className = '',
  isUnderlined = false,
  children,
}) => (
  <h2
    style={style}
    data-underline={String(isUnderlined)}
    className={`h2 ${className}`}>
    {children}
  </h2>
)

export const H3 = ({
  style = {},
  className = '',
  isUnderlined = false,
  children,
}) => (
  <h3
    style={style}
    data-underline={String(isUnderlined)}
    className={`h3 ${className}`}>
    {children}
  </h3>
)
