import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-3">
      <Link to="/">
        <h1 className="text-2xl font-semibold">Where&apos;s Waldo</h1>
      </Link>
      <Link to="/leaderboard">
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
      </Link>
    </div>
  );
};

export default Header;
