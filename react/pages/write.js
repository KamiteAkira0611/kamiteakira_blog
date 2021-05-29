import dynamic from "next/dynamic";
const DynamicWrite = dynamic(() => import("components/write"));
const write = () => {
  return (
    <div>
      <DynamicWrite />
    </div>
  );
};

export default write;
