

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  

  return (
    <Provider store={store}>
      <div>
        <h1>Hello Developer</h1>
      </div>
      
    </Provider>
  )
}

export default App
