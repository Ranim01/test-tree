import React from "react";
import "./index.css";

interface Workstation {
  name: string;
}

interface Site {
  name: string;
  workstations?: Workstation[];
}

interface Region {
  name: string;
  sites?: Site[];
}

interface TreeNodeProps {
  name: string;
  children?: React.ReactNode;
}

const TreeNode: React.FC<TreeNodeProps> = ({ name, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpanded}>
        {isExpanded ? "▼" : "►"} <span>{name}</span>
      </div>
      {isExpanded && <div style={{ marginLeft: "20px" }}>{children}</div>}
    </div>
  );
};

const WorkstationNode: React.FC<{ workstation: Workstation }> = ({
  workstation,
}) => {
  return <div>{workstation.name}</div>;
};

const SiteNode: React.FC<{ site: Site }> = ({ site }) => {
  return (
    <TreeNode name={site.name}>
      {site.workstations &&
        site.workstations.map((workstation, index) => (
          <WorkstationNode key={index} workstation={workstation} />
        ))}
    </TreeNode>
  );
};

const RegionNode: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <TreeNode name={region.name}>
      {region.sites?.map((site, index) => (
        <SiteNode key={index} site={site} />
      ))}
    </TreeNode>
  );
};

const TreeView: React.FC<{ data: Region[] }> = ({ data }) => {
    return (
      <div className="white-card" data-testid="tree-view">
        {data.map((region, index) => (
          <RegionNode key={index} region={region} />
        ))}
      </div>
    );
  };
  

export default TreeView;
