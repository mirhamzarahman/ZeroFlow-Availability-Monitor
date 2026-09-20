/**
 * ZeroFlow Availability Monitor
 *
 * Detects the longest continuous inactive period
 * from a binary availability status stream.
 *
 * Status:
 * 1 = Active
 * 0 = Inactive
 */

/**
 * Finds the longest inactive window in a status stream.
 *
 * @param {number[]} statusStream - Array containing binary status values
 * @returns {number} Longest consecutive inactive period
 */
function findLongestInactiveWindow(statusStream) {
    let currentInactivePeriod = 0;
    let longestInactivePeriod = 0;

    for (const status of statusStream) {
        if (status === 0) {
            currentInactivePeriod++;

            longestInactivePeriod = Math.max(
                longestInactivePeriod,
                currentInactivePeriod
            );
        } else {
            currentInactivePeriod = 0;
        }
    }

    return longestInactivePeriod;
}


// Example monitoring data
const serverStatus = [1, 0, 0, 1, 0, 0, 0, 1];

const downtime = findLongestInactiveWindow(serverStatus);

console.log(
    `Longest downtime period: ${downtime}`
);
