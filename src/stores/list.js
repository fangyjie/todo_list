import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { nanoid } from "nanoid";

export const useListStore = defineStore("list", () => {
	let tasks = reactive([
		{ id: "001", title: "打代码", done: false, isEdit: false },
		{ id: "002", title: "睡觉", done: false, isEdit: false },
		{ id: "003", title: "吃饭", done: false, isEdit: false },
	]);
	let finNum = computed(() => {
		let count = 0;
		for (const task of tasks) {
			if (task.done === true) count++;
		}
		return count;
	});
	let allNum = computed(() => {
		return tasks.length;
	});
	let allDo = computed({
		get: () => {
			for (const task of tasks) {
				if (task.done === false) return false;
			}
			return true;
		},
		set: (val) => {
			for (const task of tasks) {
				task.done = val ? true : false;
			}
		},
	});
	function addTask(val) {
		if (val.trim())
			tasks.push({
				id: nanoid(),
				title: val.trim(),
				done: false,
				isEdit: false,
			});
		else alert("输入内容为空，请重新输入！！！");
	}
	function updateDo(id) {
		for (const task of tasks) {
			if (task.id === id) task.done = !task.done;
		}
	}
	function edit(id) {
		for (const task of tasks) {
			if (task.id === id) task.isEdit = true;
		}
	}
	function updateTask(id, val) {
		for (const task of tasks) {
			if (task.id === id) {
				task.isEdit = false;
				task.title = val;
			}
		}
	}
	function deleteTask(id) {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === id) tasks.splice(i, 1);
		}
	}
	function clear() {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].done === true) {
				tasks.splice(i, 1);
				i--;
			}
		}
	}

	return {
		tasks,
		finNum,
		allNum,
		allDo,
		addTask,
		updateDo,
		edit,
		updateTask,
		deleteTask,
		clear,
	};
});
