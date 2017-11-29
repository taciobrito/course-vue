var app = new Vue({
	el: '#app',
	data: {
		books:[],
	},
	methods:{
		
	},
	created:function(){
		var _self = this;
		_self.$http.get('dataServer.json').then(function(response){
			 _self.books = response.data;
		});
	},
});