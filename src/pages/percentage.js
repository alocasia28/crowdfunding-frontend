function calculatePercentage(value, total) {
    if (total === 0) {
        return 0;
    }
    return Math.round((value / total) * 100);
}

export default calculatePercentage;
