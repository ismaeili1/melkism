
export interface PropertyTwinModel {

    propertyId: string;

    propertyType: string;

    characteristics: string[];

}



export interface BuildingTwinModel {

    buildingId: string;

    buildingType: string;

    systems: string[];

}



export interface UrbanTwinModel {

    cityId: string;

    region: string;

    systems: string[];

}



export interface LifecycleModel {

    assetId: string;

    lifecyclePhase: string;

    conditionScore: number;

}



export interface TwinScenarioModel {

    scenarioId: string;

    name: string;

    variables: string[];

    expectedOutcome: string;

}



