import React, {Component,useState,useCallback,useMemo} from 'react';
import PropTypes from 'prop-types';


import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 * 
 */


//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);


import infoTextNode from '../node_types/infoTextNode.js';


function DashReactFlow(props){
  
    const [nodes, setNodes] = useState(props.nodes);
    
    const [edges, setEdges] = useState(props.edges);
    const nodeTypes = useMemo(() => ({ infoText: infoTextNode }), []);
    // console.log(props.nodes)
    
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
      );

    // props.setProps({nodes:props.nodes})



    return (
        <div style={props.style}
        >
          { !props.draggable ?
            <ReactFlow nodes={props.nodes} edges={props.edges}
           
            nodeTypes={nodeTypes}
            onNodeClick={(e,n)=>props.setProps({NodeClicked:n})}
            fitView /> : 
        <ReactFlow nodes={props.nodes} edges={props.edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={(e,n)=>props.setProps({NodeClicked:n})}
        fitView />
          }
        </div>
    );
}



  
export default DashReactFlow;

DashReactFlow.defaultProps = {draggable:false,style:{height:500,width:500}};

DashReactFlow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     *  array of nodes (for an controlled flow)
     */
    nodes: PropTypes.arrayOf(PropTypes.object),

    /**
     *  array of edges (for an controlled flow)
     */
    edges: PropTypes.arrayOf(PropTypes.object),

    /**
     *  called when user clicks a node
     */
    NodeClicked: PropTypes.object,

    /**
     *  are the node and its edges draggable
     */
    draggable: PropTypes.bool,

     /**
     * style
     */
   style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
