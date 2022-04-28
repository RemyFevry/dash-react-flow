# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashreactflow

"""
    ''_dashreactflow(;kwargs...)

A DashReactFlow component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `NodeClicked` (Dict; optional): called when user clicks a node
- `attributionPosition` (String; optional)
- `className` (String; optional)
- `defaultPosition` (Array of Reals; optional)
- `defaultZoom` (Real; optional)
- `edges` (Array of Dicts; optional): array of edges (for an controlled flow)
- `fitView` (Bool; optional)
- `maxZoom` (Real; optional)
- `minZoom` (Real; optional)
- `nodes` (Array of Dicts; optional): array of nodes (for an controlled flow)
- `nodesDraggable` (Bool; optional)
- `onlyRenderVisibleElements` (Bool; optional)
- `preventScrolling` (Bool; optional)
- `snapGrid` (Array of Reals; optional)
- `snapToGrid` (Bool; optional)
- `style` (Dict; optional): style
"""
function ''_dashreactflow(; kwargs...)
        available_props = Symbol[:id, :NodeClicked, :attributionPosition, :className, :defaultPosition, :defaultZoom, :edges, :fitView, :maxZoom, :minZoom, :nodes, :nodesDraggable, :onlyRenderVisibleElements, :preventScrolling, :snapGrid, :snapToGrid, :style]
        wild_props = Symbol[]
        return Component("''_dashreactflow", "DashReactFlow", "dash_react_flow", available_props, wild_props; kwargs...)
end

