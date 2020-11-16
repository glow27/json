//JSON.parce()
const parced = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

// 1
const itemName = parced.displayedName.displayedName.value;

// 2
const shopsWithItems = [];
for (let shop in parced.stock.stocks[34]){
    if (+parced.stock.stocks[34][shop] > 0) {
        shopsWithItems.push(shop)
    }
}

// 3 
// в условии написано: 'найти максимальное количество товара в регионе, 
// вернуть это количество и номер магазина'
// не совсем понятно, если нужно найти максимальное количество товара в регионе,
// то номер какого магазина нужно вернуть?
// поэтому возвращаю номер магазина с максимальным количеством товара
// и число товара в регионе тоже
let shopWithMaxQty = '';
let maxQty = 0;
let qtyInRegion = 0;

for (let shop in parced.stock.stocks[34]){
    qtyInRegion += +parced.stock.stocks[34][shop];
    if (+parced.stock.stocks[34][shop] > maxQty) {
        maxQty = +parced.stock.stocks[34][shop];
        shopWithMaxQty = shop;
    }
}

console.log(`количество ${itemName} в регионе составляет ${qtyInRegion} штук, магазин №${shopWithMaxQty} имеет самое большое количество(${maxQty} штук)`);
