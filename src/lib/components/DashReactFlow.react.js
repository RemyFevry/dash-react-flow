import React, {useState,useCallback,useMemo,useEffect} from 'react';
import PropTypes from 'prop-types';


import ReactFlow, { applyEdgeChanges, applyNodeChanges,useReactFlow,
ReactFlowProvider,useNodesState,useEdgesState
} from 'react-flow-renderer';
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
    const reactFlowInstance= useReactFlow();

 
    
    // useEffect(()=>{console.log(reactFlowInstance)},)
    const [nodes, setNodes] = useState(props.nodes);
    
    const [edges, setEdges] = useState(props.edges);
   
   
    useEffect(()=>{
      setNodes(props.nodes);
    },[props.nodes])
    useEffect(()=>{
      setEdges(props.edges);
    },[props.edges])
    // function setNodes(nodes){
    //   return props.setProps({nodes:nodes})
    // }
    // function setEdges(edges){
    //   return props.setProps({edges:edges})
    // }
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

    // props.setProps({nodes:nodes})
    // props.setProps({edges:edges})
    



    return (
        <div style={props.style}>
          
            <ReactFlow nodes={nodes} edges={edges}
            nodeTypes={nodeTypes}
            nodesDraggable={props.nodesDraggable}
            className={props.className}
            minZoom={props.minZoom}
            maxZoom={props.maxZoom}
            defaultZoom={props.defaultZoom}
            defaultPosition={props.defaultPosition}
            snapGrid={props.snapGrid}
            snapToGrid={props.snapToGrid}
            onlyRenderVisibleElements={props.onlyRenderVisibleElements}
            preventScrolling={props.preventScrolling}
            attributionPosition={props.attributionPosition}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={(e,n)=>{
              // setNodes(props.nodes)
              reactFlowInstance.fitView()
              props.setProps({NodeClicked:n})
          }}
          />
          
        </div>
    );
}

function FlowProvider(props){
  return (
    <ReactFlowProvider>
      <DashReactFlow {...props}/>
    </ReactFlowProvider>
  )
}


  
export default FlowProvider;

FlowProvider.defaultProps = {style:{height:500,width:500}};

FlowProvider.propTypes = {
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


     /**
     * style
     */
   style: PropTypes.object,
   
   className: PropTypes.string,

   minZoom: PropTypes.number,
   maxZoom: PropTypes.number,
   defaultZoom: PropTypes.number,
   defaultPosition: PropTypes.arrayOf(PropTypes.number),
   snapGrid: PropTypes.arrayOf(PropTypes.number),
   snapToGrid: PropTypes.bool,
   onlyRenderVisibleElements: PropTypes.bool,
   preventScrolling: PropTypes.bool,
    
    attributionPosition: PropTypes.string,
    nodesDraggable:PropTypes.bool,

    fitView: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
