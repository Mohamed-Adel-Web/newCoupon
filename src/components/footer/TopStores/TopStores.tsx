import Head from "../common/Head";
import DynamicLinks from "./DynamicLinks";

export default function TopStores() {
  return (
    <>
      <Head title="topStores" />
      <ul className="space-y-4">
        <DynamicLinks />
      </ul>
    </>
  );
}
