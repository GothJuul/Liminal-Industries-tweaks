execute at @e[type=marker,tag=light] unless block ~ ~ ~ air run kill @e[type=marker,tag=light,limit=1,sort=nearest]
execute at @e[type=marker,tag=light] run setblock ~ ~ ~ searchlight:searchlight_lightsource
execute at @e[type=marker,tag=light] run tp @e[type=marker,tag=light] ~ ~1 ~
