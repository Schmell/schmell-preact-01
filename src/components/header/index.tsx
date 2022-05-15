import { h } from "preact";
import { Link } from "preact-router/match";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../util/firebase-config";
import style from "./style.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header class={style.header}>
      <div>
        <h1>Blw Me</h1>
      </div>

      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>

        <Link activeClassName={style.active} href="/results">
          Results
        </Link>

        <Link activeClassName={style.active} href="/scoring">
          Scoring
        </Link>
      </nav>
    </header>
  );
};

export default Header;
