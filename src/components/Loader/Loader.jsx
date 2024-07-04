import {DNA} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
      <DNA />
    </div>
  );
};
export default Loader;
