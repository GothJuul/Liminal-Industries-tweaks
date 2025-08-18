ServerEvents.recipes(event => {

    event.replaceInput({ output: 'botania:apothecary_default' }, '#botania:petals', 'minecraft:cobblestone_slab')
    event.remove({id: 'botania:runic_altar'})
    event.remove({id: 'botania:mushroom_stew'})

    event.remove({output: 'botania:mana_spreader'})
    event.shaped('botania:mana_spreader', [
		'AAA', 
		'BC ',
		'AAA'  
		],{
		  A: 'botania:livingwood', 
		  B: 'minecraft:gold_ingot',
          C: '#botania:petals'
	})

    event.remove({output: 'botania:runic_altar'})
    event.shaped('botania:runic_altar', [
		'   ', 
		'ABA',
		'AAA'  
		],{
		  A: 'botania:livingrock', 
		  B: 'botania:manasteel_ingot'
	})

    event.remove({output: 'botania:diluted_pool'})
    event.shaped('botania:diluted_pool', [
		'   ', 
		'A A',
		'ABA'  
		],{
		  A: 'botania:livingrock', 
		  B: 'eidolon:pewter_ingot'
	})

    event.remove({id: 'botania:pure_daisy/livingwood'})
    event.recipes.botania.pure_daisy('botania:livingwood', '#forge:treated_wood')

    let runic_altar = (Input1, Input2, Input3, Input4, Input5, Mana, Output) => {
    event.recipes.botania.runic_altar(Output, [Input1, Input2, Input3, Input4, Input5], Mana)
    }

    event.remove({output: 'botania:rune_water'})
    runic_altar(
        "botania:mana_powder", 
        "botania:manasteel_ingot", 
        "minecraft:cod",
        "minecraft:sugar_cane",
        "actuallyadditions:water_bowl",
        5200,
        "2x botania:rune_water"
    )

    let mana_infusion = (Input, Output, Mana) => {
        event.recipes.botania.mana_infusion(Output, Input, Mana)
    }

    mana_infusion(
        'thermal:quartz_dust',
        'ae2:certus_quartz_dust',
        200
    )

    event.remove({output: 'botania:fertilizer'})
    event.recipes.botania.petal_apothecary('botania:fertilizer', [
        'supplementaries:ash',
        '#forge:dyes',
        '#forge:dyes'

    ])

    event.recipes.botania.petal_apothecary('minecraft:bamboo', [
        'botania:rune_earth',
        'botania:livingwood_twig',
        'minecraft:sugar_cane',
        '#botania:petals/lime',
        '#botania:petals/lime',
        'thermal:rubber'
    ])

    event.remove({type: 'minecraft:crafting_shapeless', output: 'thermal:redstone_mushroom_spores'})
    event.recipes.botania.petal_apothecary('thermal:redstone_mushroom_spores', [
        '#botania:petals/red',
        'minecraft:sweet_berries',
        'supplementaries:ash'
    ])

    event.remove({type: 'minecraft:crafting_shapeless', output: 'thermal:glowstone_mushroom_spores'})
    event.recipes.botania.petal_apothecary('thermal:glowstone_mushroom_spores', [
        '#botania:petals/yellow',
        'minecraft:gold_nugget',
        'thermal:sulfur_dust'
    ])

    event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:slime_ball'})
    event.remove({type: 'minecraft:crafting_shapeless', output: 'thermal:slime_mushroom_spores'})
    event.recipes.botania.petal_apothecary('thermal:slime_mushroom_spores', [
        '#botania:petals/lime',
        'minecraft:sugar',
        'kubejs:carpet_dust'
    ])

    event.recipes.botania.petal_apothecary('minecraft:red_mushroom', [
        '#botania:petals/red',
        'minecraft:bone_meal',
        'supplementaries:ash',
        'botania:mana_powder'
    ])
	

    event.recipes.botania.petal_apothecary('minecraft:brown_mushroom', [
        '#botania:petals/brown',
        'minecraft:bone_meal',
        'supplementaries:ash',
        'botania:mana_powder'
	])

    event.recipes.botania.petal_apothecary('minecraft:cornflower', [
        '#botania:petals/blue',
        'minecraft:bone_meal',
        'botania:mana_powder',
    ])

    event.remove({type: 'minecraft:crafting_shapeless', output: 'thermal:gunpowder_mushroom_spores'})

    event.recipes.botania.petal_apothecary('minecraft:sugar_cane', [
        '#botania:petals/green',
        '#botania:petals/lime',
        'botania:livingwood_twig',
        'minecraft:paper'
    ])

    event.shapeless('3x minecraft:redstone', [
		'thermal:redstone_mushroom_spores'
	])



/*
    onEvent("recipes", event => {
        event.remove({ output: "botania:livingrock" })
    
        event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 200, "minecraft:acacia_log")
       
        event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond")
        event.recipes.botania.elven_trade(["minecraft:acacia_boat", "minecraft:acacia_button"], ["minecraft:diamond_block", "minecraft:gold_ingot"])
       
        event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:acacia_leaves")
        event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone", 1)
    
        event.recipes.botania.brew("kubejs:torrent", ["minecraft:acacia_boat"])
    
        event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"])
    
        event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000)
    
        event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000)
    
        event.recipes.botania.orechid("minecraft:acacia_button", "minecraft:acacia_fence", 1)
    
        event.recipes.botania.orechid_ignem("minecraft:acacia_leaves", "minecraft:acacia_fence_gate", 1)
    
        event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10)
    })
*/

})
