class Player {

    constructor() {
        this.enemy_in_sight = false;
        this.spaces_array = Array;
        this.health = 20;
        this.turn_count = 0;
        this.reached_wall = false;
    }

    isEnemyInSight(warrior) {
        const spaceWithUnit = warrior.look().find(space => space.isUnit());
        return spaceWithUnit && spaceWithUnit.getUnit().isEnemy();
    }

    isInjured(warrior) {
        return warrior.health() < 20;
    }

    takingDamage(warrior) {
        return warrior.health() < this.health;
    }

    smartWalk(warrior) {
        if (warrior.feel().isWall()) {
            this.reached_wall = true;
            warrior.pivot();
        }
        else if (warrior.feel().isStairs() && !this.reached_wall) {
            warrior.pivot();
        }
        else {
            warrior.walk();
        }
    }


    playTurn(warrior) {
        this.spaces_array = warrior.look();
        this.enemy_in_sight = this.isEnemyInSight(warrior);

        warrior.think('Turn number: ' + this.turn_count);

        // Check if started against wall
        if (warrior.feel('backward').isWall()) {
            this.reached_wall = true;
        }

        // Hack for level 9
        if (this.turn_count === 0 && this.enemy_in_sight) {
            warrior.pivot();
            this.turn_count = 100;
        }
        else if (this.turn_count > 100 && !this.enemy_in_sight) {
            warrior.pivot();
            this.turn_count = 4;
        }

        // Heal if safe and enemy still in sight
        else if ((!this.takingDamage(warrior)) && (this.enemy_in_sight) && (this.isInjured(warrior))) {
            warrior.think('I am safe');
            warrior.rest();
        }

        // Check for unit in melee range
        else if (this.spaces_array[0].isUnit()) {
            //Attack
            if (this.spaces_array[0].getUnit().isEnemy()) {
                warrior.attack();
            }
            //Rescue
            else {
                warrior.rescue();
            }
        }
        // Check for unit in bow range
        else if (this.spaces_array[1] && this.spaces_array[1].isUnit()) {
            //Attack
            if (this.spaces_array[1].getUnit().isEnemy()) {
                warrior.shoot();
            }
            //Don't shoot captives
            else {
                this.smartWalk(warrior);
            }
        }
        // Check for unit in bow range
        else if (this.spaces_array[2] && this.spaces_array[2].isUnit() && this.spaces_array[2].getUnit().isEnemy()) {
            //Attack
            warrior.shoot();
        }
        else {
            this.smartWalk(warrior);
        }
        this.turn_count++;
        this.health = warrior.health();
    }
}