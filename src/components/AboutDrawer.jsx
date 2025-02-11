import PropTypes from "prop-types";
import "../index.css"

const AboutDrawer = ({ isOpen, onClose, children }) => {
  return (
    <>

      {isOpen && (
<div className="Container lg:fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} aria-hidden="true"></div>
      )}

<div className={`drawerContainer fixed top-0 right-0 w-full sm:w-96 lg:top-14 lg:right-0 lg:text-center lg:pl-0 lg:pr-0 lg:w-1/3 md:top-16 md:right-0 md:w-full md:pl-36 md:pr-36 h-full shadow-lg transition-transform transform ${
 isOpen ? "translate-x-0" : "translate-x-full" } z-50 duration-500 linear`} aria-hidden={!isOpen}>

  <button className="absolute top-8 right-4 text-gray-500 hover:text-blue-400 lg:pr-0 md:pr-36"
  onClick={onClose} aria-label="Close Drawer"> ✕</button>

        <div className="p-6">{children}</div>
      </div>

    </>
  );
};


// className={`fixed top-0 right-0 h-full shadow-lg transition-transform transform 
//   ${isOpen ? "translate-x-0" : "translate-x-full"} 
//   w-full sm:w-96 md:w-full lg:w-1/3 md:top-16 lg:top-14 z-50 duration-500 linear`}
// aria-hidden={!isOpen}
// >


// Add prop validation
AboutDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose must be a function and is required
  children: PropTypes.node.isRequired, // children must be React nodes and is required
};

export default AboutDrawer;
