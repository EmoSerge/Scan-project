function parseDate(date) {
    const dateObj = new Date(date)

    const day = (+dateObj.getDate()) < 10
        ? `0${+dateObj.getDate()}`
        : +dateObj.getDate()

    const month = (+dateObj.getMonth() + 1) < 10
        ? `0${+dateObj.getMonth() + 1}`
        : +dateObj.getMonth() + 1

    const year = dateObj.getFullYear()

    return `${day}.${month}.${year}`
}


const mapArr = (arr) => {
    const resArr = []
    if (!arr || !arr.length) {
        return []
    } else {
        if (arr[0].histogramType === "totalDocuments") {
            arr[0].data.forEach(dataItem => {
                resArr.push({
                    date: parseDate(dataItem.date),
                    totalValue: dataItem.value,
                    riskValue: 0
                })
            })
            if (arr[1]) {
                resArr.forEach((resItem, index) => {
                    resItem.riskValue = arr[1].data[index].value
                })
            }
        }

        if (arr[0].histogramType === "riskFactors") {
            arr[0].data.forEach(dataItem => {
                resArr.push({
                    date: parseDate(dataItem.date),
                    totalValue: 0,
                    riskValue: dataItem.value
                })
            })
            if (arr[1]) {
                resArr.forEach((resItem, index) => {
                    resItem.totalValue = arr[1].data[index].value
                })
            }
        }
        return resArr
    }

}

function parseXml(xml) {
    const parser = new DOMParser()
    const html = parser.parseFromString(xml, "text/xml")
    let result = ''
    html.getElementsByTagName("scandoc")[0].childNodes.forEach((node, index) => {
        if (index < 3) {
            if ((node.innerHTML).match(/[а-я ]/gi)) {
                result += (node.innerHTML).match(/[а-я ]/gi).join('')
            }
        }
    })
    return result + '...'
}

export { parseDate, mapArr, parseXml}