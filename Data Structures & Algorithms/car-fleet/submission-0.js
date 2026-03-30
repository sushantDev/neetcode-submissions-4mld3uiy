class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let carPositionWithSpeed = []

        for (let i = 0; i < position.length; i++) {
            carPositionWithSpeed[i] = [position[i], speed[i]]
        }

        carPositionWithSpeed.sort((a, b) => b[0] - a[0])

        let fleets = 0
        let lastFleetTime = 0

        for (let i = 0; i < carPositionWithSpeed.length; i++) {
            let time = (target - carPositionWithSpeed[i][0]) / carPositionWithSpeed[i][1]
            if (time > lastFleetTime) {
                fleets++
                lastFleetTime = time
            }
        }

        return fleets
    }
}
