export const initializeGame = (
	size: number
): { grid: boolean[]; bombPosition: number; revealed: boolean[] } => {
	const bombPosition = Math.floor(Math.random() * size);
	const grid = new Array(size).fill(false);
	const revealed = new Array(size).fill(false);
	return { grid, bombPosition, revealed };
};
