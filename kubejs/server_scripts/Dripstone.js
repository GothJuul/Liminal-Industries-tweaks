//onEvent('recipes', event => {
ServerEvents.recipes(event => {
event.custom({
 "type": "create:mixing",
   "ingredients": [
     {
       "fluid": "minecraft:lava", amount: 100
     },
     {
       "item": "minecraft:granite", amount: 1
     },
     {
       "item": "thermal:bronze_ingot", amount: 1
     },
   ],
     "results": [
     {
       "item": "kubejs:undrip_stone", amount: 1
     }
  ]
})

//placeholder recipe

event.custom({
 "type": "create:mixing",
   "ingredients": [
     {
       "fluid": "minecraft:water", amount: 100
     },
     {
       "item": "kubejs:undrip_stone", amount: 1
     },
     {
       "item": "botania:livingrock", amount: 1
     },
   ],
     "results": [
     {
       "item": "minecraft:dripstone_block", amount: 2
     }
  ]
 })
})