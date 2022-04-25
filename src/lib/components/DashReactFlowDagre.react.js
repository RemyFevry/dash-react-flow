import React, {Component,useState,useCallback,useMemo} from 'react';
import PropTypes from 'prop-types';
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

import ReactFlow, { applyEdgeChanges, applyNodeChanges ,useNodesState,useEdgesState,ConnectionLineType} from 'react-flow-renderer';
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


const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });
  
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? 'left' : 'top';
      node.sourcePosition = isHorizontal ? 'right' : 'bottom';
  
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
  
      return node;
    });
  
    return { nodes, edges };
  };
  



function DashReactFlowDagre(props){
  
   
    const [nodes, setNodes,onNodesChange] = useNodesState(props.nodes);
    
    const [edges, setEdges,onEdgesChange] = useEdgesState(props.edges);
    
    // console.log(props.nodes)
    const nodeTypes = useMemo(() => ({ infoText: infoTextNode }), []);
    

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
       nodes,
        edges
      );

    
    props.setProps({edges:layoutedEdges,nodes:layoutedNodes})

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)),
        []
      );

    // props.setProps({nodes:props.nodes})



    return (
        <div style={props.style}
        >
          { !props.draggable ?
            <ReactFlow nodes={props.nodes} edges={props.edges}
     
            onConnect={onConnect}
            connectionLineType={ConnectionLineType.SmoothStep}
            nodeTypes={nodeTypes}
            onNodeClick={(e,n)=>props.setProps({NodeClicked:n})}
            fitView /> : 
        <ReactFlow nodes={props.nodes} edges={props.edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        nodeTypes={nodeTypes}
        onNodeClick={(e,n)=>props.setProps({NodeClicked:n})}
        fitView />
          }
        </div>
    );
}



  
export default DashReactFlowDagre;

DashReactFlowDagre.defaultProps = {draggable:false,style:{height:500,width:500}};

DashReactFlowDagre.propTypes = {
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
