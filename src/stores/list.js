import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { nanoid } from "nanoid";

export const useListStore = defineStore("list", () => {
	let tasks = reactive([
		{ id: "001", title: "打代码", done: false, isEdit: false },
		{ id: "002", title: "睡觉", done: false, isEdit: false },
		{ id: "003", title: "吃饭", done: false, isEdit: false },
	]);
	const all = computed({
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
	function editDo(id) {
		for (const task of tasks) {
			if (task.id === id) task.done = !task.done;
		}
	}
	// function allDo() {
	// 	all.value = !all.value;
	// 	for (const task of tasks) {
	// 		task.done = all.value ? true : false;
	// 	}
	// }
	function editTask(id, val) {
		isEdit = false;
		for (const task of tasks) {
			if (task.id === id) task.title = val;
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
		all,
		addTask,
		editDo,
		editTask,
		deleteTask,
		clear,
	};
});
