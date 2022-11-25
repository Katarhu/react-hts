//import {Counter} from "./components/useState";
//import {Counter} from "./components/useEffect";
//import {Counter} from "./components/useReducer";
import {ComponentWithContext} from "./components/useContext";
import {RandomValue} from "./components/useLayoutEffect";
import {FormContent} from "./components/useImperativeHandle";

import {Counter} from "./components/customHook";

function App() {
  return (
    <div className="App">
      {/*<Counter initialCount={0}/>*/}

      {/* useContext */}
      {/*<ComponentWithContext/>*/}

      {/* useLayoutEffect */}
      {/*<RandomValue/>*/}

      {/* useImperativeHandle */}
      {/*<FormContent/>*/}

      {/* customHook */}
      <Counter />
    </div>
  );
}

export default App;
