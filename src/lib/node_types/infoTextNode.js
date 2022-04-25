import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';



import './infoTextNode.css';

function infoTextNode({ data }) {
   
    
  
    return (
      <div className="info-text-node" style={{backgroundColor:data.color}}>
       { !data.isTop &&
         <Handle type="target" position={Position.Top} />
      }
      
        <span className="info-text-node-label"> {data.label}</span>
        <span className="info-text-node-pct"> {data.pct}</span>
     
        {
            !data.isBotom &&
            <Handle type="source" position={Position.Bottom}/>
        }
        

        </div>
    );
  }

export default infoTextNode;