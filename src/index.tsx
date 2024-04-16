import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeView from './TreeView'; 
import reportWebVitals from './reportWebVitals';

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


ReactDOM.render(
  <React.StrictMode>
    <TreeView data={dummyData} /> {}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
