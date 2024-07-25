const Navbar = () => {
  return (
    <div className="mx-auto xs:p-6 md:p-8 flex justify-between items-center">
      <img
        src={"./assets/images/logo.svg"}
        alt="nav logo"
        className="xs:h-6 sm:h-10"
      />
      <nav>
        <ul
          className="flex xs:space-x-4 
        sm:space-x-8
        text-gray-600 xs:text-xs
        sm:text-base
        "
        >
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
