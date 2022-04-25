# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashReactFlow <- function(id=NULL, NodeClicked=NULL, draggable=NULL, edges=NULL, nodes=NULL, style=NULL) {
    
    props <- list(id=id, NodeClicked=NodeClicked, draggable=draggable, edges=edges, nodes=nodes, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactFlow',
        namespace = 'dash_react_flow',
        propNames = c('id', 'NodeClicked', 'draggable', 'edges', 'nodes', 'style'),
        package = 'dashReactFlow'
        )

    structure(component, class = c('dash_component', 'list'))
}
