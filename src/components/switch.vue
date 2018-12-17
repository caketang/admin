<template>
	<div>
		<el-switch  v-model="state" on-text="ontext" off-text="offtext" > </el-switch>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			ontext:{
				type:String,
				default:'开'
			},
			offtext:{
				type:String,
				default:'关'
			},
			state:{
				type:Boolean,
				default:false
			}
			
		}
	}
</script>