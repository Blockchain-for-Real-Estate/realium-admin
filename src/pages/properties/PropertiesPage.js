import PropertiesTableSection from "./sections/PropertiesTableSection";
import Link from "next/link";

const PropertiesPage = () => {
  return (
    <div className="p-5">
      <div>
        <Link href="/properties/create" passHref>
          <button className="btn-primary px-4 py-1">Create</button>
        </Link>
      </div>
      <PropertiesTableSection />
    </div>
  );
};

export default PropertiesPage;
