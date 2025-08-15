//onEvent('recipes', event => {
ServerEvents.recipes(event => {
event.custom({
 "type": "create:mixing",
  "ingredients": [
    {
      "fluid": "createaddition:seed_oil", amount: 1000
    },
    {
      "item": "thermal:rubber", amount: 2
    },
  ],
    "results": [
    {
      "item": "minecraft:slime_ball", amount: 3
    }
  ]
})})

