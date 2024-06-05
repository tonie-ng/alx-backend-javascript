export function getStudentIdsSum(students) {
	return students.reduce(
		(prev, curr) => prev.id || prev + curr.id, 0
	);
}
