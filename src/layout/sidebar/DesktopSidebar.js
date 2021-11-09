import Image from "next/image";
import NavLink from "components/base/NavLink";
import useSignoutMutation from "context/mutations/useSignoutMutation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopSidebar = ({ navigation }) => {
  const { mutate: signOut } = useSignoutMutation();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src="/images/realium.svg"
              width={100}
              height={50}
              alt=""
            />
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                classes="w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                activeClasses="bg-gray-100 text-gray-900"
                exact
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button onClick={signOut} className="btn-primary w-full p-2">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
