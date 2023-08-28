<template>
	<ul class="todo-main">
		<MyItem v-for="task in tasks" :key="task.id" :todo="task"></MyItem>
	</ul>
</template>

<script>
	import MyItem from "./MyItem.vue";
	import { useListStore } from "../stores/list";

	export default {
		name: "MyList",
		components: {
			MyItem,
		},
		setup() {
			const store = useListStore();
			let tasks = store.tasks;

			return { tasks };
		},
	};
</script>

<style scoped>
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
