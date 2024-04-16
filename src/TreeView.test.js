import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeView from './TreeView';

const dummyData = [
  {
    name: "HUB St Nazaire",
    sites: [
      {
        name: "A380 (toutes les postes de travail)",
      },
      {
        name: "A320",
        workstations: [
          { name: "PT XXXXX37834" },
          { name: "PT XXXXX37835" },
          { name: "PT XXXXX37836" },
          { name: "PT XXXXX37837" },
        ],
      },
    ],
  },
  {
    name: "HUB St Naz",
    sites: [
      {
        name: "A350",
        workstations: [
          { name: "PT XXXXX37838" },
          { name: "PT XXXXX37839" },
          { name: "PT XXXXX37840" },
          { name: "PT XXXXX37841" },
          { name: "PT XXXXX37842" },
        ],
      },
    ],
  },
  {
    name: "GRON SITE (toutes les activités)",
    
  },
];

test('renders TreeView component with dummy data', () => {
  render(<TreeView data={dummyData} />);
  
  // Check if TreeView component renders
  const treeView = screen.getByTestId('tree-view');
  expect(treeView).toBeInTheDocument();

  // Check if region names are rendered
  const regionNames = dummyData.map(region => region.name);
  regionNames.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  // Check if site names are rendered
  const siteNames = dummyData.reduce((acc, region) => {
    if (region.sites) {
      return acc.concat(region.sites.map(site => site.name));
    }
    return acc;
  }, []);
  siteNames.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  // Check if workstation names are rendered
  const workstationNames = dummyData.reduce((acc, region) => {
    if (region.sites) {
      region.sites.forEach(site => {
        if (site.workstations) {
          acc.push(...site.workstations.map(workstation => workstation.name));
        }
      });
    }
    return acc;
  }, []);
  workstationNames.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});