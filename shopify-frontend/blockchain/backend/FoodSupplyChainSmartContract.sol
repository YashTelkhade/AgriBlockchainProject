// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.20 <0.9.0;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract FoodSupplyChainSmartContract {
    
    /*
        Data structure that holds the information of a stage in the supplu chain of a product
    */
    struct SupplyChainStage {
        string stageName;       // Name of this stage, e.g. "Retail"
        string notes;           // Any notes
        string price;           // Price of the item in this stage
        string timestamp;       // Timestamp when the item entered this stage
        string location;        // Location of the item in this stage
    }

    /*
        An item in the supply chain
    */
    struct Item {
        string name;            // Name of the item e.g. Apple
        string description;     // Description of item e.g. Fresh homegrown apples
        string category;        // Category of item e.g. Fruit
        string imageURL;        // URL to the image of item that will be displayed on website
        string slug;            // Identifier of the item in website
        uint identifier;        // Unique identifier of each item
        uint lastStageNumber;   // Number of stages that this item has been in
        mapping (uint => SupplyChainStage) stages;  // Data structure storing the stages this item has been through in its life cycle
    }

    mapping(uint => Item) itemsInSupplyChain;   // Data structure for all items in the supply chain
    uint numberOfItems;            // Number of items in the supply chain

    /*
        Adds new item in the supply chain
        itemInfo : primary information of the item
        stageInfo : information about the first stage in the life cycle of this item
        Returns 1 if the operation was successful
    */
    function addNewItem(string[] calldata itemInfo, string[] calldata stageInfo) public returns (uint) {

        SupplyChainStage memory nextStage = SupplyChainStage({
            stageName: stageInfo[0],
            notes: stageInfo[1],
            price: stageInfo[2],
            timestamp: stageInfo[3],
            location: stageInfo[4]
        });

        Item storage nextItem = itemsInSupplyChain[numberOfItems++];
        nextItem.name = itemInfo[0];
        nextItem.description = itemInfo[1];
        nextItem.category = itemInfo[2];
        nextItem.slug = itemInfo[3];
        nextItem.imageURL = itemInfo[4];
        nextItem.identifier = numberOfItems;
        nextItem.lastStageNumber = 1;
        nextItem.stages[1] = nextStage;

        return 1;
    }

    /*
        Adds a new state in the life cycle of an existing item
        productID : ID of the item which is being moved ahead in the supply chain
        stageInfo : information about the next stage of the current item's life cycle
    */
    function addNewState(uint productID, string[] calldata stageInfo) public returns (uint result) {

        result = 1;

        if(productID >= numberOfItems) {
            result = 0;
        }
        else {
            SupplyChainStage memory nextStage = SupplyChainStage({
                stageName: stageInfo[0],
                notes: stageInfo[1],
                price: stageInfo[2],
                timestamp: stageInfo[3],
                location: stageInfo[4]
            });
            
            itemsInSupplyChain[productID].lastStageNumber = itemsInSupplyChain[productID].lastStageNumber + 1;
            itemsInSupplyChain[productID].stages[itemsInSupplyChain[productID].lastStageNumber] = nextStage;
        }
    }

    /*
        Returns the number of items in the supply chain
    */
    function getNumberOfItemsInSupplyChain() public view returns(uint) {
        return numberOfItems;
    }

    /*
        Returns information about an item with the given productID in the form of a JSON object
    */
    function getProductInfo(uint productID) public view returns(string memory) {
        string memory jsonData = "{";

        if(productID < numberOfItems) {
            jsonData = string.concat(jsonData, "\"name\" : \"");
            jsonData = string.concat(jsonData, itemsInSupplyChain[productID].name);
            jsonData = string.concat(jsonData, "\" , \"description\" : \"");
            jsonData = string.concat(jsonData, itemsInSupplyChain[productID].description);
            jsonData = string.concat(jsonData, "\" , \"category\" : \"");
            jsonData = string.concat(jsonData, itemsInSupplyChain[productID].category);
            jsonData = string.concat(jsonData, "\" , \"imageURL\" : \"");
            jsonData = string.concat(jsonData, itemsInSupplyChain[productID].imageURL);
            jsonData = string.concat(jsonData, "\" , \"slug\" : \"");
            jsonData = string.concat(jsonData, itemsInSupplyChain[productID].slug);
            jsonData = string.concat(jsonData, "\" , \"identifier\" : ");
            jsonData = string.concat(jsonData, Strings.toString(itemsInSupplyChain[productID].identifier));
            jsonData = string.concat(jsonData, " , \"lastStageNumber\" : ");
            jsonData = string.concat(jsonData, Strings.toString(itemsInSupplyChain[productID].lastStageNumber));

            if(itemsInSupplyChain[productID].lastStageNumber > 0) {
                jsonData = string.concat(jsonData, " , \"stages\" : [ ");
                for(uint stageIndex = 1 ; stageIndex <= itemsInSupplyChain[productID].lastStageNumber ; stageIndex++) {
                    jsonData = string.concat(jsonData, "{ \"stageName\" : \"");
                    jsonData = string.concat(jsonData, itemsInSupplyChain[productID].stages[stageIndex].stageName);
                    jsonData = string.concat(jsonData, "\" , \"notes\" : \"");
                    jsonData = string.concat(jsonData, itemsInSupplyChain[productID].stages[stageIndex].notes);
                    jsonData = string.concat(jsonData, "\" , \"price\" : \"");
                    jsonData = string.concat(jsonData, itemsInSupplyChain[productID].stages[stageIndex].price);
                    jsonData = string.concat(jsonData, "\" , \"timestamp\" : \"");
                    jsonData = string.concat(jsonData, itemsInSupplyChain[productID].stages[stageIndex].timestamp);
                    jsonData = string.concat(jsonData, "\" , \"location\" : \"");
                    jsonData = string.concat(jsonData, itemsInSupplyChain[productID].stages[stageIndex].location);
                    jsonData = string.concat(jsonData, "\" }");

                    if(stageIndex < itemsInSupplyChain[productID].lastStageNumber) {
                        jsonData = string.concat(jsonData, ", ");
                    }
                }

                jsonData = string.concat(jsonData, " ]");
            }
        }
        
        jsonData = string.concat(jsonData, " }");

        return jsonData;
    }
}