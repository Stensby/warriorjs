# stensby - Baby Steps

### _For players new to WarriorJS_

## Level 9

_Time to hone your skills and apply all of the abilities that you've learned._

> **TIP:** Watch your back.

### Floor Map

```
╔═══════════╗
║>Ca  @ S wC║
╚═══════════╝

C = Captive (1 HP)
a = Archer (7 HP)
@ = stensby (20 HP)
S = Thick Sludge (24 HP)
w = Wizard (3 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
- `warrior.pivot()`: Rotate in the given direction (backward by default).
- `warrior.rescue()`: Release a unit from his chains in the given direction (forward by default).
- `warrior.rest()`: Gain 10% of max health back, but do nothing more.
- `warrior.shoot()`: Shoot your bow & arrow in the given direction (forward by default) dealing 3 HP of damage to the first unit in a range of 3 spaces.
- `warrior.walk()`: Move one space in the given direction (forward by default).

### Senses

- `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
- `warrior.health()`: Return an integer representing your health.
- `warrior.look()`: Returns an array of up to 3 spaces in the given direction (forward by default).
- `warrior.think()`: Think out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.