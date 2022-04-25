# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashreactflowdagre

"""
    ''_dashreactflowdagre(;kwargs...)

A DashReactFlowDagre component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `NodeClicked` (Dict; optional): called when user clicks a node
- `draggable` (Bool; optional): are the node and its edges draggable
- `edges` (Array of Dicts; optional): array of edges (for an controlled flow)
- `nodes` (Array of Dicts; optional): array of nodes (for an controlled flow)
- `style` (Dict; optional): style
"""
function ''_dashreactflowdagre(; kwargs...)
        available_props = Symbol[:id, :NodeClicked, :draggable, :edges, :nodes, :style]
        wild_props = Symbol[]
        return Component("''_dashreactflowdagre", "DashReactFlowDagre", "dash_react_flow", available_props, wild_props; kwargs...)
end

