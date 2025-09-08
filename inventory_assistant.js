let itemName = "Controllers"
let unitCost = 8
let currentStock = 200
let reorderLevel = 460
let targetStock = 340
let weeklyDemand = 20
let supplierLeadTimeWeeks = 2

weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
StockDeficit = Math.max(0, targetStock - currentStock)
reoderQuantity = (currentStock <= reorderLevel || weeksOfCover
    < supplierLeadTimeWeeks) ? Math.ceil(StockDeficit) : 0
estimatedRedorderCost = reoderQuantity * unitCost
reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log(
    `       ${itemName}
    -----------------
${weeksOfCover}
${reorderNow}
${reoderQuantity}
$${estimatedRedorderCost.toFixed(2)}`
)
