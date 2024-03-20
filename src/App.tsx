import Header from 'layout/header'
import Main from 'layout/main'
import { DynamicRefsProvider } from 'lib/hooks/useDynamicRefs'
import './styles/main.scss'
import 'styles/app.scss'

const App = () => {
  return (
    <DynamicRefsProvider>
      <div className='app'>
        <Header />
        <Main />
      </div>
    </DynamicRefsProvider>
  )
}

export default App
