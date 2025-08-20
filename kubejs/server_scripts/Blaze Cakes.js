//onEvent('recipes', event => {
ServerEvents.recipes(event => {
event.custom({
 "type": "create:mixing",
  "ingredients": [
    {
      "fluid": "minecraft:lava", amount: 100
    },
    {
      "item": "minecraft:cobblestone", amount: 1
    },
    {
      "item": "minecraft:nether_wart", amount: 2
    },
  ],
    "results": [
    {
      "item": "minecraft:netherrack", amount: 1
    }
  ]
})})