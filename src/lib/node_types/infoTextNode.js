import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';



import './infoTextNode.css';

function infoTextNode({ data }) {
   
    
  
    return (
      <div className="info-text-node" style={{backgroundColor:data.color}}>
       
      
     {/* {{ if( data.handle!="undefined") {
        data.handle.map((e)=>{
          <Handle  position={Position[e]} />
      
                  }
      )}} */}
      
    { typeof data.handle=="undefined" ?<>
        <Handle type="source" position={Position.Bottom} />
        <Handle type="target" position={Position.Top}/>
        </> :
          data.handle.map((e)=>(
            <Handle key={e}  position={Position[e]} />
      
          )
        )


    }
      
      
    
       {/* { data.isTop &&
         <Handle type="target" position={Position.Bottom} />
      }
        { data.isStart &&
         <Handle type="source" position={Position.Left} />
      } */}
        <span className="info-text-node-label"> {data.label}</span>
        <span className="info-text-node-pct"> {data.pct}</span>
        {/* {
            data.isStart &&
            <Handle type="source" position={Position.Right}/>
        }
        
        {
            data.isBotom &&
            <Handle type="source" position={Position.Top}/>
        } */}
        

        </div>
    );
  }




export default infoTextNode;