// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.20 <0.9.0;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract FoodSupplyChainSmartContract {
    
    struct SupplyChainStage {
        string stageName;
        string notes;
        string price;
        string timestamp;
        string location;
    }

    struct Item {
        string name;
        string description;
        string category;
        string imageURL;
        string slug;
        uint identifier;
        uint lastStageNumber;
        mapping (uint => SupplyChainStage) stages;
    }

    mapping(uint => Item) itemsInSupplyChain;
    uint numberOfItems;

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

    function getNumberOfItemsInSupplyChain() public view returns(uint) {
        return numberOfItems;
    }

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