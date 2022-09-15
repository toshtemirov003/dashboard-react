import searchIcon from "../../assets/Images/search.svg";
import noticeIcon from "../../assets/Images/notice.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">Overview</h1>
        <div className="header__icons">
          <button className="header__search">
            <img src={searchIcon} alt="search" width={16} height={16} />
          </button>
          <button className="header__ring">
            <img src={noticeIcon} alt="search" width={14} height={16} />
          </button>
          <p className="header__owner">Jones Ferdinand</p>
        </div>
      </div>
    </header>
  );
};
