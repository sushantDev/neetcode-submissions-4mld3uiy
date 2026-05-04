class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = Array.from({length: numCourses}, () => []);

        // Build graph
        for (let [a, b] of prerequisites) {
            graph[b].push(a);
        }

        const visited = new Array(numCourses).fill(0);
        const result = [];

        const dfs = (course) => {
            if (visited[course] === 1) return false;
            if (visited[course] === 2) return true;
            visited[course] = 1;
            for (let next of graph[course]) {
                if (!dfs(next)) return false;
            }
            visited[course] = 2;
            result.push(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return result.reverse();
    }
}
