import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-3">
      <Link to="/">
        <h1 className="text-2xl">Where&apos;s Waldo</h1>
      </Link>
      <Link to="/leaderboard">
        <h1 className="text-2xl">Leaderbord</h1>
      </Link>
    </div>
  );
};

export default Header;
