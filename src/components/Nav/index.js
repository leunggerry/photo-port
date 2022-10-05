import React, { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers";

// Component Dfinition
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props; // destructure the props

  //useEffic - a hook to trigger  a re-render on a variable value change. Difference to useState is
  //          its an API that reflectst he lifecycle methods of the component
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]); // callback function followed by second argument that directs the hook
  // to re-render the component on changes to the value of this state,
  // meaning the if CURRENTCATEGORY changes, the component will re-render

  //react components must always return a single parent JSX element

  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && `navActive`}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              /** if the currentCategory name is equal the category name reutnr 'navAcitve' */
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
              }`}
              key={category.name}
            >
              {/* WHY???? 
                 The onClick() attribute is expecting a callback function declaration. It's 
                  important that we wrap it in a function declaration rather than just calling
                  categorySelected(category.name), which would cause the function to get called 
                  whenever the component renders as well.*/}
              <span
                onClick={() => {
                  setCurrentCategory(category.name);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

//export the componenet
export default Nav;
