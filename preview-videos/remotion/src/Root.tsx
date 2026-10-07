import { Composition, Folder } from "remotion";
import { ProductPreview } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Module-Previews">
        <Composition
          id="CRM"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "crm" }}
        />
        <Composition
          id="Sales"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "sales" }}
        />
        <Composition
          id="Inventory"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "inventory" }}
        />
        <Composition
          id="Purchase"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "purchase" }}
        />
        <Composition
          id="Production"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "production" }}
        />
        <Composition
          id="Accounting"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "accounting" }}
        />
        <Composition
          id="HRMS"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "hrms" }}
        />
        <Composition
          id="Projects"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "project" }}
        />
      </Folder>
      <Folder name="Homepage-Previews">
        <Composition
          id="Homepage-Dashboard"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "home-dashboard" }}
        />
        <Composition
          id="Homepage-Workflow"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "home-workflow" }}
        />
        <Composition
          id="Homepage-Modules"
          component={ProductPreview}
          durationInFrames={150}
          fps={30}
          width={1600}
          height={900}
          defaultProps={{ kind: "home-modules" }}
        />
      </Folder>
    </>
  );
};
