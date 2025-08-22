execute as @e[type=marker,tag=light_destruction] at @s if block ~ ~ ~ minecraft:light run setblock ~ ~ ~ minecraft:air
execute as @e[type=marker,tag=light_destruction] at @s if block ~ ~ ~ searchlight:searchlight_lightsource run setblock ~ ~ ~ minecraft:air

execute as @e[type=marker,tag=light_destruction] at @s run tp @s ~ ~-1 ~

execute as @e[type=marker,tag=light_destruction] at @s run scoreboard players add @s timer 1
execute as @e[type=marker,tag=light_destruction,scores={timer=30..}] at @s run kill @s
