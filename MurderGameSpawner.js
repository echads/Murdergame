var localRot;
//var LOCATION_ROOT_URL = "http://192.168.2.200/Murdergame/";
var LOCATION_ROOT_URL = "https://echads.github.io/Murdergame/";
//var LOCATION_ROOT_URL = Script.resolvePath(".");
print (LOCATION_ROOT_URL);
var SPAWN_CUBE_AMOUNT = 10; //not less than serverscript max players
var ITEM_CUBE_AMOUNT = 21; //not less han serverscript clues + knives

localRot = Quat.fromPitchYawRollDegrees(0, -90, 0 );
var murdergameConsoleID = Entities.addEntity( {
    type: "Model",
    name: "MurderConsole",
    shapeType: "static-mesh",        
    modelURL: LOCATION_ROOT_URL + "MurderConsole.fbx?"+ Date.now(),
    serverScripts: LOCATION_ROOT_URL + "MurderGameServer.js?" + Date.now(),
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 1, z: -4 })),
    rotation: Quat.multiply(MyAvatar.orientation,localRot),
    dimensions: { x: 5.5 , y: 4.4 , z: 4 },
    visible: true,            
    description: "",        
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

localRot = Quat.fromPitchYawRollDegrees( 108.8 , 90 , 72.7 ); 
var murdergameStartButtonID = Entities.addEntity( {
    type: "Model",
    name: "MurderGameStartButton",        
    modelURL: LOCATION_ROOT_URL + "StartButton.fbx?"+ Date.now(),
    script: LOCATION_ROOT_URL + "MurderGameStartButton.js?" + Date.now(),
    parentID: murdergameConsoleID,
    localPosition: { x: -1.4179 , y: -0.8938 , z: -0.0033 },
    localDimensions: { x: 0.8436 , y: 0.06 , z: 0.3375 },   
    localRotation: localRot,  
    visible: true,            
    description: "",        
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

var materialID1 = Entities.addEntity({
    type: "Material",
    name: "MurderGameButtonMaterial",
    parentID: murdergameStartButtonID,
    localPosition: { x: 0 , y: -0.2 , z: 0 },
    materialURL: "materialData",
    priority: 0,
    visible: false,
    collisionless: true,
    materialData: JSON.stringify( {
        materialVersion: 1,
        materials: {                                             
            albedo: [0,0,1],           
            emissive: [0,0,1],            
            opacity: 0.5            
        }
    })
});

localRot = Quat.fromPitchYawRollDegrees( 108.4 , 90 , 72.7 ); 
var murdergamePlusButtonID = Entities.addEntity( {
    type: "Model",
    name: "MurderGamePlusButton",        
    modelURL: LOCATION_ROOT_URL + "PlusButton.fbx?"+ Date.now(),
    script: LOCATION_ROOT_URL + "MurderGamePlusButton.js?" + Date.now(),
    parentID: murdergameConsoleID,
    localPosition: { x: -1.7357 , y: -0.6582 , z: 0.2422 },
    localDimensions: { x: 0.3375 , y: 0.06 , z: 0.3375 },   
    localRotation: localRot,  
    visible: true,            
    description: "",        
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

var materialID2 = Entities.addEntity({
    type: "Material",
    name: "MurderGameButtonMaterial",
    parentID: murdergamePlusButtonID,
    localPosition: { x: 0 , y: -0.2 , z: 0 },
    materialURL: "materialData",
    priority: 0,
    visible: false,
    collisionless: true,
    materialData: JSON.stringify( {
        materialVersion: 1,
        materials: {                                             
            albedo: [0,0,1],           
            emissive: [0,0,1],            
            opacity: 0.5            
        }
    })
});

localRot = Quat.fromPitchYawRollDegrees( 108.4 , 90 , 72 ); 
var murdergameModeButtonID = Entities.addEntity( {
    type: "Model",
    name: "MurderGameModeButton",        
    modelURL: LOCATION_ROOT_URL + "ModeButton.fbx?"+ Date.now(),
    script: LOCATION_ROOT_URL + "MurderGameModeButton.js?" + Date.now(),
    parentID: murdergameConsoleID,
    localPosition: { x: -1.7401 , y: -0.6565 , z: -0.2484 },
    localDimensions: { x: 0.3375 , y: 0.0608 , z: 0.3375 },  
    localRotation: localRot,  
    visible: true,            
    description: "",        
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

var materialID3 = Entities.addEntity({
    type: "Material",
    name: "MurderGameButtonMaterial",
    parentID: murdergameModeButtonID,
    localPosition: { x: 0 , y: -0.2 , z: 0 },
    materialURL: "materialData",
    priority: 0,
    visible: false,
    collisionless: true,
    materialData: JSON.stringify( {
        materialVersion: 1,
        materials: {                                             
            albedo: [0,0,1],           
            emissive: [0,0,1],            
            opacity: 0.5            
        }
    })
});

localRot = Quat.fromPitchYawRollDegrees( 0 , 90 , 0 ); 
var MurderLeftSignID = Entities.addEntity( {
    type: "Text",
    name: "MurderLeftSign",        
    modelURL: LOCATION_ROOT_URL + "ModeButton.fbx?"+ Date.now(),    
    parentID: murdergameConsoleID,
    localPosition: { x: -2.4 , y: 0.9464 , z: 0.9110 },
    localDimensions: { x: 0.8664 , y: 1.5683 , z: 0.1 },  
    localRotation: localRot,  
    visible: true,            
    description: "",
    textColor: {r: 0 ,g: 0 ,b: 0 },
    backgroundColor: {r: 255 ,g: 255 ,b: 255 },
    lineHeight: 0.1,            
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

localRot = Quat.fromPitchYawRollDegrees( 0 , 90 , 0 ); 
var MurderRightSignID = Entities.addEntity( {
    type: "Text",
    name: "MurderRightSign",        
    modelURL: LOCATION_ROOT_URL + "ModeButton.fbx?" + Date.now(),    
    parentID: murdergameConsoleID,
    localPosition: { x: -2.4 , y: 0.9464 , z: -0.9110 },
    localDimensions: { x: 0.8664 , y: 1.5683 , z: 0.1 },  
    localRotation: localRot,  
    visible: true,            
    description: "",
    textColor: {r: 0 ,g: 0 ,b: 0 },
    backgroundColor: {r: 255 ,g: 255 ,b: 255 },
    lineHeight: 0.1,            
    lifetime: -1,            
    userData: JSON.stringify({
        grabbableKey: { grabbable: false, triggerable: false }
    } )                          
});

for (var i = 0; i < SPAWN_CUBE_AMOUNT; i++) { 
    Entities.addEntity({
        type: "Shape",
        shape: "Cube",
        parentID: murdergameConsoleID,
        name: "MurderSpawnCube" + i,       
        localPosition: { x: -5, y: -1.2, z: -5 + i },           
        visible: true,
        alpha: 1, 
        collisionless: true,
        serverScripts: LOCATION_ROOT_URL + "empty.js" + Date.now(),        
        color: { r: 0, g: 0, b: 255 },
        dimensions: { x: 0.3 , y: 0.3 , z: 0.3},            
        lifetime: -1,            
        userData: JSON.stringify({
            grabbableKey: { grabbable: true, triggerable: false }
        })                          
    });  
}

for (var j = 0; j < ITEM_CUBE_AMOUNT; j++) { 
    Entities.addEntity({
        type: "Shape",
        shape: "Cube",
        parentID: murdergameConsoleID,
        name: "MurderItemCube" + j,
        localPosition: { x:-5.5, y: -1.2 , z: -5 + j/2 },                 
        visible: true, 
        collisionless: true,
        serverScripts: LOCATION_ROOT_URL + "empty.js" + Date.now(),        
        color: { r: 0, g: 255, b: 0 },
        dimensions: { x: 0.3 , y: 0.3 , z: 0.3}, 
        alpha: 1,            
        lifetime: -1,            
        userData: JSON.stringify({
            grabbableKey: { grabbable: true, triggerable: false }
        })                          
    });  
}

Script.stop();
