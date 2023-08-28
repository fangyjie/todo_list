<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="store.all" />
		</label>
		<span>
			<span>已完成{{ finNum }}</span> / 全部{{ allNum }}
		</span>
		<button class="btn btn-danger" @click="store.clear">
			清除已完成任务
		</button>
	</div>
</template>

<script>
	import { computed } from "vue";
	import { useListStore } from "../stores/list";

	export default {
		name: "MyFooter",
		setup() {
			const store = useListStore();

			let finNum = computed(() => {
				let count = 0;
				for (const task of store.tasks) {
					if (task.done === true) count++;
				}
				return count;
			});
			let allNum = computed(() => {
				return store.tasks.length;
			});

			return { finNum, allNum, store };
		},
	};
</script>

<style scoped>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
