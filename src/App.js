import NeoVis, { NEOVIS_ADVANCED_CONFIG } from "neovis.js";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let neoViz;

    function draw() {
      const config = {
        containerId: "viz",
        neo4j: {
          serverUrl: "bolt://localhost:7687",
          serverUser: "neo4j",
          serverPassword: "12345678",
        },
        labels: {
          Character: {
            label: "name",
            value: "pagerank",
            group: "community",
            [NEOVIS_ADVANCED_CONFIG]: {
              static: {
                font: '18px',
                shape: 'box',
                color: '#00ff00'
              }
            }
          }
        },
        relationships: {
          INTERACTS: {
            value: "weight"
          }
        },
         initialCypher: "MATCH p=()-[:owns]->()-[:LicensedTo]->() RETURN p"   // here I'm trying to use default Movie DBMS 
      };

      neoViz = new NeoVis(config);
      neoViz.render();
      console.log("neoViz >> ", neoViz);
    }

    draw();
  }, [])

  return (
    <div className="App">
      Hello
      <div id="viz"></div>
    </div>
  );
}

export default App;

// const App = () => {
//   useEffect(() => {
//     const initializeGraph = async () => {
//       const config = {
//         container_id: 'neo4j-container',
//         neo4j: {
//           server_url: '65e55caf.databases.neo4j.io:7687',
//           server_user: 'neo4j',
//           server_password: 'hVUozIMUzjjnf8IxrcTyt15ASaEodaErxR-PgzAcdrw',
//           driverConfig: {
//             encrypted: "ENCRYPTION_ON",
//             trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
//           },
//         },
//         labels: {
//           'Song': {
//             caption: 'name',
//             size: 'pagerank',
//             community: 'community',
//           },
//           'Artist': {
//             caption: 'name',
//             size: 'pagerank',
//             community: 'community',
//           },
//           'LicensingCompany': {
//             caption: 'name',
//             size: 'pagerank',
//             community: 'community',
//           },
//         },
//         relationships: {
//           'LicensedTo': {
//             caption: false,
//             thickness: 'weight',
//           },
//           'owns': {
//             caption: false,
//             thickness: 'weight',
//           },
//         },
//         initial_cypher: 'MATCH p=()-[:owns]->()-[:LicensedTo]->() RETURN p',
//       };

//       const neoVis = new NeoVis(config);
//       neoVis.render();
//     };

//     initializeGraph();
//   }, []);

//   return (
//     <div>
//       <h1>NeoVis.js React Example</h1>
//       <div id="neo4j-container" style={{ height: '600px' }}></div>
//     </div>
//   );
// };

// export default App;