
export interface DigitalTwinAsset {

    id: string;

    assetType: string;

    name: string;

    location: string;

    status: string;

}



export interface DigitalTwinState {

    assetId: string;

    timestamp: Date;

    state: string;

    condition: string;

}



export interface DigitalTwinEvent {

    id: string;

    assetId: string;

    type: string;

    payload: string;

    timestamp: Date;

}



export interface DigitalTwinSimulationRequest {

    id: string;

    assetId: string;

    scenario: string;

    parameters: string[];

}



