import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import PropTypes from "prop-types";

const Sidebar = ({ data, expanded, toggleExpand, handleItemClick }) => {
  return (
    <div className="mt-10 hidden md:block">
      <div className="w-full h-[80vh] max-w-md mx-auto p-6 rounded-lg shadow-lg bg-[linear-gradient(213.54deg,_#E6E6F2_-6.27%,_rgba(0,0,127,0.35)_172.7%)]">
        <div className="space-y-4">
          {Object.keys(data).map((section) => (
            <div key={section}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(section)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{section}</h2>
                {expanded[section] ? (
                  <IoChevronUp size={24} />
                ) : (
                  <IoChevronDown size={24} />
                )}
              </div>
              {expanded[section] && (
                <div className="space-y-2 mt-2 max-h-80 overflow-y-auto pr-2">
                  {data[section].map((item) => (
                    <div
                      key={item.id}
                      className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleItemClick(item.message)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
