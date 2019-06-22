pragma solidity >=0.4.0 <0.7.0;

contract SupplyChain {
    address public owner;

    enum Stage {DEFAULT, ProductCreated, ProductPackaged, SentToProcessor, SentToDistributor, SentToRetailer, Sold}

    struct Product {
        address producer;
        address certifier;
        address processor;
        address distributor;
        address retailer;
        Stage stage;
        string ipfsInfo;
    }
    mapping (uint => Product) public productMap;

    event ProductUpdated(uint, Stage, string);

    constructor() public {
        owner = msg.sender;
    }

    function addProduct(string memory ipfs, uint id, address certifier) public {
        Product memory product = Product(msg.sender, certifier, address(0), address(0), address(0), Stage.ProductCreated, ipfs);
        productMap[id] = product;
        emit ProductUpdated(id, Stage.ProductCreated, ipfs);
    }

    function markPackaged(string memory ipfs, uint id) public {
        productMap[id].ipfsInfo = ipfs;
        productMap[id].certifier = msg.sender;
        emit ProductUpdated(id, Stage.ProductPackaged, ipfs);
    }

    function sendToProcessor(string memory ipfs, uint id, address processor) public {
        productMap[id].ipfsInfo = ipfs;
        productMap[id].processor = processor;
        emit ProductUpdated(id, Stage.SentToProcessor, ipfs);
    }

    function sendToDistributor(string memory ipfs, uint id, address distributor) public {
        productMap[id].ipfsInfo = ipfs;
        productMap[id].distributor = distributor;
        emit ProductUpdated(id, Stage.SentToDistributor, ipfs);
    }

    function sendToRetailer(string memory ipfs, uint id, address retailer) public {
        productMap[id].ipfsInfo = ipfs;
        productMap[id].retailer = retailer;
        emit ProductUpdated(id, Stage.SentToRetailer, ipfs);
    }

    function markSold(string memory ipfs, uint id) public {
        assert(msg.sender == productMap[id].retailer);
        productMap[id].ipfsInfo = ipfs;
        emit ProductUpdated(id, Stage.Sold, ipfs);
    }

    function getProductInfo(uint id) public view returns(string memory) {
        return productMap[id].ipfsInfo;
    }

}