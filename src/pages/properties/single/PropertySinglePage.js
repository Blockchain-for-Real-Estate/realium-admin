import { useRouter } from "next/router";
import PropertyFormUpdateSection from "./sections/PropertyFormUpdateSection";

const PropertySinglePage = () => {
  const router = useRouter();
  const { propertyId } = router.query;

  return (
    <div>
      <PropertyFormUpdateSection propertyId={propertyId} />
    </div>
  );
};

export default PropertySinglePage;
