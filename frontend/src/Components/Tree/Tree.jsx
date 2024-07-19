import TreeNode  from "./TreeNode";

const Tree=({ treeData })=>{
    return (
        <ul>
          {treeData && treeData.map((node) => (
            <TreeNode node={node} key={node.key} />
          ))}
        </ul>
      );
}

export default Tree;