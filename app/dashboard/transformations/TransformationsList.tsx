import { getTransformations } from "@/app/lib/transformations";
import TransformationsContent from "./TransformationsContent";

export default async function TransformationsList() {
  const transformations = await getTransformations();
  return <TransformationsContent transformations={transformations} />;
}
