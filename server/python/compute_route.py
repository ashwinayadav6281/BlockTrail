import sys
import osmnx as ox
import networkx as nx
import json

start_lat, start_lng, end_lat, end_lng = map(float, sys.argv[1:])
G = ox.load_graphml("data/roads.graphml")

orig_node = ox.distance.nearest_nodes(G, start_lng, start_lat)
dest_node = ox.distance.nearest_nodes(G, end_lng, end_lat)

path = nx.shortest_path(G, orig_node, dest_node, weight="darkness_score")
coords = [(G.nodes[n]["y"], G.nodes[n]["x"]) for n in path]
print(json.dumps(coords))
