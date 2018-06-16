// Measuring a robot

function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    function avg(array) {
        let sum = 0;
        for (const element of array) {
            sum += element;
        }
        return sum / array.length;
    }

    function runRobot(state, robot, memory) {
        for (let turn = 0; ; turn++) {
            if (state.parcels.length == 0) {
                return turn
                break;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }


    // generate tasks
    const tasksCount = 100;
    const testTasks = [];

    for (let i = 0; i < tasksCount; i++) {
        testTasks.push(VillageState.random());
    }

    // run robots
    const result1 = [];
    const result2 = [];
    for (const task of testTasks) {
        result1.push(runRobot(task, robot1, memory1));
        result2.push(runRobot(task, robot2, memory2));
    }

    // calculate avg
    console.log(`robot1 avg = ${avg(result1)}, robot2 avg = ${avg(result2)}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
