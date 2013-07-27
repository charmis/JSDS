var Charmis = {}; //namespace

Charmis.Treenode = function () {
    return {
        data: '',
        left: null,
        right: null
    };
};

Charmis.Tree = function () {
    var rootNode;

    function InsertNode(rNode, nodeValue) {
        if (nodeValue < rNode.data) {
            if (rNode.left === null) {
                rNode.left = Charmis.Treenode();
                rNode.left.data = nodeValue;
            } else {
                InsertNode(rNode.left, nodeValue);
            }
        } else {
            if (rNode.right === null) {
                rNode.right = Charmis.Treenode();
                rNode.right.data = nodeValue;
            } else {
                InsertNode(rNode.right, nodeValue);
            }
        }
    }

    function Traverse(treeNode) {
        console.log(treeNode.data);
        if (treeNode.left !== null) {
            Traverse(treeNode.left);
        }

        if (treeNode.right !== null) {
            Traverse(treeNode.right);
        }
    }

    var insertTreeNode = function () {

        if (rootNode === undefined) {

            rootNode = Charmis.Treenode();
            rootNode.data = arguments[0];
        } else {

            InsertNode(rootNode, arguments[0]);
        }
    };

    var inOrderTraverse = function () {


        console.log('Left tree of Root Node - - - - - - - ');
        if (rootNode.left !== null) {
            Traverse(rootNode.left);
        }
        console.log('Root Node - - - - - - - ');
        console.log(rootNode.data);

        console.log('Right tree of Root Node - - - - - - - ');
        if (rootNode.right !== null) {
            Traverse(rootNode.right);
        }
    };

    return {
        insertNode: insertTreeNode,

        inorderTraverse: inOrderTraverse
    };
};

var bTree = Charmis.Tree();
bTree.insertNode(10);
bTree.insertNode(30);
bTree.insertNode(29);
bTree.insertNode(31);
bTree.insertNode(8);
bTree.insertNode(11);
bTree.insertNode(1);
bTree.insertNode(2);
bTree.inorderTraverse();