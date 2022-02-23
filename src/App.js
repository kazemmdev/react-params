import { Route, Routes, Navigate } from "react-router-dom";
import PostPage from './components/post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/post/:year/:month/:slug" element={<PostPage />} />
        <Route path="*" element={<Navigate to="/post/2022/03/sample-post"/>} />
      </Routes>
    </div>
  );
}

export default App;
