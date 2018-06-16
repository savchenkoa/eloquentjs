// Robot efficiency
function effectiveRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let minLength = Number.POSITIVE_INFINITY;
        for (const parcel of parcels) {
            let candidateRoute;
            if (parcel.place != place) {
                candidateRoute = findRoute(roadGraph, place, parcel.place);
            } else {
                candidateRoute = findRoute(roadGraph, place, parcel.address);
            }

            if (candidateRoute.length < minLength) {
                route = candidateRoute;
            }
        }
    }

    return { direction: route[0], memory: route.slice(1) };
}

runRobotAnimation(VillageState.random(), effectiveRobot, []);
compareRobots(effectiveRobot, [], goalOrientedRobot, []);
