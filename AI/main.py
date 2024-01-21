class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def build_tree():
    # Build a simple binary tree with depth 3
    root = Node(0)
    root.children = [Node(3), Node(5)]
    root.children[0].children = [Node(2), Node(8)]
    root.children[1].children = [Node(7), Node(1)]
    root.children[0].children[0].children = [Node(9), Node(4)]
    root.children[0].children[1].children = [Node(6), Node(3)]
    root.children[1].children[0].children = [Node(1), Node(0)]
    root.children[1].children[1].children = [Node(5), Node(2)]
    return root

def minimax(node, depth, maximizing_player):
    if depth == 0 or not node.children:
        return node.value

    if maximizing_player:
        max_eval = float('-inf')
        for child in node.children:
            eval = minimax(child, depth - 1, False)
            max_eval = max(max_eval, eval)
        return max_eval
    else:
        min_eval = float('inf')
        for child in node.children:
            eval = minimax(child, depth - 1, True)
            min_eval = min(min_eval, eval)
        return min_eval

def find_root_node(root):
    max_value = float('-inf')
    root_node = None
    for child in root.children:
        eval = minimax(child, 2, False)  # Depth is set to 2 for this example
        if eval > max_value:
            max_value = eval
            root_node = child
    return root_node

if __name__ == "__main__":
    game_tree_root = build_tree()
    root_node = find_root_node(game_tree_root)

    print(f"The root node value is: {root_node.value}")

