import dash_react_flow
import dash
from dash.dependencies import Input, Output,State
import dash_html_components as html
import json
from dash_react_flow import DashReactFlow,DashReactFlowDagre

app = dash.Dash(__name__)

initialNodes = [
    {
      "id": '1',
      "type": 'infoText',
      "data": { "label": 'Input Node' ,"pct":"33%","color":"green"},
      "position": { "x": 250, "y": 25 },
    },
  
    {
      "id": '2',
    
      "data": { "label": "Default Node "},
      "position": { "x": 100, "y": 125 },
    },
    {
      "id": '3',
      "type": 'output',
      "data": { "label": 'Output Node' },
      "position": { "x": 250, "y": 250 },
    },
  ]
  
initialEdges = [
    { "id": 'e1-2', "source": '1', "target": '2' },
    { "id": 'e2-3', "source": '2', "target": '3', "animated": True },
  ]

app.layout = html.Div([
    


    DashReactFlowDagre(
        id='input',
        nodes=initialNodes,
        edges=initialEdges,
        draggable=True,
    ),
    html.Pre(id='output')
])


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)
@app.callback(
Output('output', 'children'),
Output("input","nodes"),
Input('input',"NodeClicked"),
State("input","nodes")

)
def on_node(node_data,nodes):
    if node_data:
      return json.dumps(node_data),nodes
    else :
      return {},nodes
    


if __name__ == '__main__':
    app.run_server(debug=True)
