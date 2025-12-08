import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="app">
      <h1>React State & Props Demo</h1>
      <Profile initialName="Student Developer" profilUrl="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/NASA_Earth.jpg?itok=M0aRnEJ5" />
    </div>
  );
}

export default App;