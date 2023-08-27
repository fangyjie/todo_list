<template>
	<li>
		<label>
			<input type="checkbox" v-model="done" />
			<span v-show="!isEdit">{{ title }}</span>
			<input
				type="text"
				v-show="isEdit"
				v-model="title"
				@blur="isEdit = false"
				ref="getFocus"
			/>
		</label>
		<button class="btn btn-danger">删除</button>
		<button class="btn btn-edit" v-show="!isEdit" @click="editTask">
			编辑
		</button>
	</li>
</template>

<script>
	import { ref, nextTick } from "vue";
	export default {
		name: "MyItem",
		props: ["title", "done"],
		setup(props) {
			let title = ref(props.title);
			let done = ref(props.done);
			let isEdit = ref(false);
			const getFocus = ref(null);

			function editTask() {
				isEdit.value = true;
				nextTick(() => {
					getFocus.value.focus();
				});
			}

			return { title, done, isEdit, getFocus, editTask };
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
