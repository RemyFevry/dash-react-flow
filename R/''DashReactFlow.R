# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashReactFlow <- function(id=NULL, NodeClicked=NULL, attributionPosition=NULL, className=NULL, defaultPosition=NULL, defaultZoom=NULL, edges=NULL, fitView=NULL, maxZoom=NULL, minZoom=NULL, nodes=NULL, nodesDraggable=NULL, onlyRenderVisibleElements=NULL, preventScrolling=NULL, snapGrid=NULL, snapToGrid=NULL, style=NULL) {
    
    props <- list(id=id, NodeClicked=NodeClicked, attributionPosition=attributionPosition, className=className, defaultPosition=defaultPosition, defaultZoom=defaultZoom, edges=edges, fitView=fitView, maxZoom=maxZoom, minZoom=minZoom, nodes=nodes, nodesDraggable=nodesDraggable, onlyRenderVisibleElements=onlyRenderVisibleElements, preventScrolling=preventScrolling, snapGrid=snapGrid, snapToGrid=snapToGrid, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactFlow',
        namespace = 'dash_react_flow',
        propNames = c('id', 'NodeClicked', 'attributionPosition', 'className', 'defaultPosition', 'defaultZoom', 'edges', 'fitView', 'maxZoom', 'minZoom', 'nodes', 'nodesDraggable', 'onlyRenderVisibleElements', 'preventScrolling', 'snapGrid', 'snapToGrid', 'style'),
        package = 'dashReactFlow'
        )

    structure(component, class = c('dash_component', 'list'))
}
