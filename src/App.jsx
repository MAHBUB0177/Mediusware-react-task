import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense, lazy } from "react";

const ModalA = lazy(() =>
  import('./components/ModalA.jsx')
)
const ModalB = lazy(() =>
  import('./components/ModalB.jsx')
)

function App() {
  return (
    <>
    <Suspense fallback={'Loading...'}>
      <Routes>
    
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="modal-a" element={<ModalA />} />
          <Route path="modal-b" element={<ModalB />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
