import axios from "axios";
import { HISTOGRAMS, OBJECTSEARCH, DOCUMENTS } from "./API.jsx";

async function Histograms(searchParametrs) {
    return await axios({
        url: HISTOGRAMS,
        method: "post",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        },
        data: {
            "issueDateInterval": {
                "startDate": `${searchParametrs.startDate}`,
                "endDate": `${searchParametrs.endDate}`
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": `${searchParametrs.inn}`,
                            "maxFullness": true,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": `${searchParametrs.mainRole}`,
                    "tonality": `${searchParametrs.tonality}`,
                    "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
                    "riskFactors": {
                        "and": [],
                        "or": [],
                        "not": []
                    },
                    "themes": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
            },
            "attributeFilters": {
                "excludeTechNews": `${searchParametrs.technicalNews}`,
                "excludeAnnouncements": `${searchParametrs.announcements}`,
                "excludeDigests": `${searchParametrs.newsDigests}`
            },
            "similarMode": "duplicates",
            "limit": `${searchParametrs.documentCount}`,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]
        },
    }).then((res) => {
        return res
    });
}

async function Objectsearch(searchParametrs) {
    return await axios({
        url: OBJECTSEARCH,
        method: "post",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        },
        data: {
            "issueDateInterval": {
                "startDate": `${searchParametrs.startDate}`,
                "endDate": `${searchParametrs.endDate}`
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": `${searchParametrs.inn}`,
                            "maxFullness": true,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": `${searchParametrs.mainRole}`,
                    "tonality": `${searchParametrs.tonality}`,
                    "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
                    "riskFactors": {
                        "and": [],
                        "or": [],
                        "not": []
                    },
                    "themes": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
            },
            "attributeFilters": {
                "excludeTechNews": `${searchParametrs.technicalNews}`,
                "excludeAnnouncements": `${searchParametrs.announcements}`,
                "excludeDigests": `${searchParametrs.newsDigests}`
            },
            "similarMode": "duplicates",
            "limit": `${searchParametrs.documentCount}`,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]
        },
    }).then((res) => {
        return res;
    });
}

async function Documents(arrForRequest) {
    return await axios({
        url: DOCUMENTS,
        method: "post",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        },
        data: {
            "ids": arrForRequest
        },
    }).then((res) => {
        return res
    });
}

export { Histograms, Objectsearch, Documents }
