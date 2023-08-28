<template>
	<li>
		<label>
			<input
				type="checkbox"
				:checked="todo.done"
				@change="store.editDo(todo.id)"
			/>
			<span v-show="!todo.isEdit">{{ todo.title }}</span>
			<input
				type="text"
				v-show="todo.isEdit"
				v-model="dotask"
				@blur="editTask(todo.id, dotask)"
				ref="getFocus"
			/>
		</label>
		<button class="btn btn-danger" @click="store.deleteTask(todo.id)">
			删除
		</button>
		<button
			class="btn btn-edit"
			v-show="!todo.isEdit"
			@click="edit(todo.id)"
		>
			编辑
		</button>
	</li>
</template>

<script>
	import { ref, nextTick } from "vue";
	import { useListStore } from "../stores/list";

	export default {
		name: "MyItem",
		props: ["todo"],
		setup(props) {
			const store = useListStore();
			const dotask = ref(props.todo.title);
			const getFocus = ref(null);

			function edit(id) {
				for (const task of store.tasks) {
					if (task.id === id) task.isEdit = true;
				}
				nextTick(() => {
					getFocus.value.focus();
				});
			}
			function editTask(id, val) {
				for (const task of store.tasks) {
					if (task.id === id) {
						task.isEdit = false;
						task.title = val;
					}
				}
			}

			return { dotask, getFocus, store, edit, editTask };
		},
	};
</script>

<style scoped>
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}
	.btn-edit {
		margin-right: 5px;
		color: #fff;
		background-color: #24acf2;
		border: 1px solid #0067c0;
	}

	.btn-edit:hover {
		color: #fff;
		background-color: #0067c0;
	}
</style>
