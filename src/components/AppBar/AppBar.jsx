import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectIsLoggedIn} from "../../redux/auth/selectors";
import {logoutThunk} from "../../redux/auth/operations";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpenWindowExit, setIsOpenWindowExit] = useState(false);
  const dispatch = useDispatch();

  const handleExit = () => {
    setIsOpenWindowExit(true);
  };
  return (
    <>
      <header>
        <nav>
          <ul className="navbar bg-base-100 max-w-[1024px] mx-auto">
            <Navigation />
            {!isLoggedIn ? <AuthNav /> : <UserMenu handleExit={handleExit} />}
          </ul>
        </nav>
      </header>
      <ConfirmationModal
        isOpenWindow={isOpenWindowExit}
        onClose={() => setIsOpenWindowExit(false)}
        onConfirm={() => dispatch(logoutThunk())}
        text="Do you want exit?"
      />
    </>
  );
};
export default AppBar;
